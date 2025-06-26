import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function initCubeScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Cubo base (relleno)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Aristas (borde del cubo)
    const edges = new THREE.EdgesGeometry(geometry);
    const edgeLines = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: 0x000000 }) // ← color de las aristas
    );
    scene.add(edgeLines);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    let rotate = true;

    controls.addEventListener("start", () => {
        rotate = false;
    });

    controls.addEventListener("end", () => {
        setTimeout(() => {
            rotate = true;
        }, 3000)

    });

    // Animación
    function animate() {

        if (rotate) {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            edgeLines.rotation.x += 0.01;
            edgeLines.rotation.y += 0.01;
        }

        controls.update();
        renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);
}