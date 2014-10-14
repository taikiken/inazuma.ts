///<reference path="../_definitions.ts"/>
/**
 * Created by taikiken on 14/10/13.
 */
var inazuma;
(function (inazuma) {
    var events;
    (function (events) {
        var EventDispatcher = (function () {
            function EventDispatcher() {
                /**
                 *
                 * @type {any[]}
                 * @private
                 */
                this._listeners = new Array();
            }
            EventDispatcher.prototype.addEventListener = function (type, listener, target) {
                if (this._listeners[type] === undefined) {
                    this._listeners[type] = new Array();
                }
            };
            return EventDispatcher;
        })();
        events.EventDispatcher = EventDispatcher;
    })(events = inazuma.events || (inazuma.events = {}));
})(inazuma || (inazuma = {}));
