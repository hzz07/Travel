<template>
  <div class="SortNav">
    <ul class="sort-ul" ref="sortUl">
      <li class="sort-li"
          v-for="(item,index) in letters"
          :key="index"
          :class="{curr:currIndex==index}"
          :ref="item"
          @touchstart="handleTouchStart"
          @touchmove.prevent="handleTouchMove"
          @touchend="handleTouchEnd"
          @click="handleLetterClick(index)"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "SortNav",
    props:{
      list:Object,
      scrollChangeIndex:Number
    },
    data(){
      return{
        touchState:false,
        timer:null,
        startY:0,
        currIndex:0
      }
    },
    updated () {
      this.startY = this.$refs['A'][0].offsetTop;
    },
    computed:{
      letters(){
        const letters = []
        for (let i in this.list) {
          letters.push(i)
        }
        return letters
      }

    },
    methods:{
      handleLetterClick(data){
        this.currIndex=data;
        this.$emit('changeIndex',this.currIndex);
      },
      handleTouchStart(){
        this.touchState=true;
      },
      handleTouchMove(e){
        if(this.touchState){
          if(this.timer){
            clearTimeout(this.timer);
          }
          this.timer=setTimeout(()=>{
            this.startY=this.$refs.sortUl.getBoundingClientRect().top;
            const moveY=e.touches[0].clientY-this.startY;
            const index=Math.floor(moveY/20);
            if(index>=0&&index<this.letters.length){
              this.currIndex=index;
              this.$emit('changeIndex',this.currIndex);
            }
          },16)
        }
      },
      handleTouchEnd(){
        this.touchState=false;
      }
    },
    watch:{
      scrollChangeIndex(){
        this.currIndex=this.scrollChangeIndex;
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "~css/base.scss";
  .SortNav{
    width: px2rem(90px);
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .sort-ul{
      width: 100%;
      .sort-li{
        width: px2rem(36px);
        margin: px2rem(4px) auto;
        text-align: center;
        line-height: px2rem(36px);
        background-color: #ccc;
        border-radius: 50%;
        color: white;
        font-size: px2rem(24px);
      }
      .curr{
        background-color: $bgColor;
      }
    }
  }

</style>