import { IControl, Map } from 'maplibre-gl';
import 'material-icons/iconfont/material-icons.css';

const ACTIVE_BUTTON_COLOR = 'rgb(204, 204, 204)';

type ContainerOptions = {
    length: number;
    interval: number;
    onSliderValueChange: () => void;
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
    loopButton.innerHTML = '<span class="material-icons">loop</span>';
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
    prevButton.innerHTML = '<span class="material-icons">skip_previous</span>';
    prevButton.onclick = decrement;
    prevButton.style.border = '0';
    prevButton.style.height = '24px';
    const pauseButton = document.createElement('button');
    pauseButton.innerHTML = '<span class="material-icons">pause</span>';
    pauseButton.style.border = '0';
    pauseButton.style.height = '24px';
    const playButton = document.createElement('button');
    playButton.innerHTML = '<span class="material-icons">play_arrow</span>';
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
    nextButton.innerHTML = '<span class="material-icons">skip_next</span>';
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

type TemporalLayer = {
    id: string;
    title?: string;
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
    private temporalLayers: TemporalLayer[];

    constructor(temporalLayers: TemporalLayer[], options: Options = {}) {
        this.temporalLayers = temporalLayers;
        this.options = options;

        const containerOptions: ContainerOptions = {
            length: this.temporalLayers.length,
            pagingSpeed: this.options.interval || 500,
            onSliderValueChange: () => this.refresh(),
        };

        [this.container, this.containerTitle, this.temporalSlider] =
            makeContainer(containerOptions);
    }

    onAdd(map: Map) {
        this.map = map;
        map.getContainer().appendChild(this.container);

        this.map.once('load', () => {
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
        this.temporalLayers.forEach((layer) => {
            this.map?.setFilter(layer.id, false);
        });
        const sliderValue = Number(this.temporalSlider.value);
        const { id, title } = this.temporalLayers[sliderValue];
        this.containerTitle.innerHTML = title || id;
        this.map?.setFilter(id, true);
    }
}
