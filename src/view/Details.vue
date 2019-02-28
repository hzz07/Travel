<template>
  <div class="Details">
    <details-header></details-header>
    <details-banner :imgInfo="gallaryImgs"></details-banner>
    <details-more-list :list="list"></details-more-list>
    <div class="height"></div>

  </div>
</template>

<script>
  import DetailsHeader from '../components/Details/Header'
  import DetailsBanner from '../components/Details/Banner'
  import DetailsMoreList from '../components/Details/MoreList'
  export default {
    name: "Details",
    data(){
      return{
        gallaryImgs:[],
        list:[]
      }
    },
    components:{DetailsHeader,DetailsBanner,DetailsMoreList},
    methods:{
      getImgInfo(res){
        let datas=res.data;
        console.log(datas)
        if(datas.ret&&datas.ret==true){
          let data=datas.data;
          this.gallaryImgs=data.gallaryImgs;
          this.list=data.categoryList;
        }
      },
      toShowAblumImg(){
        this.axios.get('../../static/mock/detail.json',{
          params: {
            id: this.$route.params.id
          }
        })
          .then(this.getImgInfo)
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    mounted(){
      this.toShowAblumImg();
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "~css/base.scss";
  .height{
    height: px2rem(2000px);
  }

</style>