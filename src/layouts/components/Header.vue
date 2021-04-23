<template>
  <a-layout-header class="header">
    <div class="logo">logo</div>
    <div class="navbar">
      <span>警报</span>
      <span>消息</span>
      <div class="user-info">
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            <a-avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            李老师
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item key="0">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.alipay.com/"
                >
                  1st menu item
                </a>
              </a-menu-item>
              <a-menu-item key="1">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.taobao.com/"
                >
                  2nd menu item
                </a>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3">3rd menu item（disabled）</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </a-layout-header>
</template>

<script lant="ts">
  import { Options, Vue } from 'vue-class-component';
  import { DownOutlined } from '@ant-design/icons-vue';

  @Options({
    name: 'App',
    components: {
      DownOutlined,
    },
  })
  export default class App extends Vue {}
</script>

<style lang="less">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    background: #fff;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #e2e3e5;
    .navbar {
      display: flex;
      > span + span,
      > .user-info {
        margin-left: 0.8rem;
      }
    }
  }
</style>
