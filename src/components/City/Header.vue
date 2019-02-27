<template>
  <div class="CityHeader">
    <div class="city-title">
      <router-link tag="div" to="/home" class="city-back"><span class="iconfont icon-back">&#xe61e;</span></router-link>
      城市选择
    </div>

  </div>
</template>

<script>
  export default {
    name: "CityHeader"
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "~css/base.scss";
  .CityHeader{
    height: px2rem(84px);
    line-height: px2rem(84px);
    background-color: $bgColor;
    .city-title{
      text-align: center;
      color: white;
      position: relative;
      .city-back{
        width: px2rem(64px);
        text-align: center;
        font-size: px2rem(40px);
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }

</style>