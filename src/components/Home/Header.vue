<template>
  <div class="HomeHeader">
    <div class="header-left flowLeft"><span class="iconfont icon-back">&#xe61e;</span></div>
    <div class="header-input"><span class="iconfont icon-search">&#xe6a8;</span><input type="text" class="home-header-input" placeholder="搜索"></div>
    <router-link tag="div" to="/city" class="header-right flowRight">{{this.currentCity}}<span class="iconfont icon-city">&#xe64a;</span></router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "HomeHeader",
    data(){
      return{
      }
    },
    methods:{

    },
    computed:{
      ...mapState(['currentCity'])
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "~css/base.scss";
  .HomeHeader{
    height: px2rem(84px);
    background-color: $bgColor;
    line-height: px2rem(84px);
    color: white;
    text-align: center;
    display: flex;
    .header-left{
      width: px2rem(64px);
      .icon-back{
        font-size: px2rem(36px);
      }
    }
    .header-right{
      min-width: px2rem(124px);
      padding: 0 px2rem(10px);
      .icon-city{
        font-size: px2rem(24px);
        margin-left: px2rem(6px);
      }
    }
    .header-input{
      flex: 1;
      text-align: left;
      height: px2rem(60px);
      line-height: px2rem(60px);
      padding: 0 px2rem(20px);
      background-color: white;
      border-radius: px2rem(30px);
      color: #ccc;
      margin-top: px2rem(12px);
      font-size: px2rem(30px);
      position: relative;
      .icon-search{
        font-size: px2rem(30px);
      }
      .home-header-input{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 80%;
        padding: 0 10%;
      }
    }
  }

</style>