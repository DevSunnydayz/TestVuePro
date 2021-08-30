<template>
  <div class="test-one">
    <div class="name">
    <div class="headerfnamelname">
      <h1>
        Your FirstName and LastName
      </h1>
   <div class="input-group inSide">
   <span class="input-group-text inputText" >First and last name</span>
   <input type="text" aria-label="First name" class="form-control "v-model="textName.firstname">
   <input type="text" aria-label="Last name" class="form-control" v-model="textName.lastname" >
     </div>
        <div class="card showName"id="uname">
          <p>Your Name :
           {{textName.firstname}} {{textName.lastname}}</p>      
        </div>

    </div>
  </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        textName:{
          firstname:'',
          lastname:'',
        }
      }

    }

  }
</script>
<style>
.headerfnamelname{
  text-align: center;
}
.showName{
 margin-top: 30px;
    max-width: 25%;
    margin-left: 40%;
    background-color: black;
    color: wheat;

}
.inSide{
    max-width: 40%;
    margin-left: 30%;
    margin-top: 30px;
}
.inputText{
   background-color: black;
    color: wheat;
}
</style>

