<template>
<div class="page-switch">
    <div class="page-title">我的</div>
    <div class="page-part">
      <mt-cell >
        <span style="margin-right: 5px;">未读消息</span>
        <mt-badge type="error" size="small">10</mt-badge>
      </mt-cell>
    </div>
    <mt-cell :title="'是否开启通知'" style="text-align: left">
      <mt-switch v-model="value2" @change="handleChangeNotice"></mt-switch>
    </mt-cell>

    <div style="background-color: #CCCCCC ">
    <div style="padding: 15px 0 0 0">
    <mt-cell title="交易账户" icon="more" style="text-align: left">
    <img slot="icon" src="../assets/account.png" width="24" height="24"></mt-cell>
    </div>
    <div style="padding: 15px 0 0 0">
    <mt-cell title="富途种子" icon="more" style="text-align: left" >
     <img slot="icon" src="../assets/melon.png" width="24" height="24"></mt-cell>
    <mt-cell title="我的行情" icon="more" style="text-align: left">
     <img slot="icon" src="../assets/trend.png" width="24" height="24"></mt-cell>
    <mt-cell title="活动中心" icon="more" style="text-align: left">
     <img slot="icon" src="../assets/activity.png" width="24" height="24"></mt-cell>
    <mt-cell title="积分任务" icon="more" style="text-align: left">
     <img slot="icon" src="../assets/money.png" width="24" height="24"></mt-cell>
    <mt-cell title="邀请好友" icon="more" style="text-align: left">
     <img slot="icon" src="../assets/friend.png" width="24" height="24">
     </mt-cell>
    <mt-cell title="模拟炒股" icon="more" style="text-align: left">
    <img slot="icon" src="../assets/my.png" width="24" height="24">
    </mt-cell>
    </div>
    <div style="padding: 15px 0 0 0">
    <mt-cell title="帮助和客服" icon="more" style="text-align: left">
      <img slot="icon" src="../assets/kf.png" width="24" height="24">
    </mt-cell>
    </div>
    </div>
    <mt-button type="danger" size="large" class="exitBtn" @click="exit">退出</mt-button>
  </div>
</template>

<script>
 export default{
     name: 'About',
     data () {
    return {
      value1: [],
      value2: false,
      value3: ['选项A'],
      value4: [],
      exitTimes: 0
    }
  },
  created () {
  },
  methods: {
    exit: function () {
        if (this.exitTimes < 1) {
            this.$toast('请再点击一次确认退出')
            this.exitTimes = this.exitTimes + 1
        }
        this.exitTimes = this.exitTimes + 1
    },
    handleChangeNotice: function (event) {
        console.log(event)
    }
 }
 }
</script>

<style lang="css">
.exitBtn{
    margin-top:6px
}
</style>
