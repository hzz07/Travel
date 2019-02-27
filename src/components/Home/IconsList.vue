<template>
  <div class="HomeIconsList">
    <swiper :options="swiperOption" class="swiper-box">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <ul class="icons-ul clearFix">
          <li class="icons-li" v-for="item in page" :key="item.id">
            <div class="icons-li-img">
              <img class="li-img" :src="item.imgUrl" alt="">
            </div>
            <p class="icons-li-desc">{{item.desc}}</p>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination swiper-dian"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeIconsList",
    props:{
      list:Array
    },
    data(){
      return{
        swiperOption:{
          autoplay:false,
          pagination : '.swiper-pagination'
        }
      }
    },
    computed:{
      pages(){
        const pages = [];
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        });
        return pages
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "~css/base.scss";
  .swiper-box{
    padding-bottom: px2rem(30px);
  }
  .swiper-dian{
    bottom: px2rem(5px);
  }
  .HomeIconsList{
    min-height: px2rem(200px);
    .icons-ul{
      padding-top: px2rem(10px);
      .icons-li{
        width: 25%;
        float: left;
        padding: px2rem(8px) 0;
        .icons-li-img{
          width: 60%;
          height: 0;
          padding-bottom: 60%;
          margin: 0 auto;
          .li-img{
            width: 100%;
          }
        }
        .icons-li-desc{
          line-height: px2rem(48px);
          text-align: center;
          font-size: px2rem(28px);
          color: #999;
        }
      }
    }
  }

</style>