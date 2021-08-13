import { AnyLayer, IControl, Map } from 'maplibre-gl';

import { play, pause, reload, skipBackward, skipForward } from './icons';

const ACTIVE_BUTTON_COLOR = 'rgb(204, 204, 204)';

type ContainerOptions = {
    length: number;
    interval: number;
    onSliderValueChange: () => void;
};

const makeImg = (icon: string): HTMLImageElement => {
    const img = document.createElement('img');
    img.src = icon;
    return img;
};

const makeContainer = ({
    length,
    interval,
    onSliderValueChange,
}: ContainerOptions): [HTMLDivElement, HTMLDivElement, HTMLInputElement] => {
    // outest div
    const container = document.createElement('div');
    container.classList.add('mapboxgl-ctrl');
    container.classList.add('mapboxgl-ctrl-group');
    container.style.width = '240px';
    container.style.height = '84px';
    container.style.backgroundColor = '#fff';
    container.style.textAlign = 'center';

    const titleDiv = document.createElement('div');
    titleDiv.innerHTML = '<br />';
    titleDiv.style.marginTop = '4px';
    container.appendChild(titleDiv);

    // temporal slider
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.value = '0';
    slider.min = '0';
    slider.max = String(length - 1);
    slider.addEventListener('input', () => {
        onSliderValueChange();
    });
    slider.style.width = '80%';
    slider.style.margin = '4px 0';
    container.appendChild(slider);

    // buttons div
    // loop, prev, pause, play, next
    const buttonsDiv = document.createElement('div');
    buttonsDiv.style.display = 'flex';
    buttonsDiv.style.justifyContent = 'center';
    buttonsDiv.style.margin = '4px 0 0 0';
    const loopButton = document.createElement('button');
    loopButton.appendChild(makeImg(reload));
    loopButton.style.border = '0';
    loopButton.style.borderRadius = '0';
    loopButton.style.marginRight = '16px';
    loopButton.style.height = '24px';
    loopButton.onclick = () => {
        loopButton.style.backgroundColor =
            loopButton.style.backgroundColor === '' ? ACTIVE_BUTTON_COLOR : '';
    };
    buttonsDiv.appendChild(loopButton);
    const decrement = () => {
        slider.value = String(Math.max(0, Number(slider.value) - 1));
        onSliderValueChange();
        return Number(slider.min) < Number(slider.value);
    };
    const increment = () => {
        if (
            loopButton.style.backgroundColor !== '' &&
            Number(slider.value) == Number(slider.max)
        ) {
            while (decrement()) {}
        } else {
            slider.value = String(
                Math.min(Number(slider.max), Number(slider.value) + 1),
            );
        }
        onSliderValueChange();
        return Number(slider.value) < Number(slider.max);
    };
    const prevButton = document.createElement('button');
    prevButton.appendChild(makeImg(skipBackward));
    prevButton.onclick = decrement;
    prevButton.style.border = '0';
    prevButton.style.height = '24px';
    const pauseButton = document.createElement('button');
    pauseButton.appendChild(makeImg(pause));
    pauseButton.style.border = '0';
    pauseButton.style.height = '24px';
    const playButton = document.createElement('button');
    playButton.appendChild(makeImg(play));
    playButton.style.border = '0';
    playButton.style.height = '24px';
    playButton.onclick = () => {
        if (playButton.style.backgroundColor === ACTIVE_BUTTON_COLOR) return;

        playButton.style.backgroundColor = ACTIVE_BUTTON_COLOR;
        const timerId = setInterval(() => {
            increment();
        }, interval);
        pauseButton.onclick = () => {
            clearInterval(timerId);
            pauseButton.onclick = null;
            playButton.style.backgroundColor = '';
        };
    };
    const nextButton = document.createElement('button');
    nextButton.appendChild(makeImg(skipForward));
    nextButton.style.border = '0';
    nextButton.style.height = '24px';
    nextButton.onclick = increment;
    buttonsDiv.appendChild(prevButton);
    buttonsDiv.appendChild(pauseButton);
    buttonsDiv.appendChild(playButton);
    buttonsDiv.appendChild(nextButton);

    container.appendChild(buttonsDiv);

    return [container, titleDiv, slider];
};

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

type TemporalFrame = {
    title: string;
    layers: AnyLayer[];
};

type Options = {
    position?: Position;
    interval?: number;
};

export default class TemporalControl implements IControl {
    private map: Map | undefined;
    private options: Options;

    private container: HTMLDivElement;
    private containerTitle!: HTMLDivElement;
    private temporalSlider!: HTMLInputElement;
    private temporalFrames: TemporalFrame[];

    constructor(temporalFrames: TemporalFrame[], options: Options = {}) {
        this.temporalFrames = temporalFrames;
        this.options = options;

        const containerOptions: ContainerOptions = {
            length: this.temporalFrames.length,
            interval: this.options.interval || 500,
            onSliderValueChange: () => this.refresh(),
        };

        [this.container, this.containerTitle, this.temporalSlider] =
            makeContainer(containerOptions);
    }

    onAdd(map: Map) {
        this.map = map;
        map.getContainer().appendChild(this.container);

        this.map.once('styledata', () => {
            this.refresh();
        });

        return this.container;
    }

    onRemove() {
        this.container.parentNode?.removeChild(this.container);
        this.map = undefined;
    }

    getDefaultPosition(): string {
        return 'bottom-left';
    }

    refresh() {
        this.temporalFrames.forEach((temporalFrame) => {
            temporalFrame.layers.forEach((layer) =>
                this.setVisible(layer, false),
            );
        });
        const sliderValue = Number(this.temporalSlider.value);
        this.containerTitle.innerHTML = this.temporalFrames[sliderValue].title;
        const { layers } = this.temporalFrames[sliderValue];
        layers.forEach((layer) => this.setVisible(layer));
    }

    private setVisible(layer: AnyLayer, isVisible = true) {
        if (layer.type === 'raster') {
            // when raster, set opacity as visibility for background loading
            this.map?.setPaintProperty(layer.id, 'raster-opacity-transition', {
                // set disable fade-in transition
                duration: 0,
            });
            this.map?.setPaintProperty(
                layer.id,
                'raster-opacity',
                isVisible ? layer.paint?.['raster-opacity'] || 1 : 0,
            );
        } else {
            // vector
            this.map?.setLayoutProperty(
                layer.id,
                'visibility',
                isVisible ? 'visible' : 'none',
            );
        }
    }
}
