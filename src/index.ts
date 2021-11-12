import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

start();

export function start() {
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
  camera.position.z = 1;

  const scene = new THREE.Scene();

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  scene.add(directionalLight);

  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const material = new THREE.MeshPhongMaterial({ color: 0xb504f4 });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;

  renderer.setAnimationLoop((time) => {
    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;

    renderer.render(scene, camera);
  });
}
