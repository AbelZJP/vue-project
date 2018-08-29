<template>
	<div class="list">
		<div class="list_search">
    		<div class="s"><span class="sanjiao" @click="back"></span></div>
    		<div class="inp">
    			<img src="http://www.51mkf.com/wap/images/search_ico.png" alt="">
    			<input type="text" class="search" placeholder="电脑">
    		</div>
    	</div>
    	
	</div>
</template>
<style lang="less">
	@import "../base.less";
	.list {
		.list_search {
			height: 3em;
			background-color: #f5f5f5;
			display: flex;
			.s {
				width: 3em;
				text-align: center;
				line-height: 3em;
				.sanjiao {
					display: inline-block;
					.sanjiaoxing();
					margin-top: 0.3em;
				}
			}
			.inp {
				// flex: 1;
				padding-top: 8px;
				position: relative;
				width: 80%;
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
		}
	}
</style>
<script>
	export default {
		methods: {
			back() {
				this.$router.go(-1);
			}
		}
	}
</script>