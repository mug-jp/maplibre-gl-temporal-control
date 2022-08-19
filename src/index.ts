import {ControlPosition, IControl, LayerSpecification, Map} from 'maplibre-gl';

import {pause, play, reload, skipBackward, skipForward} from './icons';

const ACTIVE_BUTTON_COLOR = 'rgb(204, 204, 204)';

type ContainerOptions = {
  length: number;
  interval: number;
  loopDelay: number;
  showButtons?: boolean;
  onSliderValueChange: () => void;
  loop?: boolean;
  autoplay?: boolean;
};

const makeImg = (icon: string): HTMLImageElement => {
  const img = document.createElement('img');
  img.src = icon;
  return img;
};

const makeContainer = ({
                         length,
                         interval,
                         showButtons,
                         onSliderValueChange,
                         loop,
                         loopDelay,
                         autoplay
                       }: ContainerOptions): [HTMLDivElement, HTMLDivElement, HTMLInputElement] => {
  let looping = loop || false;
  let playing = autoplay || false;
  let playingTimer: any = null;
  // outest div
  const container = document.createElement('div');
  container.classList.add('mapboxgl-ctrl');
  container.classList.add('mapboxgl-ctrl-group');
  container.style.width = '240px';
  container.style.height = showButtons ? '84px' : '56px';
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

  const decrement = () => {
    slider.value = String(Math.max(0, Number(slider.value) - 1));
    onSliderValueChange();
    return Number(slider.min) < Number(slider.value);
  };
  const increment = () => {
    if (looping && Number(slider.value) == Number(slider.max)
    ) {
      // delay the loop
      if (playingTimer) {
        clearInterval(playingTimer);
      }
      setTimeout(() => {
        slider.value = String(Number(slider.min));
        onSliderValueChange();
        playingTimer = setInterval(() => {
          increment();
        }, interval);
      }, loopDelay)
    } else {
      slider.value = String(Math.min(Number(slider.max), Number(slider.value) + 1));
      onSliderValueChange();
    }

    return Number(slider.value) < Number(slider.max);
  };

  if (showButtons) {
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
    loopButton.style.backgroundColor = looping ? ACTIVE_BUTTON_COLOR : '';
    loopButton.onclick = () => {
      looping = !looping;
      loopButton.style.backgroundColor = looping ? ACTIVE_BUTTON_COLOR : '';
    };
    buttonsDiv.appendChild(loopButton);

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
    playButton.style.backgroundColor = playing ? ACTIVE_BUTTON_COLOR : '';

    playButton.style.border = '0';
    playButton.style.height = '24px';
    playButton.onclick = () => {
      if (playing) return;
      playing = true;
      playButton.style.backgroundColor = ACTIVE_BUTTON_COLOR;
      playingTimer = setInterval(() => {
        increment();
      }, interval);
    };

    pauseButton.onclick = () => {
      playing = false;
      if (playingTimer != null) {
        clearInterval(playingTimer);
        playButton.style.backgroundColor = '';
      }
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
  }
  // autoplay
  if (playing) {
    playingTimer = setInterval(() => {
      increment();
    }, interval);
  }

  return [container, titleDiv, slider];
};


type TemporalFrame = {
  title: string;
  layers: LayerSpecification[];
};

type Options = {
  position?: ControlPosition;
  interval?: number;
  loopDelay?: number;
  performance?: boolean;
  showButtons?: boolean;
  loop?: boolean;
  autoplay?: boolean;
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
      loopDelay: this.options.loopDelay || 1000,
      showButtons: this.options.showButtons || false,
      loop: this.options.loop || false,
      autoplay: this.options.autoplay || false,
      onSliderValueChange: () => this.refresh(),
    };

    [this.container, this.containerTitle, this.temporalSlider] =
      makeContainer(containerOptions);
  }

  onAdd(map: Map) {
    this.map = map;
    map.getContainer().appendChild(this.container);

    this.map.on('styledata', () => {
      this.refresh();
    });

    return this.container;
  }

  onRemove() {
    this.container.parentNode?.removeChild(this.container);
    this.map = undefined;
  }

  getDefaultPosition(): ControlPosition {
    return 'bottom-left';
  }

  refresh() {
    const sliderValue = Number(this.temporalSlider.value);
    this.containerTitle.innerHTML = this.temporalFrames[sliderValue].title;
    const visibleLayerIds = this.temporalFrames[sliderValue].layers.map(
      (layer) => layer.id,
    );
    this.temporalFrames.forEach((temporalFrame) => {
      temporalFrame.layers.forEach((layer) =>
        this.setVisible(layer, visibleLayerIds.includes(layer.id)),
      );
    });
  }

  private setVisible(layer: LayerSpecification, isVisible = true) {
    if (this.map?.style && this.map.style?._loaded && this.map?.getLayer(layer.id)) {
      if (
        layer.type === 'raster' ||
        layer.type === 'fill' ||
        layer.type === 'circle' ||
        layer.type === 'line'
      ) {
        if (layer.type === 'raster') {
          // when raster, set opacity as visibility for background loading
          this.map?.setPaintProperty(
            layer.id,
            `${layer.type}-opacity-transition`,
            {
              // set disable fade-in transition
              duration: 0,
            },
          );
        }
        let opacity;
        if (isVisible) {
          // @ts-ignore
          opacity = layer.paint?.[`${layer.type}-opacity`] || 1;
        } else {
          opacity = this.options.performance
            ? 0.000000000000000000001
            : 0;
        }

        this.map?.setPaintProperty(
          layer.id,
          `${layer.type}-opacity`,
          opacity,
        );
      } else {
        this.map?.setLayoutProperty(
          layer.id,
          'visibility',
          isVisible ? 'visible' : 'none',
        );
      }
    }
  }
}
