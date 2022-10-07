import { BoxGeometry, Mesh, MeshPhongMaterial } from "three";
import { Basic } from "./basics/basic";

export function first({ scene, tickers }: Basic) {
  const geometry = new BoxGeometry(0.2, 0.2, 0.2);
  const material = new MeshPhongMaterial({ color: 0xb504f4 });
  const mesh = new Mesh(geometry, material);
  scene.add(mesh);

  tickers.push((deltaTime) => {
    (window as any).deltaTime = deltaTime;

    mesh.rotation.x += 0.5 * deltaTime;
    mesh.rotation.y += deltaTime;
  });
}
