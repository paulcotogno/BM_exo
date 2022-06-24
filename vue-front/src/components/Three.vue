<template>
  <div class="container">
    <div id="renderer"></div>
    <div class="btn" @click="showResult">
      Cliquer pour voir / cacher les résultats
    </div>
    <div class="resultats" v-if="objectsCreated">
      <ul>
        <li v-for="data in dataDpts" v-bind:key="data.departement">
          <p>{{ data.departement }}</p>
          <p>{{ data.pourcentage }}%</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  Group,
} from "three";
import createObject from "../methods/createObject";

export default {
  name: "Three",
  props: {
    dataDpts: {
      type: Array,
      default: undefined,
    },
  },
  data() {
    return {
      objectsCreated: false,
      scale: 0,
    };
  },
  methods: {
    showResult() {
      this.scale === 0 ? (this.scale = 1) : (this.scale = 0);
    },
    lerp(start, end, amt) {
      return (1 - amt) * start + amt * end;
    },
  },
  mounted() {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const group = new Group();

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("renderer").appendChild(renderer.domElement);

    const geometry = new BoxGeometry(100, 10, 50);
    const material = new MeshBasicMaterial({ color: 0x252525 });
    const cube = new Mesh(geometry, material);
    cube.position.set(0, -5, 0);
    scene.add(cube);

    camera.position.z = 10;
    camera.position.y = 5;

    var scaleResult = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      scaleResult = this.lerp(scaleResult, this.scale, 0.1);

      if (group.children.length !== 0) {
        group.children.forEach((element) => {
          element.scale.set(1, scaleResult, 1);
        });
      }

      renderer.render(scene, camera);

      if (
        !this.objectsCreated &&
        this.dataDpts !== undefined &&
        this.dataDpts[7] !== undefined
      ) {
        console.log("createObject");
        createCubes();
        this.objectsCreated = true;
      }
    };

    const createCubes = () => {
      this.dataDpts.forEach((element, index) => {
        console.log("forEach", element);

        group.add(
          createObject(element.departement, element.pourcentage, index)
        );
      });

      scene.add(group);
    };

    animate();
  },
};
</script>

<style>
.btn {
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  cursor: pointer;
}

.resultats{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
}

.resultats ul{
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
}

.resultats ul li {
    padding: 0;
    margin: 0 2%;
}
</style>
