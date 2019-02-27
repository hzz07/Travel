<template>
  <swiper :options="swiperOption" class='swiper-box'>
    <swiper-slide class="swiper-box">
      <img  class="swiper-img" src="https://www.swiper.com.cn/templets/default/images/cube1.png">
    </swiper-slide>
    <swiper-slide class="swiper-box">
      <img  class="swiper-img" src="https://www.swiper.com.cn/templets/default/images/cube2.png">
    </swiper-slide>
    <swiper-slide class="swiper-box">
      <img  class="swiper-img" src="https://www.swiper.com.cn/templets/default/images/cube3.png">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: "cube",
    data(){
      return{
        swiperOption:{
          effect:"cube",
          cube:{
            cube: {
              slideShadows: true,
              shadow: true,
              shadowOffset: 20,
              shadowScale: 0.94
            }
          }

        }

      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import "~css/base.scss";
  .swiper-box{
    width: 80%;
    height: 80%;
    .swiper-img{
      width: 100%;
    }
  }

</style>