<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';

  @Options({
    name: 'App',
  })
  export default class App extends Vue {
    locale = zhCN;
  }
</script>

<style lang="less">
  body {
    background: #eeeff1;
  }
  #app {
    height: 100%;
  }
</style>
