<template>
  <div class="CityList"  ref="wrapper" @scroll="_initScroll">
    <div class="bscroll">

      <div class="bscroll-container"  ref="scrollTop">
        <div class="city-part city-part-one">
          <div class="city-title">
            <p class="title-word center">当前城市</p>
          </div>
          <div class="city-list city-part-two">
            <ul class="city-ul clearFix center">
              <li class="city-li flowLeft">{{this.currentCity}}</li>
            </ul>
          </div>
        </div>
        <div class="city-part city-part-two">
          <div class="city-title">
            <p class="title-word center">热门城市</p>
          </div>
          <div class="city-list">
            <ul class="city-ul clearFix center">
              <li class="city-li flowLeft" v-for="item in hotCity" :key="item.id" @click="changeCity(item.name)" >{{item.name}}</li>
            </ul>
          </div>
        </div>
        <div class="city-part city-part-three" v-for="(item,index,key) in cityList" :key="key">
          <div class="city-title">
            <p class="title-word center" :ref="key">{{index}}</p>
          </div>
          <div class="city-list">
            <ul class="city-ul center">
              <li class="city"
                  v-for="liItem in item"
                  @click="changeCity(liItem.name)"
              >{{liItem.name}}</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import Bscroll from "better-scroll"; // 步骤一
  import {mapState,mapMutations} from 'vuex'
  export default {
    name: "CityList",
    props:{
      cityList:Object,
      hotCity:Array,
      currIndex:String
    },
    data(){
      return{
        otherHeight:'',
      }
    },
    methods:{
      changeCity(city){
        this.getCity(city);
        this.$router.push({path: '/home' });
      },
      ...mapMutations(['getCity']),
      // 是否派发滚动事件
      _initScroll() {
        this.scroll = new Bscroll(
          this.$refs.wrapper,
          { click: true,
            tap: true,
            probeType:3,
            listenScroll:{
            type: Boolean,
            default: true
            }
          }
        );
        this.scroll.on('scroll', (pos) => {
          let cityIndex=[];
          let windowHeight=window.screen.height;//屏幕宽度
          let overHeight=this.$refs.wrapper.offsetTop;
          let scrollHeight=windowHeight-overHeight;
          for (let i = 0; i < this.letters.length; i++) {
            let cityId=this.$refs[i][0].offsetTop;
            if(scrollHeight<cityId){
              cityId=this.$refs[i][0].offsetTop-scrollHeight;
            }
            let list=[];
            for (let j = 0; j <=100; j++) {
              cityId = cityId+1;
              list.push(cityId)
            }
            if(i>=0&&i < this.letters.length-1){
              let cityIdPrev=this.$refs[i+1][0].offsetTop-scrollHeight;
              for (let j = 0; j <=100; j++) {
                cityIdPrev = cityIdPrev-1;
                list.push(cityIdPrev)
              }
            }
            cityIndex.push(list)
          }

          let posY=pos.y.toString();
          posY=posY.substr(1, posY.length-1);
          posY=Math.round(Number(posY));
          let datas={};
          datas.cityIndex=cityIndex;
          datas.posY=posY;
          this.$emit('scrollChange',datas)
        })
      }
    },
    mounted(){
      this._initScroll();
    },
    computed:{
      letters(){
        const letters = []
        for (let i in this.cityList) {
          letters.push(i)
        }
        return letters
      },
      ...mapState({
        currentCity:'currentCity'
      })
    },
    watch:{
      currIndex(){
        if (this.currIndex) {
          const element = this.$refs[this.currIndex][0];
          this.scroll.scrollToElement(element)
        }
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "~css/base.scss";
  .CityList{
    position: absolute;
    top: px2rem(168px);
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    .city-title{
      background-color: #eee;
      .title-word{
        line-height: px2rem(70px);
        color: #666;
        font-size: px2rem(28px);
      }
    }
    .city-list{
      padding: px2rem(20px) 0;
      .city-ul{
        .city-li{
          width: 26%;
          line-height: px2rem(60px);
          border: 1px solid #ccc;
          text-align: center;
          border-radius: px2rem(8px);
          margin: px2rem(12px) 6% px2rem(12px) 0;
          color: #666;
        }
        .city{
          line-height: px2rem(76px);
        }
      }
    }

  }

</style>