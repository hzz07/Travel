<template>
  <div class="City">
    <city-header></city-header>
    <city-search-city :citys="cityList"></city-search-city>
    <!--城市list-->
    <city-list
      :cityList="cityList"
      :hotCity="hotCity"
      :currIndex="currIndex"
      @scrollChange="getChange"
    ></city-list>
    <!--侧边导航-->
    <city-sort-nav
      :list="cityList"
      @changeIndex="getchangeIndex"
      :scrollChangeIndex="scrollChangeIndex"
    ></city-sort-nav>
  </div>
</template>

<script>
  import CityHeader from '../components/City/Header'
  import CitySearchCity from '../components/City/SearchCity'
  import CityList from '../components/City/cityList'
  import CitySortNav from '../components/City/SortNav'
  export default {
    name: "City",
    components:{CityHeader,CitySearchCity,CityList,CitySortNav},
    data(){
      return{
        hotCity:[],
        cityList:{},
        currIndex:'',
        scrollChangeIndex:0
      }
    },
    methods:{
      initCityPage(res){
        let ret=res.data.ret;
        if(ret==true){
          let datas=res.data.data;
          this.hotCity=datas.hotCities;
          this.cityList=datas.cities;
        }
      },
      getCityInfo(){
        this.axios.get('../../static/mock/city.json')
          .then(this.initCityPage)
          .catch(function (error) {
            console.log(error);
          });
      },
      getchangeIndex(data){
        this.currIndex=data.toString();
      },
      getChange(data){
        let datas=data;
        for (let i = 0; i < datas.cityIndex.length;i++) {
          let datum1 = datas.cityIndex[i];
          if(datum1.indexOf(datas.posY) > -1){
            this.scrollChangeIndex=i;
          }
        }
      }
    },
    mounted(){
      this.getCityInfo();
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "~css/base.scss";
  .City{}

</style>