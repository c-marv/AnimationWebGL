/// <reference path='../defs/three.d.ts' />
/// <reference path='line.ts' />
/// <reference path='../main.ts' />
module helper {
    export class Axis {
        private axislength = 1000000;
        private X: shapes.Line;
        private Y: shapes.Line;
        private Z: shapes.Line;
        constructor(axislength?: number) {
            if (axislength) this.axislength = axislength;
            this.init();
        }
        private init(): void {
            this.X = new shapes.Line(
                new THREE.Vector3(-this.axislength, 0, 0),
                new THREE.Vector3(this.axislength, 0, 0),
                0xff0000
            );
            this.Y = new shapes.Line(
                new THREE.Vector3(0, -this.axislength, 0),
                new THREE.Vector3(0, this.axislength, 0),
                0x00ff00
            );
            this.Z = new shapes.Line(
                new THREE.Vector3(0, 0, -this.axislength),
                new THREE.Vector3(0, 0, this.axislength),
                0x0000ff
            );
        }
        enable(game: Game): void {
            game.scene.add(this.X.line);
            game.scene.add(this.Y.line);
            game.scene.add(this.Z.line);
        }
        disable(game: Game): void {
            game.scene.remove(this.X.line);
            game.scene.remove(this.Y.line);
            game.scene.remove(this.Z.line);
        }
    }
}