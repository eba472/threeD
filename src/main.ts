import './style.css'
import * as THREE from 'three';
import { addStar } from './utils/addStar';
import { moon } from './components/moon';
import torus from './components/torus';
import { moveCamera } from './utils/moveCamera';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg")!,
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)


scene.add(torus)
scene.add(moon)
scene.add(new THREE.AmbientLight(0xffffff))
Array(200).fill(0).forEach(_ => addStar(scene))
scene.background = new THREE.TextureLoader().load('/src/space.jpg')

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50)
// scene.add(lightHelper, gridHelper)



const controls = new OrbitControls(camera, renderer.domElement)

function animate() {
  requestAnimationFrame(animate)

  torus.rotation.x += 0.01
  torus.rotation.y += 0.01

  controls.update()
  renderer.render(scene, camera)
}

document.body.onscroll = () => moveCamera(moon, camera)
animate()