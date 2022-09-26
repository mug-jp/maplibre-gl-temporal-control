"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var icons_1 = require("./icons");
var ACTIVE_BUTTON_COLOR = 'rgb(204, 204, 204)';
var makeImg = function (icon) {
    var img = document.createElement('img');
    img.src = icon;
    return img;
};
var makeContainer = function (_a) {
    var length = _a.length, interval = _a.interval, showButtons = _a.showButtons, onSliderValueChange = _a.onSliderValueChange, loop = _a.loop, loopDelay = _a.loopDelay, autoplay = _a.autoplay, initialValue = _a.initialValue;
    var looping = loop || false;
    var playing = autoplay || false;
    var playingTimer = null;
    // outest div
    var container = document.createElement('div');
    container.classList.add('mapboxgl-ctrl');
    container.classList.add('mapboxgl-ctrl-group');
    container.style.width = '240px';
    container.style.height = showButtons ? '84px' : '56px';
    container.style.backgroundColor = '#fff';
    container.style.textAlign = 'center';
    var titleDiv = document.createElement('div');
    titleDiv.innerHTML = initialValue || '<br />';
    titleDiv.style.marginTop = '4px';
    container.appendChild(titleDiv);
    // temporal slider
    var slider = document.createElement('input');
    slider.type = 'range';
    slider.value = '0';
    slider.min = '0';
    slider.max = String(length - 1);
    slider.addEventListener('input', function () {
        onSliderValueChange();
    });
    slider.style.width = '80%';
    slider.style.margin = '4px 0';
    container.appendChild(slider);
    var decrement = function () {
        slider.value = String(Math.max(0, Number(slider.value) - 1));
        onSliderValueChange();
        return Number(slider.min) < Number(slider.value);
    };
    var increment = function () {
        if (looping && Number(slider.value) == Number(slider.max)) {
            // delay the loop
            if (playingTimer) {
                clearInterval(playingTimer);
            }
            setTimeout(function () {
                slider.value = String(Number(slider.min));
                onSliderValueChange();
                playingTimer = setInterval(function () {
                    increment();
                }, interval);
            }, loopDelay);
        }
        else {
            slider.value = String(Math.min(Number(slider.max), Number(slider.value) + 1));
            onSliderValueChange();
        }
        return Number(slider.value) < Number(slider.max);
    };
    if (showButtons) {
        // buttons div
        // loop, prev, pause, play, next
        var buttonsDiv = document.createElement('div');
        buttonsDiv.style.display = 'flex';
        buttonsDiv.style.justifyContent = 'center';
        buttonsDiv.style.margin = '4px 0 0 0';
        var loopButton_1 = document.createElement('button');
        loopButton_1.appendChild(makeImg(icons_1.reload));
        loopButton_1.style.border = '0';
        loopButton_1.style.borderRadius = '0';
        loopButton_1.style.marginRight = '16px';
        loopButton_1.style.height = '24px';
        loopButton_1.style.backgroundColor = looping ? ACTIVE_BUTTON_COLOR : '';
        loopButton_1.onclick = function () {
            looping = !looping;
            loopButton_1.style.backgroundColor = looping ? ACTIVE_BUTTON_COLOR : '';
        };
        buttonsDiv.appendChild(loopButton_1);
        var prevButton = document.createElement('button');
        prevButton.appendChild(makeImg(icons_1.skipBackward));
        prevButton.onclick = decrement;
        prevButton.style.border = '0';
        prevButton.style.height = '24px';
        var pauseButton = document.createElement('button');
        pauseButton.appendChild(makeImg(icons_1.pause));
        pauseButton.style.border = '0';
        pauseButton.style.height = '24px';
        var playButton_1 = document.createElement('button');
        playButton_1.appendChild(makeImg(icons_1.play));
        playButton_1.style.backgroundColor = playing ? ACTIVE_BUTTON_COLOR : '';
        playButton_1.style.border = '0';
        playButton_1.style.height = '24px';
        playButton_1.onclick = function () {
            if (playing)
                return;
            playing = true;
            playButton_1.style.backgroundColor = ACTIVE_BUTTON_COLOR;
            playingTimer = setInterval(function () {
                increment();
            }, interval);
        };
        pauseButton.onclick = function () {
            playing = false;
            if (playingTimer != null) {
                clearInterval(playingTimer);
                playButton_1.style.backgroundColor = '';
            }
        };
        var nextButton = document.createElement('button');
        nextButton.appendChild(makeImg(icons_1.skipForward));
        nextButton.style.border = '0';
        nextButton.style.height = '24px';
        nextButton.onclick = increment;
        buttonsDiv.appendChild(prevButton);
        buttonsDiv.appendChild(pauseButton);
        buttonsDiv.appendChild(playButton_1);
        buttonsDiv.appendChild(nextButton);
        container.appendChild(buttonsDiv);
    }
    // autoplay
    if (playing) {
        playingTimer = setInterval(function () {
            increment();
        }, interval);
    }
    return [container, titleDiv, slider];
};
var TemporalControl = /** @class */ (function () {
    function TemporalControl(temporalFrames, options) {
        var _a;
        if (options === void 0) { options = {}; }
        var _this = this;
        this.temporalFrames = temporalFrames;
        this.options = options;
        var containerOptions = {
            length: this.temporalFrames.length,
            interval: this.options.interval || 500,
            loopDelay: this.options.loopDelay || 1000,
            showButtons: this.options.showButtons || false,
            loop: this.options.loop || false,
            autoplay: this.options.autoplay || false,
            onSliderValueChange: function () { return _this.refresh(); },
            initialValue: this.temporalFrames[0].title,
        };
        _a = makeContainer(containerOptions), this.container = _a[0], this.containerTitle = _a[1], this.temporalSlider = _a[2];
    }
    TemporalControl.prototype.onAdd = function (map) {
        var _this = this;
        this.map = map;
        map.getContainer().appendChild(this.container);
        this.map.on('styledata', function () {
            _this.refresh();
        });
        return this.container;
    };
    TemporalControl.prototype.onRemove = function () {
        var _a;
        (_a = this.container.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this.container);
        this.map = undefined;
    };
    TemporalControl.prototype.getDefaultPosition = function () {
        return 'bottom-left';
    };
    TemporalControl.prototype.refresh = function () {
        var _this = this;
        var sliderValue = Number(this.temporalSlider.value);
        this.containerTitle.innerHTML = this.temporalFrames[sliderValue].title;
        var visibleLayerIds = this.temporalFrames[sliderValue].layers.map(function (layer) { return layer.id; });
        this.temporalFrames.forEach(function (temporalFrame) {
            temporalFrame.layers.forEach(function (layer) {
                return _this.setVisible(layer, visibleLayerIds.includes(layer.id));
            });
        });
    };
    TemporalControl.prototype.setVisible = function (layer, isVisible) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (isVisible === void 0) { isVisible = true; }
        if (((_a = this.map) === null || _a === void 0 ? void 0 : _a.style) && ((_b = this.map.style) === null || _b === void 0 ? void 0 : _b._loaded) && ((_c = this.map) === null || _c === void 0 ? void 0 : _c.getLayer(layer.id))) {
            if (layer.type === 'raster' ||
                layer.type === 'fill' ||
                layer.type === 'circle' ||
                layer.type === 'line') {
                if (layer.type === 'raster') {
                    // when raster, set opacity as visibility for background loading
                    (_d = this.map) === null || _d === void 0 ? void 0 : _d.setPaintProperty(layer.id, "".concat(layer.type, "-opacity-transition"), {
                        // set disable fade-in transition
                        duration: 0,
                    });
                }
                var opacity = void 0;
                if (isVisible) {
                    // @ts-ignore
                    opacity = ((_e = layer.paint) === null || _e === void 0 ? void 0 : _e["".concat(layer.type, "-opacity")]) || 1;
                }
                else {
                    opacity = this.options.performance
                        ? 0.000000000000000000001
                        : 0;
                }
                (_f = this.map) === null || _f === void 0 ? void 0 : _f.setPaintProperty(layer.id, "".concat(layer.type, "-opacity"), opacity);
            }
            else {
                (_g = this.map) === null || _g === void 0 ? void 0 : _g.setLayoutProperty(layer.id, 'visibility', isVisible ? 'visible' : 'none');
            }
        }
    };
    return TemporalControl;
}());
exports.default = TemporalControl;
