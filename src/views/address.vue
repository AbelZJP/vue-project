<template>
	<div class="a_address" v-if="isChoose">
		<!-- <div class="selected">
			<ul class="pople">
				<p>已添加地址：</p>
				<router-link to="/order" @click="toOrder" v-for="(item,index) in people" tag="li" :key="index">
					<div class="peoplename">{{item.name}}</div>
					<div class="peopleAddress">{{item.address.p+" "+item.address.c+" "+item.address.a+" "+item.detail}}</div>
				</router-link>
			</ul>
		</div> -->
		
		<label class="name">收件人：<input v-model="name" placeholder="输入收件人"></input></label>
		<div class="select" >选择地址<span>&gt;</span></div>
		<div class="deal" @click="choose">{{data.p + " " + data.c + " " + data.a }}</div>
		<div class="detailaddress">
			<label class="name">详细地址：<input v-model="detailAddress" placeholder="输入详细地址"></input></label>
		</div>
	 	<div class="wrap" v-if="show">
	 		 <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
	 	</div>
	 	<!-- <button class='btn' @click="getinfo(peopleinfo)">添加地址</button> -->
	 	<router-link to="/order" class='btn' @click="getinfo" tag="button">添加地址</router-link>
	</div>
</template>
<style lang="less">
	.a_address {
		z-index: 1;
		position: absolute;
		left: 0;
		right: 0;
		top: 3.5em;
		bottom: 0;
		background-color: #fff;
		.selected {
			border-bottom: 1px solid #ccc;
			padding: .5em;
			.people{
				border-bottom: 1px solid #f5f5f5;
			}
		}
		.btn {
			width: 100%;
			height: 3em;
			padding: 0 1em;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
		}
		.name {
			height: 2em;
			line-height: 2em;
			font-size: 18px;
			input {
				outline: none;
				border: none;
				font-size: 18px;

			}
		}
		.select {
			height: 2em;
			line-height: 2em;
		}
		.deal {
			 
			height: 3em;
			background-color: #f5f5f5;
			line-height: 3em;
			text-align: center;
		}
		.wrap {
			position: absolute;
			top:2.5em;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #fff;
		}
	}
</style>
<script>
import VDistpicker from 'v-distpicker'
export default {
	
	data() {
		//let peopleAll = []
		return {
			show: false,
			data: {
				p: "",
				c: "",
				a: ""
			},
			name: '',
			detailAddress: '',
			peopleinfo: {
				name: '',
				address:{
					p: "",
					c: "",
					a: ""
				},
				detail: ''
			},
			//people:[],
			isChoose:true
		}
	},
	components: {
		VDistpicker
	},
	methods: {
		//地址显隐
		choose() {
			this.show = !this.show
		},
		// onChangeProvince(a) {
		// 	console.log(a)
		// },
		// onChangeCity(a) {
		// 	console.log(a)
		// },
		// onChangeArea(a) {
		// 	console.log(a)
		// },
		onSelected(data) {
			//console.log(data)
			this.data.p = data.province.value
			this.data.c = data.city.value
			this.data.a = data.area.value
			this.show = !this.show
		},
		getinfo() {
			this.peopleinfo.name = this.name
			this.peopleinfo.address.p = this.data.p
			this.peopleinfo.address.c = this.data.c
			this.peopleinfo.address.a = this.data.a
			this.peopleinfo.detail = this.detailAddress
			//console.log(this.peopleinfo)
			//this.people.push(this.peopleinfo)
			//console.log(this.people)
			this.$store.commit("getPeopleInfo", this.peopleinfo)
			this.isChoose = false
		},
		// toOrder() {
		// 	this.$store.commit("getPeopleInfo", item)
		// }
	},
	created() {
		//console.log(this)
		//console.log(this.peopleinfo)
	}
}
</script>