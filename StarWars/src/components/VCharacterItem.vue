<template>
    <div class="person_info" >
          <img v-bind:src="require('../assets/images/'+ $attrs.person.name + '.jpg')" alt="img">
            <p class="year" >{{$attrs.person.birth_year}}</p>
            <h1 class="name">{{$attrs.person.name}}</h1>
            <p class="other_info">eye-color:{{$attrs.person.eye_color}}  height:{{$attrs.person.height}} mass: {{$attrs.person.mass}}</p>
    </div>


</template>

<script>


export default {
  name: 'VCharecterItem',
  components: {},
  prorps: {
    person: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
 .person_info {
        flex-basis: 48%;
        justify-content: center;
        align-self: center;
        border:none;
        border-radius: 0.5em;
        height: 25.000em;
        margin-bottom: 1em;
    }
    img {
      width: 100%;
      height: 25.000em;
      filter: brightness(0.7);
      border-radius: 6px;
    }
    p {
      position: relative;
      top: -22em;
      left: 2em;
      color: #fff;
    }
    h1{
      position: relative;
      top: -11em;
      left: 1em;
      color: #eeeeee;
      
    }

 //for mobile only
 @media all and (max-width:599px){
   .person_info {
     flex-basis:100%;
   }
 }
</style>