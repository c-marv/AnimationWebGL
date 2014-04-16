/// <reference path='defs/three.d.ts' />
/// <reference path='classes/axis.ts' />

class Game {
    camera: THREE.PerspectiveCamera;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;

    width: number = window.innerWidth;
    height: number = window.innerHeight;

    axis: helper.Axis;

    constructor(container: HTMLElement, width?: number, height?: number) {
        if (width) this.width = width;
        if (height) this.height = height;
        this.init(container, 0x000000);
    }
    private init(container: HTMLElement, color: number): void {
        // Init renderer
        this.renderer = new THREE.WebGLRenderer();
        this.setBackgroundColor(new THREE.Color(color));
        this.renderer.setSize(this.width, this.height);
        // init scene
        this.scene = new THREE.Scene();
        // init camera
        this.camera = new THREE.PerspectiveCamera(50, this.width / this.height, 0.1, 1000);
        this.camera.position.set(600, 400, 1000);
        this.camera.lookAt(this.camera.position);
//        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.scene.add(this.camera);

        container.appendChild(this.renderer.domElement);

        this.renderGame();

        this.axis = new helper.Axis();

        // Events
//        container.onclick = (e: MouseEvent) => this.onClick(e, container);
        container.onmousedown = (e: MouseEvent) => {
            var x = e.x - container.offsetLeft;
            var y = e.y - container.offsetTop;
            alert(x + ',' + y);
        };
    }
    onClick(ev: MouseEvent, container: HTMLElement) {
        var x = ev.x - container.offsetLeft;
        var y = ev.y - container.offsetTop;
        alert(x + ',' + y);
    }
    setBackgroundColor(color: THREE.Color): void {
        this.renderer.setClearColor(color, 1);
        this.renderGame();
    }
    renderGame() {
        this.renderer.render(this.scene, this.camera);
    }
    enableAxis() {
        this.axis.enable(this);
        this.renderGame();
    }
    disableAxis(){
        this.axis.disable(this);
        this.renderGame();
    }
    animation () {
        var material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('ts/image/color.png')
        });
        var sphere = new THREE.Mesh(new THREE.CubeGeometry(50, 50, 50), material);
//        sphere.position.set(0, 0, 0);
        this.scene.add(sphere);

        var ambientLight = new THREE.AmbientLight(0xbbbbbb);
        this.scene.add(ambientLight);
//
        var directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(1, 1, 1).normalize();
        this.scene.add(directionalLight);

        var time = 0.1;
        var speed = 120;
        var angle = 70;

        var radians = (angle / 180) * Math.PI;
        var vx = speed * Math.cos(radians);
        var vy = speed * Math.sin(radians);
        var gravity = 9.81;
        var resize = () => {
            if (sphere.scale.x < 5)
                sphere.scale.addScalar(0.1);
            this.renderGame();
            requestAnimationFrame(() => resize());
        };
        var animate = () => {
            sphere.position.x = (vx * time);
            sphere.position.y = (vy * time) - (0.5 * gravity * Math.pow(time, 2));
            if (sphere.position.y > 0){
                sphere.rotation.y = 0;
                sphere.rotation.z += 0.1;
                time += 0.1;
            }else {
                sphere.rotation.z = 0;
                resize();
            }
            this.renderGame();
            requestAnimationFrame(() => animate());
        };
        this.renderGame();
        animate();
    }
    foo() {
        var material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('ts/image/crate.jpg')
        });

        var plane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), material);
        plane.position.set(0, 0, 0);
        this.scene.add(plane);
//        var cube = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), material);
//        cube.position.set(0, 0, 0);
//        this.scene.add(cube);

        var ambientLight = new THREE.AmbientLight(0xbbbbbb);
        this.scene.add(ambientLight);
//
        var directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(1, 1, 1).normalize();
        this.scene.add(directionalLight);

        var animate = () => {
//            cube.rotation.y += Math.PI * 0.03;
            // plane.rotation.x += Math.PI * 0.03;
            //plane.position.x += 0.1;
            this.renderGame();
            requestAnimationFrame(() => animate());
        };
//
        window.onkeydown = (e: KeyboardEvent) => {
            console.log(e.keyCode);
        };
        this.renderGame();
        animate();
    }
}
window.onload = () => {
    var container = document.getElementById('container');
    var game = new Game(container, 600, 400);
    game.setBackgroundColor(new THREE.Color(0xffffff));
    game.enableAxis();
//    game.foo();
    game.animation();
};