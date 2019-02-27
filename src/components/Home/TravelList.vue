<template>
  <div class="HomeTravelList">
    <router-link tag="div" class="home-lists"
         v-for="item in list"
         :key="item.id"
         :to="'/details/' + item.id"
    >
      <div class="center home-list">
        <img class="list-img" :src="item.imgUrl" alt="">
        <div class="list-word">
          <p class="list-title">{{item.title}}</p>
          <p class="list-desc">{{item.desc}}</p>
          <button class="list-button">查看详情</button>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "HomeTravelList",
    props:{
      list:''
    },
    data(){
      return{
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "css/base.scss";
  .home-lists{
    height: px2rem(160px);
    padding: px2rem(20px) 0;
    background-color: lightgoldenrodyellow;
    border-bottom: 1px solid #ccc;
  }
  .home-list{
    display: flex;
      .list-img{
        width: px2rem(160px);
        height: px2rem(160px);
        margin-right: px2rem(20px);
      }
    .list-word{
      flex: 1;
      .list-title{
        line-height: px2rem(70px);
        height: px2rem(70px);
        font-weight: bolder;
      }
      .list-desc{
        line-height: px2rem(50px);
        height: px2rem(50px);
        font-size: px2rem(28px);
        color: #999;
      }
      .list-button{
        height: px2rem(40px);
        line-height: px2rem(40px);
        background-color: $bgColor;
        border: none;
        color: white;
        border-radius: px2rem(8px);
        font-size: px2rem(24px);
        outline: none;
      }
    }
  }

</style>