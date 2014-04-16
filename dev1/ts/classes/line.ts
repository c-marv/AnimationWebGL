/// <reference path='../defs/three.d.ts' />
module shapes {
    export class Line {
        geometry: THREE.Geometry;
        material: THREE.LineBasicMaterial;
        color: THREE.Color = new THREE.Color(0x000000);
        line: THREE.Line;
        constructor(start: THREE.Vector3, end: THREE.Vector3, color?: number) {
            if (color) this.color = new THREE.Color(color);
            this.geometry = new THREE.Geometry();
            this.geometry.vertices.push(start);
            this.geometry.vertices.push(end);
            this.material = new THREE.LineBasicMaterial();
            this.material.color = this.color;
            this.line = new THREE.Line(this.geometry, this.material);
        }
    }
}