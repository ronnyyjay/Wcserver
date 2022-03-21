<template>
  <div class="Info">
    <div class="left">
      <div class="left-info">
        <div class="picture">
          <img src="./assets/Profile2.jpg" width="100%" height="100%">
        </div>
          <h3>Ramales, Aaron Jay </h3>
      </div>

      <div class="contactInfo"></div>
        <h4 class="information"> Personal Information</h4>
        <ul class="contact">
          <li>Name : Ramales, Aaron Jay Q.</li>
          <li>Age : 20</li>
          <li>Birthday : July 18, 2001</li>
          <li>Address : Holy Angel Village 6</li>
        </ul>

        <div class="contactInfo"></div>
          <h4 class="information"> Contact Information</h4>
          <ul class="contact">
            <li>Email : ajramales0118@gmail.com</li>
            <li>School Email : aqramales@student.hau.edu.ph</li>
            <li>Contact No. : 09278430273</li>
          </ul>

        </div>

        <div class="right">
          <div class="Skills">
              <h2 class="title">Skills</h2>
                <skills></skills>
          </div>
          <br>
          <div class="Language">
            <h2 class="title">Language </h2>
            <language></language>
          </div>
          <br>
          <div class="Hobbies">
            <h2 class="title">Hobbies </h2>
            <hobbies></hobbies>
        </div>

        </div>
        </div>

</template>

<script>
//------------Imports--------------//
import Skills from './skills.vue'
import Language from './Language.vue'
import Hobbies from './hobbies.vue'
//---------------------------------//
export default {
  //--------Components---------//
  components: { 
    Skills,
    Language,
    Hobbies
    
},
  name: 'app',
  data () {
    return {
      msg: ''
    }
  }
}
      
</script>

<style>
*
{
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
body {
    background-color: rgb(104, 107, 116);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.Info {
    position: relative;
    width: 100%;
    max-width: 1000px;
    min-height: 1000px;
    margin: 50px;
    background-color: rgb(255, 255, 255);
    display: grid;
    grid-template-columns: 1fr 2fr;
    box-shadow: 0 35px 55px rgb(255, 255, 255);
}
/***************************************************/
.Info .left {
    position: relative;
    background: #ff7b00;
    padding: 40px;
}
.left-info{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid rgb(255, 255, 255);
}
.picture {
    position: relative;
    width: 350px;
    height: 400px;
    border-radius: 50%;
    overflow: hidden;
}
.left-info h3 {
    color: rgb(0, 0, 0);
    font-size: 1.5em;
    margin-top: 20px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    line-height: 1.4em;
}
.contactInfo {
    padding-top: 40px;
}
.contact {
    color: rgb(0, 0, 0);
    font-weight: 300;
    font-size: 18px;
    display: inline-block;
    
}
.information {
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 20px;
}
/***************************************************/
.Info .right {
    position: relative;
    background: rgb(0, 0, 0);
    padding: 40px;
}
.about {
    margin-bottom: 50px;
}
.title {
    color: #ff7b00;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
}
p {
    color: rgb(255, 253, 248);
}
ul {
    font-size: 20px;
    color: rgb(255, 255, 255);
    font-weight: 200;
    letter-spacing: 1px;
    margin-bottom: 20px;
}
</style>