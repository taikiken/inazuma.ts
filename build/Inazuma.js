///<reference path="inazuma/_definitions.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by taikiken on 14/10/13.
 */
var inazuma;
(function (inazuma) {
    var Inazuma = (function (_super) {
        __extends(Inazuma, _super);
        function Inazuma() {
            _super.call(this);
        }
        return Inazuma;
    })(inazuma.events.EventDispatcher);
    inazuma.Inazuma = Inazuma;
})(inazuma || (inazuma = {}));
