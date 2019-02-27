<template>
  <div class="DetailsHeader" :style="opacityStyle">
    <div class="center detailes-title">
      <div class="detailes-left"><router-link tag="span" to="/home" class="iconfont icon-back">&#xe61e;</router-link></div>
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailsHeader",
    data(){
      return{
        opacityStyle:{
          opacity:0
        }
      }
    },
    methods:{
      handleScroll(){
        const top=document.documentElement.scrollTop;
        console.log(top);
        if(top>60){
          let opacity=top/140;
          opacity=opacity>1?1:opacity;
          this.opacityStyle = { opacity }
        }else{
          this.opacityStyle = { opacity:0 }
        }

      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "~css/base.scss";
  .DetailsHeader{
    background-color: $bgColor;
    line-height: px2rem(84px);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    .detailes-title{
      text-align: center;
      position: relative;
      .detailes-left{
        width: px2rem(64px);
        left: 0;
        position: absolute;
        text-align: left;
        .icon-back{
          font-size: px2rem(40px);
        }
      }
    }
  }


</style>