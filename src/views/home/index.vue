<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <br />
    <div>Count: {{ count }}</div>
    <a-button type="primary" @click="increment">Primary +</a-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue';

  export default defineComponent({
    components: {
      HelloWorld,
    },
    setup() {
      const count = ref<number>(0);

      const increment = () => {
        count.value++;
      };

      onMounted(() => {
        console.log('onMounted');
      });

      return {
        count,
        increment,
      };
    },
  });
</script>
