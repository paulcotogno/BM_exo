<template>
  <div class="hello">
    <Three :dataDpts="dataDpts" />
  </div>
</template>

<script>
import getPourcentage from '../methods/fetchApi';
import Three from './Three.vue';

const dpts = [75, 77, 78, 91, 92, 93, 94, 95, 25];

export default {
  name: "HelloWorld",
  components: {
    Three
  },
  props: {
    msg: String,
  },
  data() {
    return {
      dataDpts: undefined
    }
  },
  mounted() {
    const dataArray = [];

    dpts.forEach(element => {
      getPourcentage(element).then((data) => {
        dataArray.push(data);
      })
    });

    this.dataDpts = dataArray;
  },
  methods: {
    callApi() {
      fetch("http://localhost:3080/result/")
        .then((res) => res.json())
        .then((data) => console.log(data));
    },
  },
};
</script>

<style scoped>
</style>
