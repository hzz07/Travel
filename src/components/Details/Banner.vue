<template>
  <div>
    <div class="DetailsBanner" @click="handleBannerClick">
      <div class="banner-box">
        <img src="//img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" alt="" class="banner-img">
      </div>
      <div class="banner-return"><router-link tag="span" to="/home" class="iconfont icon-back">&#xe61e;</router-link></div>
      <div class="banner-desc clearFix">
        <p class="banner-title flowLeft">上海迪士尼乐园</p>
        <div class="banner-album flowRight"><span class="iconfont icon-album">&#xe60c;</span>23</div>
      </div>
    </div>
    <fade-animotion>
      <banner-ablum
        :imgs="imgInfo"
        v-show="showGallary"
        @close="handleGallaryClose"
      >
      </banner-ablum>
    </fade-animotion>
  </div>
</template>

<script>
  import BannerAblum from '../common/Album'
  import FadeAnimotion from '../common/FadeAnimation'
  export default {
    name: "DetailsBanner",
    props:{
      imgInfo:Array
    },
    components:{BannerAblum,FadeAnimotion},
    data(){
      return{
        showGallary:false
      }
    },
    methods:{
      handleBannerClick () {
        this.showGallary = true;
      },
      handleGallaryClose () {
        this.showGallary = false;
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "~css/base.scss";
  .DetailsBanner{
    position: relative;
    .banner-box{
      height: 0;
      padding-bottom: 55%;
      .banner-img{
        width: 100%;
      }
    }
    .banner-return{
      width: px2rem(72px);
      height: px2rem(72px);
      line-height: px2rem(72px);
      text-align: left;
      text-indent: px2rem(14px);
      border-radius: 50%;
      background-color: rgba(0,0,0,.6);
      position: absolute;
      top: px2rem(10px);
      left: px2rem(10px);
      .icon-back{
        font-size: px2rem(40px);
        color: white;
      }

    }
    .banner-desc{
      padding: 0 5%;
      width: 90%;
      position: absolute;
      bottom: 0;
      left: 0;
      color: white;
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
      .banner-title{
        line-height: px2rem(60px);
      }
      .banner-album{
        margin-top: px2rem(10px);
        line-height: px2rem(40px);
        background-color: rgba(0,0,0,.6);
        padding: 0 px2rem(12px);
        border-radius: px2rem(12px);
        font-size: px2rem(24px);
        .icon-album{
          margin-right: px2rem(6px);
          font-size: px2rem(26px);
        }
      }
    }


  }

</style>