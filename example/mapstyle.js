export const makeMapStyle = (xyzUrls) => {
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

const makeXyzTileSourceLayer = (xyzUrl) => {
    const source = {
        [xyzUrl]: { type: 'raster', tiles: [xyzUrl], minzoom: 4, maxzoom: 10 },
    };
    const layer = {
        id: xyzUrl,
        type: 'raster',
        source: xyzUrl,
        paint: {
            'raster-opacity': 0.5,
        },
    };
    return { source, layer };
};
