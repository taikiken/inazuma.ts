///<reference path="../_definitions.ts"/>
/**
 * Created by taikiken on 14/10/13.
 */
var inazuma;
(function (inazuma) {
    var events;
    (function (events) {
        var EventData = (function () {
            function EventData() {
            }
            Object.defineProperty(EventData.prototype, "listener", {
                get: function () {
                    return this._listener;
                },
                set: function (listener) {
                    this._listener = listener;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EventData.prototype, "type", {
                get: function () {
                    return this._type;
                },
                set: function (type) {
                    this._type = type;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EventData.prototype, "target", {
                get: function () {
                    return this._target;
                },
                set: function (target) {
                    this._target = target;
                },
                enumerable: true,
                configurable: true
            });
            return EventData;
        })();
        events.EventData = EventData;
    })(events = inazuma.events || (inazuma.events = {}));
})(inazuma || (inazuma = {}));
