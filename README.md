# maplibre-gl-temporal-control

<img src='./imgs/anime.gif'>

## examples

-   RasterTiles: https://kanahiro.github.io/maplibre-gl-temporal-control/raster.html
-   VectorTiles: https://kanahiro.github.io/maplibre-gl-temporal-control/vector.html

## usage

```sh
npm install maplibre-gl-temporal-control
```

```typescript

const map = new maplibregl.Map(mapOptions)

// anyLayer is maplibre layer-object
map.addLayer(anyLayer1_1)
map.addLayer(anyLayer1_2)
map.addLayer(anyLayer2_1)
map.addLayer(anyLayer2_2)
map.addLayer(anyLayer3_1)
map.addLayer(anyLayer3_2)
// some layers...

import TemporalControl from 'maplibre-gl-temporal-control';

const temporalFrames = [
    {
        title:'frame1', // shown on control panel
        layers:[anyLayer1_1, anyLayer1_2] // set layers you want to show at one frame...
    },
        title:'frame2',
        layers:[anyLayer2_1, anyLayer2_2]
    },
    {
        title:'frame3',
        layers:[anyLayer3_1, anyLayer3_2]
    },
    // add frames...
]

const temporalControl = new TemporalControl(temporalFrames, {
    interval: 100, // a duration frames are shown
    position: 'top-left'
});
map.addControl(temporalControl);
```

### Tips

-   In frames, You must set layer-objects corresponding to in map.
-   Layers set in frames must be added in map
