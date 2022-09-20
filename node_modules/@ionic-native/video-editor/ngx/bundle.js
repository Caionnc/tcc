'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var VideoEditor = /** @class */ (function (_super) {
    tslib.__extends(VideoEditor, _super);
    function VideoEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OptimizeForNetworkUse = {
            NO: 0,
            YES: 1,
        };
        _this.OutputFileType = {
            M4V: 0,
            MPEG4: 1,
            M4A: 2,
            QUICK_TIME: 3,
        };
        return _this;
    }
    VideoEditor.prototype.transcodeVideo = function (options) { return core.cordova(this, "transcodeVideo", { "callbackOrder": "reverse" }, arguments); };
    VideoEditor.prototype.trim = function (options) { return core.cordova(this, "trim", { "callbackOrder": "reverse", "platforms": ["iOS"] }, arguments); };
    VideoEditor.prototype.createThumbnail = function (options) { return core.cordova(this, "createThumbnail", { "callbackOrder": "reverse" }, arguments); };
    VideoEditor.prototype.getVideoInfo = function (options) { return core.cordova(this, "getVideoInfo", { "callbackOrder": "reverse" }, arguments); };
    VideoEditor.pluginName = "VideoEditor";
    VideoEditor.plugin = "cordova-plugin-video-editor";
    VideoEditor.pluginRef = "VideoEditor";
    VideoEditor.repo = "https://github.com/jbavari/cordova-plugin-video-editor";
    VideoEditor.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    VideoEditor.decorators = [
        { type: core$1.Injectable }
    ];
    return VideoEditor;
}(core.IonicNativePlugin));

exports.VideoEditor = VideoEditor;
