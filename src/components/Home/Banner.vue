<template>
  <div class="HomeBanner">
    <div class="bannerBox">

      <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide class="banner-swiper" v-for="item of list" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div> <!--分页器-->
      </swiper>
      <!--以下看需要添加-->
      <!--<div class="swiper-scrollbar"></div> &lt;!&ndash;滚动条&ndash;&gt;
      <div class="swiper-button-next"></div> &lt;!&ndash;下一项&ndash;&gt;
      <div class="swiper-button-prev"></div> &lt;!&ndash;上一项&ndash;&gt;-->


    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeBanner",
    props:{
      list:Array
    },
    data(){
      return{
        swiperOption:{
          autoplay: 3000,
          speed: 1000,
          loop: true,
          pagination : '.swiper-pagination'
        }
      }
    },
    computed: {
      showSwiper () {
        return this.list.length
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "~css/base.scss";

  .banner-swiper{
    height: 0;
    width: 100%;
    padding-bottom: 26.66%;
    overflow: hidden;
  }
  .swiper-img{
    width: 100%;
  }
  .swiper-dian{
    width: 100%;
  }
  /**
  修改引入插件样式
  scss:  /deep/
  stylus: >>>
  ***/
  .bannerBox /deep/ .swiper-pagination-bullet-active{
    background-color: white !important;
  }

</style>