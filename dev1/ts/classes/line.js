/// <reference path='../defs/three.d.ts' />
var shapes;
(function (shapes) {
    var Line = (function () {
        function Line(start, end, color) {
            this.color = new THREE.Color(0x000000);
            if (color)
                this.color = new THREE.Color(color);
            this.geometry = new THREE.Geometry();
            this.geometry.vertices.push(start);
            this.geometry.vertices.push(end);
            this.material = new THREE.LineBasicMaterial();
            this.material.color = this.color;
            this.line = new THREE.Line(this.geometry, this.material);
        }
        return Line;
    })();
    shapes.Line = Line;
})(shapes || (shapes = {}));
//# sourceMappingURL=line.js.map
