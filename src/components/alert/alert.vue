<template>
	<div class="delete">
		<div class="content">
			<p class="text">确认删除这个商品吗？</p>
			<div class="d_footer">
				<button class="cancel" @click="Hidden()">取消</button>
				<button class="submit" @click="deleteGood(data)">确认</button>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	.showAlert {
		display: none;
	}
	.delete {		
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, .5);
		.content {
			width: 16em;
			height: 6em;
			position: absolute;
			top: 50%;
			left: 50%;
			margin-top: -3em;
			margin-left: -8em;
			background-color: #fff;
			text-align: center;
			p {
				padding: 1em;
			}
			.d_footer {
				button {
					width: 4em;
					margin: 0 1em;
					border: none;
					border: 1px solid #ccc;
					padding: .3em 0;
					outline: none;
					&.cancel {
						background-color: #eee;
					}
					&.submit {
						background-color: #ed5564;
						color: #fff;
					}
				}
			}
		}
	}
</style>
<script>
	export default {
		data() {
			return {
				data: this.$store.state.currentgoods,
				item: this.$store.state.goodsList

			}
		},
		methods: {
			Hidden() {
				this.$emit("hidden")
			},
			// deleteGood(data) {
			// 	this.$store.commit('deleteGoods', data);
			// 	// this.$store.state.alertShowHide = false
			// }
			//alert组件点击确认按钮执行删除
			deleteGood(data) {
				//获取当前商品索引
				let idx = this.item.indexOf(data)
				//在数组中删除
				this.item.splice(idx, 1);
				//修改弹出框状态
				this.$store.state.alertShowHide = false;
				//this.$store.state.
			}
		}
	}
</script>