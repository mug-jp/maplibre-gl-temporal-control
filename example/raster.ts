import maplibregl, {
	RasterLayerSpecification,
	RasterSourceSpecification,
	StyleSpecification,
} from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import TemporalControl from '../src';

import { nowcast } from 'jma-utils';

const makeMapStyle = (xyzUrls: string[]): StyleSpecification => {
	const xyzSourcesLayers = xyzUrls.map((xyzUrl) =>
		makeXyzTileSourceLayer(xyzUrl),
	);
	const xyzSources = xyzSourcesLayers.reduce((prev, sourceLayer) => {
		return {
			...prev,
			...sourceLayer.source,
		};
	}, {});
	const xyzLayers = xyzSourcesLayers.map((sourceLayer) => sourceLayer.layer);
	return {
		version: 8,
		sources: {
			OSM: {
				type: 'raster',
				tiles: [
					'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
				],
				tileSize: 256,
				attribution:
					'<a href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a>',
			},
			...xyzSources,
		},
		layers: [
			{
				id: 'OSM',
				type: 'raster',
				source: 'OSM',
				minzoom: 0,
				maxzoom: 18,
			},
			...xyzLayers,
		],
	};
};

const makeXyzTileSourceLayer = (
	xyzUrl: string,
): {
	source: { [key: string]: RasterSourceSpecification };
	layer: RasterLayerSpecification;
} => {
	const source: { [key: string]: RasterSourceSpecification } = {
		[xyzUrl]: {
			type: 'raster',
			tiles: [xyzUrl],
			minzoom: 4,
			maxzoom: 10,
			attribution:
				"<a href='https://www.jma.go.jp/jma/indexe.html' target='_blank'>Japan Meteorological Agency</a> | <a href='https://twitter.com/kanahiro_iguchi' target='_blank'>@kanahiro_iguchi</a>",
		},
	};
	const layer: RasterLayerSpecification = {
		id: xyzUrl,
		type: 'raster',
		source: xyzUrl,
		paint: {
			'raster-opacity': 0.5,
		},
	};
	return { source, layer };
};

const map = new maplibregl.Map({
	container: 'map',
	style: {
		version: 8,
		sources: {},
		layers: [],
	},
	center: [136.0, 35.0],
	hash: true,
	bearing: -18,
	maxPitch: 85,
	pitch: 60,
	zoom: 2,
	minZoom: 5,
	maxZoom: 10,
});
map.on('styledata', () => {
	map.setProjection({ type: 'globe' });
});

const formatDatetimeText = (yyyymmddHHMMSS) => {
	// ex) https://www.jma.go.jp/bosai/jmatile/data/nowc/20210813094000/none/20210813094000/surf/hrpns/{z}/{x}/{y}.png
	const yyyy = yyyymmddHHMMSS.substring(0, 4);
	const mm = yyyymmddHHMMSS.substring(4, 6);
	const dd = yyyymmddHHMMSS.substring(6, 8);
	const HH = yyyymmddHHMMSS.substring(8, 10);
	const MM = yyyymmddHHMMSS.substring(10, 12);
	const SS = yyyymmddHHMMSS.substring(12);
	return `${yyyy}-${mm}-${dd}T${HH}:${MM}:${SS}Z`;
};

nowcast.getTimeData().then((timedata) => {
	const tileUrlData = nowcast.getXyzTileUrlData(timedata);
	const tileUrls = [
		...tileUrlData.past,
		tileUrlData.now,
		...tileUrlData.forecast,
	];
	const mapStyle = makeMapStyle(tileUrls);
	map.setStyle(mapStyle);

	const overlayLayers = mapStyle.layers.slice(1); //layers[0] = background
	const temporalFrames = overlayLayers.map((layer) => ({
		layers: [layer],
		title: formatDatetimeText(layer.id.substring(66, 80)),
	}));

	const temporalControl = new TemporalControl(temporalFrames, {
		interval: 100,
	});
	map.addControl(temporalControl);
});
