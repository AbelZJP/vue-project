<template>
  <div>
    <div class="header">
    	<div class="search">
    		<div class="logo">
    			<!-- <img src="http://www.51mkf.com/wap/images/home_logo.png?t=170323" alt=""> -->
    			<h1>logo</h1>
    		</div>
    		<div class="inp">
    			<img src="http://www.51mkf.com/wap/images/search_ico.png" alt="">
    			<input type="text" class="search" placeholder="华为nova3" v-model="msg" @keyup.enter="search">
    		</div>
    		<div>
    			<router-link to="/login" class="login-btn" tag="div">
	    			<img src="http://www.51mkf.com/wap/images/member_index.png" alt="">
	    			<p>登录</p>
	    		</router-link>
    		</div>
    	</div>
    </div>
    <!-- 路由渲染位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
	import store from "./store.js"
	export default {
		//store,
		data() {
			return {
		  	msg: ""
			}
		},
		methods: {
			hidesearch() {
				this.hide = false
			},
			search() {
				this.$store.commit("updataWord", this.msg)
				this.msg=""

			}
		},
		// computed: {
		// 	hidesearch() {
		// 		return this.$store.hide = true
		// 	}
		// },
		created() {
			//console.log(this)
		}
	}
</script>

<style lang="less">
	@import url("./base.less");
	.header {
		color: #fff;
		background-color: rgba(201, 21, 35, .9);
		.search {
			display: flex;
			.logo {
				width: 100px;
				text-align: center;
				h1 {
					width: 92px;
					height: 26px;
					padding-top: 14px;
					font-size: 22px;
				}
			}
			.inp {
				flex: 1;
				padding-top: 8px;
				position: relative;
				img {
					width: 20px;
					height: 20px;
					position: absolute;
					left:5px;
					top: 15px;
				}
				input {
					font-size: 18px;
					text-indent: 1.7em;
					width: 100%;
					height: 35px;
					outline: none;
					border: none;
					border-radius: 3px;
				}
			}
			.login-btn {
				width: 50px;
				text-align: center;
				padding: 5px;
				img {
					width: 25px;
					height: 25px;
				}
				p {
					font-size: 12px;
				}
			}
		}
	}

</style>
