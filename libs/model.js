import { VOXLoader, VOXMesh } from "three/examples/jsm/loaders/VOXLoader";

export function loadVOXModel(
  scene,
  voxPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new VOXLoader();

    loader.load(
      voxPath,
      (chunks) => {
        for (let i = 0; i < chunks.length; i++) {
          console.log(i);
          const chunk = chunks[i];

          const mesh = new VOXMesh(chunk);
          if (mesh.isMesh) {
            mesh.castShadow = castShadow;
            mesh.receiveShadow = receiveShadow;
          }
          mesh.scale.setScalar(0.25);
          scene.add(mesh);
        }

        resolve(chunks);
      },
      undefined,
      function (error) {
        console.log(error);
        reject(error);
      }
    );
  });
}
