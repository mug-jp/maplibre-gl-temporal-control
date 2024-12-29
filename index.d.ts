import { AnyLayer, IControl, Map } from 'maplibre-gl';
type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type TemporalFrame = {
    title: string;
    layers: AnyLayer[];
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
    getDefaultPosition(): string;
    refresh(): void;
    private setVisible;
}
export {};
