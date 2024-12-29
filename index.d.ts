import type { IControl, Map, LayerSpecification, ControlPosition } from 'maplibre-gl';
type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type TemporalFrame = {
    title: string;
    layers: LayerSpecification[];
};
type Options = {
    position?: Position;
    interval?: number;
    performance?: boolean;
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
