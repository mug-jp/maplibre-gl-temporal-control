import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import TemporalControl from '../src';

import { nowcast } from 'jma-utils';
import { makeMapStyle } from './mapstyle';

const map = new maplibregl.Map({
    container: 'map',
    style: {
        version: 8,
        sources: {},
        layers: [],
    },
    center: [136.0, 35.0],
    zoom: 4,
    minZoom: 4,
    maxZoom: 12,
    customAttribution:
        "<a href='https://www.jma.go.jp/jma/indexe.html' target='_blank'>Japan Meteorological Agency</a> | <a href='https://twitter.com/kanahiro_iguchi' target='_blank'>@kanahiro_iguchi</a>",
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
        title: formatDatetimeText(layer.id.substring(46, 60)),
    }));

    const temporalControl = new TemporalControl(temporalFrames, {
        interval: 100,
    });
    map.addControl(temporalControl);
});
