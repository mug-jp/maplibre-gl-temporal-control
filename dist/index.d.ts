import { ControlPosition, IControl, LayerSpecification, Map } from 'maplibre-gl';
declare type TemporalFrame = {
    title: string;
    layers: LayerSpecification[];
};
declare type Options = {
    position?: ControlPosition;
    interval?: number;
    loopDelay?: number;
    performance?: boolean;
    showButtons?: boolean;
    loop?: boolean;
    autoplay?: boolean;
};
export default class TemporalControl implements IControl {
    private map;
    private options;
    private container;
    private containerTitle;
    private temporalSlider;
    private temporalFrames;
    constructor(temporalFrames: TemporalFrame[], options?: Options);
    onAdd(map: Map): HTMLDivElement;
    onRemove(): void;
    getDefaultPosition(): ControlPosition;
    refresh(): void;
    private setVisible;
}
export {};
