import { Player } from "./player.js";

const canvas = document.getElementById('mi-canvas');
canvas.height = 600;


const ctx = canvas.getContext('2d');
const player = new Player(250, 550, 100, 15, 'red' );

animate();
function animate() {

    player.update();
    canvas.width = 500;
    player.draw(ctx);
    requestAnimationFrame(animate);
}


