<template>
  <div>
    <cabeza />
    <cuerpo />
    <pie />
  </div>
</template>

<script>
import cabeza from "../components/HeaderIniciado";
import cuerpo from "../components/Workbody";
import pie from "../components/Footer";

export default {
  components: {
    cabeza,
    cuerpo,
    pie
  },  
  methods: {
    strogeIsHere() {
      var sesion = localStorage.getItem("usertoken");
      if (!sesion) {
        this.$router.push({ name: "home" });
      }
    }
  },
  mounted() {
    this.strogeIsHere();
  }
};
</script>

<style></style>
