<template>
  <div class="hello">
    <p>Hello !</p>
    <div @click="callApi">Appel</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    callApi() {
      fetch("http://localhost:3080/api")
        .then((res) => res.json())
        .then((data) => console.log(data));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
