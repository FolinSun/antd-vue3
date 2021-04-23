<template>
  <a-layout class="wrapper">
    <Hearder />
    <a-layout>
      <Sidebar />
      <a-layout>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
          }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Sidebar, Hearder } from './components';

  export default defineComponent({
    components: {
      Hearder,
      Sidebar,
    },
  });
</script>
<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
  }
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
</style>
