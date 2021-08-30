<template>
	<div class="age-calculator">
			<input type='date' v-model="birthday" >
			<button class="btn btn-info" @click='ymd()'>Process Y/M/D</button>
            <button class="btn btn-info" @click='ym()'>Process Y/M</button>
            <button class="btn btn-info" @click='y()'>Process Y</button>
            <button class="btn btn-info" @click='day()'>Process Day</button>
		     	   <div class="display-age">{{ showAge }}
            </div>
</div>
</template>

<script>
	export default {
		data(){
			return {
        today: new Date(),
				birthday: '',
        showAge: '',
			}
		},
		methods: {
			calculateAge(){
                let dob = new Date(this.birthday) //  2000 - 10 - 31
                let year = this.today.getFullYear() - dob.getFullYear(); // 2021 - 2000 = 21
                let month = this.today.getMonth() - dob.getMonth();  // 7 - 9 = -2
                let day = this.today.getDate() - dob.getDate(); // 30 - 31 = -1
                if(day < 0){ 
                    // year 2000 // month 9+1 =10  // day 31
                    let totaldayofmonth = new Date(dob.getFullYear() , dob.getMonth() + 1 , 0).getDate();
                    // 0 คือจำนวนวันทั้งหมดของเดือนนั้น //29
                    if(totaldayofmonth < this.today.getDate()){
                        day = totaldayofmonth + day + (this.today.getDate() - totaldayofmonth) ;
                    }
                    else{ 
                        // 31 + -1 = 30
                        day = totaldayofmonth + day ; 
                    }
                    // month -2 + -1 = -3
                    month = month - 1 ;
                    if(month < 0){
                        month = month + 12 ; //9
                        year = year - 1 ; //20
                    }
                }
                if(month < 0){
                        // month -4 + 12 = 10
                        // year 11  - 1 = 10
                        month = month + 12 ;
                        year = year - 1 ;
                }
                const output = {
                    y:year , m:month , d:day   
                }
                // const user = {
                //     name : 'nopparat'
                // }
                console.log(output)
                return output
			},
            calculateDay(){
                let difftime = Math.abs(this.today - new Date(this.birthday));
                console.log(difftime)
                let diffday = Math.floor(difftime / (1000 * 60 * 60 * 24));
                // 1000 มิลิวิ เท่ากับ 1 วิ คูณ 60 วิ เท่ากับ 1 นาที คูณ 60 นาที เท่ากับ 1 ชั่วโมง คูณ 24 เท่ากับ 1 วัน ก็จะได้ 1วันมีกี่มิลลิวินาที
                // เอามิลิวินาทีของวันปจุบัน ลบกับ ของวันที่เลือก แล้วเอามาหาร มิลิวินาทีของ 1 วัน ได้เท่ากับจำนวนวัน
                return diffday 
            },
            ymd(){
                let calage = this.calculateAge()
                this.showAge = calage.y + ' year ' + calage.m + ' month ' + calage.d + ' day'
            },
            ym(){
                let calage = this.calculateAge()
                this.showAge = calage.y + ' year ' + calage.m + ' month'
            },
            y(){
                let calage = this.calculateAge()
                this.showAge = calage.y + ' year '
            },
            day(){
                let calDay = this.calculateDay()
                console.log(calDay)
                this.showAge = calDay + ' day '
            }
		},
	}
</script>
<style>
.age-calculator{
    text-align: center;
    margin-top: 5%;
}
</style>