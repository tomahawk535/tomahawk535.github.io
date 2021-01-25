<template>
    <div>
        <div class="header">
            <img :src="`${publicPath}StarWars.png`">
            <div class="navigation">
            <select>
                <option selected value="En">En</option>
            </select>
                <input type="button" value="Log in">
                <input type="button" value="Sign up" class="signup">
        </div>
        </div>
        <VCharacter>
            <VCharacterItem>
            </VCharacterItem>
        </VCharacter>
      <div class="footer">
        <div class="icon">
          <img :src="`${publicPath}StarWars.png`">
          <div class="social_links">
            <a href="#"><img v-bind:src="require('../assets/images/facebook.png')" alt="facebook"></a>
            <a href="#"><img v-bind:src="require('../assets/images/instagram.png')" alt="instagram"></a>
          </div>
        </div>
        <div class="privacy_policy">
          <p>All right Reserved</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>


</template>

<script>
import VCharacter from '../components/VCharacter'
import VCharacterItem from '../components/VCharacterItem'

export default {
  name: 'Wrap',
  components: {
    'VCharacter':VCharacter,
    'VCharacterItem': VCharacterItem
    
  },
  data(){
      return {
        publicPath: process.env.BASE_URL
      }  
  }
}
</script>
<style lang="scss" scoped>
.header {

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F2EEEE;
    max-width: 100%;
    height: 80px;
    padding: 0 7%;

    input {
        outline: none;
        border:  none;
        border-radius: 10px;
        padding: 1em 3.500em;
        &:hover {
            cursor: pointer;
        }
    }
    .signup {
        background-color: #FF634A;
        color: #fff;
   }
   select {
       outline: none;
       border: none;
       background-color: #F2eeee;
   }

}
.footer{display: flex;
  flex-wrap: wrap;
  background-color: #F2eeee;
  max-width: 100%;
  padding:  2.688em 7% 0;
  height: 195px;
  .icon {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

  }
  .social_links {
    width: 30%;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    a {
      display: flex;
      height: 20px;
      width: 20px;
      margin-left: 1em;
      background-color: #FF634A;
      align-items: center;
      justify-content: center;
      border-radius: 6px;

    }
  }
  .privacy_policy {
    width: 100%;
    display: flex;
    color: black;
    justify-content: space-between;
  }
}

</style>