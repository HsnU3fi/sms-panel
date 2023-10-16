<template>
  <div class="d-flex justify-center">

      <v-overlay
          activator="parent"
          location-strategy="connected"
          scroll-strategy="block"
          v-model="value"
      >

      </v-overlay>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  props: {
    value: {type: Boolean, default: false},
  },
  name: 'Loading',
});
</script>

<style scoped>
.logo-load{
  display: block;
  margin: 1px auto 50px;
  box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.03);
}
.loader {
  width: 70px; /* control the size */
  aspect-ratio: 8/5;
  margin: auto; /* center horizontally and vertically */
  --_g: no-repeat radial-gradient(#000 68%, #0000 71%);
  -webkit-mask: var(--_g), var(--_g), var(--_g);
  -webkit-mask-size: 25% 40%;
  background: rgb(204,250,240);
  background: linear-gradient(189deg, rgba(204,250,240,1) 18%, rgba(58,192,250,1) 51%, rgba(86,115,233,1) 86%);
  background-size: 100% 50%;
  animation: back 4s infinite steps(1), load 2s infinite;
}

@keyframes load {
  0% {
    -webkit-mask-position: 0% 0%, 50% 0%, 100% 0%
  }
  16.67% {
    -webkit-mask-position: 0% 100%, 50% 0%, 100% 0%
  }
  33.33% {
    -webkit-mask-position: 0% 100%, 50% 100%, 100% 0%
  }
  50% {
    -webkit-mask-position: 0% 100%, 50% 100%, 100% 100%
  }
  66.67% {
    -webkit-mask-position: 0% 0%, 50% 100%, 100% 100%
  }
  83.33% {
    -webkit-mask-position: 0% 0%, 50% 0%, 100% 100%
  }
  100% {
    -webkit-mask-position: 0% 0%, 50% 0%, 100% 0%
  }
}

@keyframes back {
  0%,
  100% {
    background-position: 0% 0%, 0% 100%
  }
  25% {
    background-position: 100% 0%, 0% 100%
  }
  50% {
    background-position: 100% 0%, 100% 100%
  }
  75% {
    background-position: 0% 0%, 100% 100%
  }
}

/*body {*/
/*  margin: 0;*/
/*  min-height: 30vh;*/
/*  display: grid;*/
/*  place-content: center;*/
/*}*/
</style>