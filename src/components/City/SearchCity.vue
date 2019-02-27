<template>
  <div class="SearchCity">
    <div class="search-input-box center">
      <input type="text" class="search-input" placeholder="请输入城市" v-model="keyword">
    </div>
    <div class="search-result" ref="search" v-show="keyword.length">
      <ul class="search-ul center">
        <li class="search-li"
            v-for="item in list"
            v-show="keyword"
            v-on:click="checkedCity(item.name)"
            :key="item.id"
        >{{item.name}}</li>
        <li><p class="search-none" v-show="hasNoData">没有搜索到相关内容</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from "better-scroll"; // 步骤一
  import {mapMutations} from 'vuex'
  export default {
    name: "SearchCity",
    props:{
      citys:Object
    },
    data(){
      return{
        datasNull:false,
        keyword:'',
        list:[],
        timer:null
      }
    },
    methods:{
      checkedCity(city){
        this.getCity(city)
        this.$router.push({path: '/home' });
      },
      ...mapMutations(['getCity']),
    },
    computed: {
      hasNoData () {
          return !this.list.length
      }
    },
    watch:{
      keyword () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = [];
          return
        }
        this.timer = setTimeout(() => {
          const result = [];
          for (let i in this.citys) {
            this.citys[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)
      }
    },
    mounted(){
      this.scroll = new Bscroll(this.$refs.search,{click: true, tap: true }); // 步骤二
    },
    activated(){
      this.keyword='';
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "~css/base.scss";
  .SearchCity{
    background-color: $bgColor;
    height: px2rem(84px);
    .search-input-box{
      text-align: center;
      .search-input{
        width: 74%;
        border-radius: px2rem(32px);
        background-color: white;
        line-height: px2rem(64px);
        padding: 0 6%;
        margin-top: px2rem(10px);
        font-size: px2rem(28px);
        text-align: center;
        color: #7e8c8d;

      }
    }
    .search-result{
      z-index: 1;
      overflow: hidden;
      position: absolute;
      top: px2rem(168px);
      left: 0;
      right: 0;
      bottom: 0;
      background: #eee;
      .search-none{
        color: red;
        line-height: px2rem(80px);
        padding-left: 2.5%;
      }
      .search-li{
        line-height: px2rem(72px);
        font-size: px2rem(28px);
        color: #7e8c8d;
        border-bottom: 1px dashed #cccccc;
      }


    }
  }

</style>