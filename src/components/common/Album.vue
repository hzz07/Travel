<template>
  <div class="Album" @click="handleGallaryClick">
    <swiper :options="swiperOptions" class="album-swiper">
      <swiper-slide
        class="album-img-box"
        v-for="(item,index) in imgs"
        :key="index"
      >
        <img class="album-img" :src="item">
      </swiper-slide>
      <div class="swiper-pagination album-number"  slot="pagination"></div> <!--分页器-->
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "Album",
    props:{
      imgs:{
        type: Array,
        default () {
          return []
        }
      }
    },
    data(){
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true,
          effect:"coverflow"
          //effect:"cube"
        },
        snum:0
      }
    },
    methods: {
      handleGallaryClick () {
        this.$emit('close')
      }
    },
    watch:{
      imgs(val){
        this.snum=val.length;
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "~css/base.scss";
  .swiper-container-horizontal{
    padding-bottom: px2rem(80px);
  }
  .album-number{
    color: white;
    bottom: px2rem(0px);
  }
  .Album{
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    background-color: brown;
    width: 100%;
    height: 100%;
    /*让子元素垂直居中*/
    /*display: flex;
    align-items:center;*/
    /*或者
    display: flex;
    flex-direction: column;
    justify-content: center;
    */
    /*或者*/
    .album-swiper{
      position: relative;
      left: 0;
      top: 50%;
      margin-top: -50%;
    }

    .album-img-box{
      height: 0;
      width: 100%;
      padding-bottom: 100%;
      .album-img{
        width: 100%;
      }
    }
  }

</style>