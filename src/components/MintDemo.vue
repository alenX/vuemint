<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <div class="page-title">Tabbar</div>
      <div>
        <mt-cell class="page-part" title="当前选中" :value="selected"/>
      </div>
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="出租">
          <mt-cell v-for="n in 5" :title="'aaa ' + n" :key="n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
          <mt-cell v-for="n in 7" :title="'发现 ' + n" :key="n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <div class="page-part">
            <mt-cell v-for="n in 6" :title="'我的 ' + n" :key="n"/>
          </div>
          <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="出租">
        <img slot="icon" src="">
        出租
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'MintDemo',
    data () {
      return {
        selected: '出租'
      }
    }
  }
</script>

<style scoped>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>
