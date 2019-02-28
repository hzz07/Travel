<template>
  <div class="DetailsMoreList">
    <ul class="moreul1 center" v-for="(item,index) in list" :key="index">
      <li class="moreli1"><span class="iconfont iconfont-xing">&#xe623;</span>{{item.title}}</li>
      <li class="moreli2" v-if="item.children" >
        <details-more-list :list="item.children"></details-more-list>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "DetailsMoreList",
    props:{
      list:Array
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "~css/base.scss";
  .DetailsMoreList{
    padding: px2rem(8px) 0;
    .moreul1{
      .moreli1,.moreli2{
        line-height: px2rem(60px);
      }
    }
    .iconfont-xing{
      color: darksalmon;
      margin-right: px2rem(6px);
    }

  }

</style>