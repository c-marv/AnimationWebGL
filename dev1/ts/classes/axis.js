/// <reference path='../defs/three.d.ts' />
/// <reference path='line.ts' />
/// <reference path='../main.ts' />
var helper;
(function (helper) {
    var Axis = (function () {
        function Axis(axislength) {
            this.axislength = 1000000;
            if (axislength)
                this.axislength = axislength;
            this.init();
        }
        Axis.prototype.init = function () {
            this.X = new shapes.Line(new THREE.Vector3(-this.axislength, 0, 0), new THREE.Vector3(this.axislength, 0, 0), 0xff0000);
            this.Y = new shapes.Line(new THREE.Vector3(0, -this.axislength, 0), new THREE.Vector3(0, this.axislength, 0), 0x00ff00);
            this.Z = new shapes.Line(new THREE.Vector3(0, 0, -this.axislength), new THREE.Vector3(0, 0, this.axislength), 0x0000ff);
        };
        Axis.prototype.enable = function (game) {
            game.scene.add(this.X.line);
            game.scene.add(this.Y.line);
            game.scene.add(this.Z.line);
        };
        Axis.prototype.disable = function (game) {
            game.scene.remove(this.X.line);
            game.scene.remove(this.Y.line);
            game.scene.remove(this.Z.line);
        };
        return Axis;
    })();
    helper.Axis = Axis;
})(helper || (helper = {}));
//# sourceMappingURL=axis.js.map
