'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var VideoCapturePlus = /** @class */ (function (_super) {
    tslib.__extends(VideoCapturePlus, _super);
    function VideoCapturePlus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoCapturePlus.prototype.captureVideo = function (options) { return core.cordova(this, "captureVideo", { "callbackOrder": "reverse" }, arguments); };
    VideoCapturePlus.pluginName = "VideoCapturePlus";
    VideoCapturePlus.plugin = "cordova-plugin-video-capture-plus";
    VideoCapturePlus.pluginRef = "window.plugins.videocaptureplus";
    VideoCapturePlus.repo = "https://github.com/danielsogl/cordova-plugin-video-capture-plus";
    VideoCapturePlus.platforms = ["Android", "iOS"];
    VideoCapturePlus.decorators = [
        { type: core$1.Injectable }
    ];
    return VideoCapturePlus;
}(core.IonicNativePlugin));

exports.VideoCapturePlus = VideoCapturePlus;
