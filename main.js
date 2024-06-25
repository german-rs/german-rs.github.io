import * as THREE from 'three';
import { randInt } from 'three/src/math/MathUtils';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(3, 3, 3 );
const material = new THREE.MeshBasicMaterial( { 
	color: 0x0000ff, 
	wireframe: true,
	wireframeLinewidth: 15 
} );

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;



function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;


	
	renderer.render( scene, camera );
}

animate();


/**
 * installation
 * En la carpeta del proyecto iniciar node: npm init -y 
 * iniciar el proyecto para threeJS: npm i three
 * luego: npm i --save-dev vite
 * para ejecutar el server: npx vite
 */