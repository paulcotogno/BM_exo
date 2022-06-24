import { Mesh, BoxGeometry, MeshBasicMaterial } from "three";

const createObject = (departement, pourcentage, index) => {
  const object = new Mesh(
    new BoxGeometry(1, parseInt(pourcentage) / 10, 1),
    new MeshBasicMaterial({ color: 0xffffff })
  );
  console.log(index);
  object.name = departement;
  object.position.set((index - 4) * 2, 0, 0);

  console.log(object.position);

  return object;
};

export default createObject;
