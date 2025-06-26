import { Application } from '@splinetool/runtime';

export function initNameScene() {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/SLikfahBwwMMz4M9/scene.splinecode');
}