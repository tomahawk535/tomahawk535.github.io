<template>
  <div>
    <nav>
      <!-- sort by color eye-->
        <VCharacterEye v-model="selected"
        :colorOption="options"
        :selected="selected"
        >
        </VCharacterEye>
      <div class="range_nav"
           @click="areRangeVisibleHeight=!areRangeVisibleHeight"
      > Height <img v-bind:src="require('../assets/images/Shape.png')" alt="img"> </div>
      <div class="range_nav"
           @click="areRangeVisibleAge=!areRangeVisibleAge"
      > Age <img v-bind:src="require('../assets/images/Shape.png')" alt="img"> </div>
    <!--sort by range-->
      <div class="range range_first"
      v-if="areRangeVisibleHeight">
        <div class="range_value">
          <p>{{min_height}}</p>
          <p>{{max_height}}</p>
        </div>
        <div class="additional_range_value">
          <p>{{min_height}}</p>
          <p>{{max_height}}</p>
        </div>
        <div class="range_height">
          <input type="range" min="96" max="202" step="1" v-model="min_height" @change="setRange">
          <input type="range" min="96" max="202" step="1" v-model="max_height" @change="setRange">
        </div>
      </div>
      <div class="range range_second"
           v-if="areRangeVisibleAge">
        <div class="range_value">
          <p>{{min_birth_year}}</p>
          <p>{{max_birth_year}}</p>
        </div>
        <div class="additional_range_value">
          <p>{{min_birth_year}}BBY</p>
          <p>{{max_birth_year}}BBY</p>
        </div>
        <div class="range_age">
          <input type="range" min="19" max="112" step="1" v-model="min_birth_year" @change="setAge">
          <input type="range" min="19" max="112" step="1" v-model="max_birth_year" @change="setAge">
        </div>
      </div>
    </nav>

    <!--character list-->
      <div class="person">
        <VCharacterItem
            v-for="person in filterCharacters"
            :key="person.id"
            v-bind:person="person"
        >
        </VCharacterItem>
      </div>

  </div>




</template>

<script>
import VCharacterItem from '../components/VCharacterItem'
import {mapActions, mapGetters} from 'vuex'
import VCharacterEye from "@/components/VCharacterEye";


export default {
  name: 'VCharacter',
  components: {
    'VCharacterEye' : VCharacterEye,
    'VCharacterItem': VCharacterItem
  },
  props: {},
  data(){
      return {
        min_height: "96",
        max_height: "220",
        sortedCharacters: [],
        min_birth_year : "19",
        max_birth_year: "112",
        options:[
          {name: 'eye_color', color: 'Eye_color'},
          {name: 'eye_color', color: 'blue'},
          {name: 'eye_color', color: 'yellow'},
          {name: 'eye_color', color: 'red'},
          {name: 'eye_color', color: 'brown'},
          {name: 'eye_color', color: 'blue-grey'}
        ],
        selected: "Eye_color",
        areRangeVisibleHeight: false,
        areRangeVisibleAge: false
      }
  },
  computed: {
      ...mapGetters([
          'PERSONS'
      ]),
      filterCharacters(){
        if (this.sortedCharacters.length){
          return this.sortedCharacters
        } else {
          return this.PERSONS
        }
      },
  },
  methods: {
      ...mapActions([
        'GET_PERSON'
      ]),
    setRange(){
      if (this.min_height > this.max_height){
        let temp = this.max_height;
        this.max_height = this.min_height;
        this.min_height = temp;
      }
      this.sortByHeight()
    },
    sortByHeight(){
      let vm = this;
      this.sortedCharacters = [...this.PERSONS]
      this.sortedCharacters = this.sortedCharacters.filter(function(item){
        return item.height >= vm.min_height && item.height <= vm.max_height
      })
    },
    setAge() {
      if (this.min_birth_year > this.max_birth_year) {
        let temp1 = this.max_birth_year;
        this.max_birth_year = this.min_birth_year;
        this.min_birth_year = temp1;
      }
      this.sortByAge()

      },
    sortByAge(){
      let vm = this;
      this.sortedCharacters = [...this.PERSONS]
      this.sortedCharacters = this.sortedCharacters.filter(function(item){
        return item.birth_year>= vm.min_birth_year && item.birth_year <= vm.max_birth_year
      })
    },

    hideRangeHeight(){
      this.areRangeVisibleHeight= false
    },
    hideRangeAge(){
      this.areRangeVisibleAge= false
    }
  },
  mounted(){
    this.GET_PERSON();
    this.sortByHeight();
    this.sortByAge();
    },


}
</script>
<style lang="scss" scoped>
.person {
  padding: 0 7%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1em;
  background-color: #ffffff;
}
nav {
  maxi-width: 100%;
  display: flex;
  padding: 2em 10%;
  justify-content: right;
}
.range_nav{
  margin-left: 1%;
  &:hover {
    cursor: pointer;
  }
}

.range {
  width: 240px;
  height: 200px;
  z-index: 999;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.04);
  border-radius: 6%;
  flex-basis: 22%;
  justify-content: center;
  padding: 1em;
  background-color: #ffffff;
  &:hover{
    cursor: pointer;
  }
  p {
    width: 60px;
    border: rgba(0,0,0,0.08) 1px solid;
    border-radius: 0.5em;
    padding: 1em;
  }
}
.range_first {
  position: absolute;
  left: 9.64%;
  right: 72.07%;
  top: 20.8%;
  bottom: 49.46%;
  background-color: #ffffff;
}
.range_second {
  position: absolute;
  left: 13.54%;
  right: 69.17%;
  top: 20.8%;
  bottom: 49.46%;
}
.range_value {
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
}
.additional_range_value {
    display: flex;
    justify-content: space-around;
    background-color: #ffffff;
  p{
    width: 60px;
    margin-bottom: 2em;
    border: none;
    padding: 0;
  }
}
.range_height{
  margin: auto 1em;
  text-align: center;
  position: relative;
  justify-content: center;
  background-color: #ffffff;
  height: 1em;
}
.range_height svg, .range_height input[type=range]{
  width: 90%;
  position: absolute;
  left: 0;
  bottom: -0.3em;
  -webkit-appearance: none;
  background-color:#FF634A;
  border: none;
  border-radius: 5px;
  height: 2px;
  outline: none;
  cursor: pointer;

}
input[type=range]::-webkit-slider-thumb{
  z-index: 999;
  position: relative;
  margin-top: -2px;
  width: 10px;
  -webkit-appearance: none;
  height: 10px;
  background-color:#FF634A;
  border-radius: 10px;
}
input[type="range"]::-moz-range-progress {
  background-color:#FF634A;
}
input[type="range"]::-moz-range-track {
  background-color: #FF634A;
}
input[type="range"]::-ms-fill-lower {
  background-color: #FF634A;
}
input[type="range"]::-ms-fill-upper {
  background-color:#FF634A;
}

.range_age{
  margin: auto 16px;
  text-align: center;
  position: relative;
  justify-content: center;
}
.range_age svg, .range_age input[type=range] {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -0.3em;
  -webkit-appearance: none;
  background-color:#FF634A;
  border: none;
  border-radius: 5px;
  height: 2px;
  outline: none;
  cursor: pointer;
}


//for mobile only
@media all and (max-width:599px){

}

</style>