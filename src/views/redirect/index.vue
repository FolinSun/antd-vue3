<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  export default defineComponent({
    name: 'Redirect',
    setup() {
      //初始化路由
      const router = useRouter();
      console.log(router);
      return {};
    },
    // mounted() {
    //   const { params, query } = this.$route;
    //   const { path } = params;
    //   this.$router.replace({ path: '/' + path, query }).catch((err) => {
    //     console.warn(err);
    //   });
    // },
  });

  // @Options({
  //   name: 'Redirect',
  // })
  // export default class extends Vue {
  //   created() {
  //     const { params, query } = this.$route;
  //     const { path } = params;
  //     this.$router.replace({ path: '/' + path, query }).catch((err) => {
  //       console.warn(err);
  //     });
  //   }
  //   render() {
  //     // Avoid warning for missing template
  //   }
  // }
</script>
