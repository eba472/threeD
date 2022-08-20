import { Mesh, MeshStandardMaterial, PerspectiveCamera, SphereGeometry } from 'three';

export function moveCamera(moon: Mesh<SphereGeometry, MeshStandardMaterial>, camera: PerspectiveCamera): void {
    const t = document.body.getBoundingClientRect().top;
    moon.rotation.x += 0.05
    moon.rotation.y += 0.05
    moon.rotation.z += 0.05

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.01;
    camera.position.y = t * -0.01;
}