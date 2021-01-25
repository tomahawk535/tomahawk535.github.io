<template>
  <div>
    <select
    v-model="selected"
    >
      <option
      v-for="option in colorOption"
      :key="option.id"

      >{{option.color}} </option>
    </select>
  </div>
    
</template>

<script>





export default {
  name: 'VCharacterEye',
  props:{
    colorOption: { type: Array,
      default (){
        return {

        } 
      }
    },
    selected: { type: String,
      default() {
        return{

        }
      }
    }
    
  },
  data() {
    return{

    } 
  },
 methods: {



 }
}
</script>
<style lang="scss" scoped>
select {
  outline: none;
  border: none;
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
  }
}

</style>
