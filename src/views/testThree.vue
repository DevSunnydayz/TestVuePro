<template>
	<div class="header-radio">
        <h1>Click Radio For Select Color </h1>
		<div class="rdo">
      
			<div class="fontred">
      <input  type="radio" name="fontcl"  value="red" v-model="color"/>red
            </div>
            <div class="fontred">
        <input  type="radio" name="fontcl"  value="blue" v-model="color"/>blue
            </div>
            <div class="fontred">
        <input type="radio" name="fontcl"  value="green" v-model="color"/>green
            </div>
      <div class="fontred">
        <input type="radio" name="fontcl"  value="black" v-model="color"/>black
      </div>

     

      <h3 id="showcolor" :class="color" >Chang Color here!</h3>

		</div>

	</div>
</template>
<script>
// export default คือการกำหนดค่าให้ใช้ในหน้าhtmlของเรา
// data จะมี Return ตัวที่เราสามารถนำไปใช้ได้อยู่ในนี้ ซึ่งในนี้คือ color ซึ่ง set ค่าดีเฟลท์ไว้ที่ green
  export default{
     data(){
       return{
         color:'black',
       }
     }
  }
</script>
<style>
.header-radio{
  text-align: center;
  margin-top: 5%;
}
.red{
  color: red;
}
.green{
  color: green;
}
.blue{
  color: blue;
}
.black{
  color: black;
}
.fontred{
  text-align: center;
}
</style>