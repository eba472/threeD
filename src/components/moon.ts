import * as THREE from 'three';

const normalTexture = new THREE.TextureLoader().load('src/normal.png')
const githubTexture = new THREE.TextureLoader().load("/src/github.png")

export const moon = new THREE.Mesh(
    new THREE.SphereGeometry(1),
    new THREE.MeshStandardMaterial({ map: githubTexture, normalMap: normalTexture })
)
moon.position.z = 20
moon.position.setX(-10)