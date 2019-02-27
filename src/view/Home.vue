<template>
  <div class="Home">
    <home-header></home-header>
    <home-banner :list="bannerList"></home-banner>
    <home-icons-list :list="iconsList"></home-icons-list>
    <home-travel-list :list="travelList"></home-travel-list>
  </div>
</template>

<script>
  import HomeHeader from '../components/Home/Header'
  import HomeBanner from '../components/Home/Banner'
  import HomeIconsList from '../components/Home/IconsList'
  import HomeTravelList from '../components/Home/TravelList'
  import {mapState} from 'vuex'
  export default {
    name: "Home",
    components:{HomeHeader,HomeBanner,HomeIconsList,HomeTravelList},
    data(){
      return{
        bannerList:[],
        iconsList:[],
        travelList:[],
        oldCity:''
      }
    },
    methods:{
      initHomePage (res) {
        let datas=res.data;
        if(datas.ret&&datas.ret==true){
          let data=datas.data;
          this.bannerList=data.swiperList;
          this.iconsList=data.iconList;
          this.travelList=data.recommendList;
        }
      },
      getHomeInfo () {
        this.axios.get('../../static/mock/index.json?city='+this.currentCity)
          .then(this.initHomePage)
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    mounted(){
      this.oldCity=this.currentCity;
      this.getHomeInfo();
    },
    computed:{
      ...mapState(['currentCity'])
    },
    activated(){
      if(this.oldCity!=this.currentCity){
        this.oldCity=this.currentCity;
        this.getHomeInfo();

      }
    }
  }
</script>

<style scoped>

</style>