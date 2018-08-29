<template>
	<div class="login">
		<div class="login-header">
			<div class="home">
				<router-link to="/home">
					<img src="http://www.51mkf.com/wap/images/home_b.png" alt="">
				</router-link>
			</div>
			<h2>登录</h2>
			<div class="regist-btn">注册</div>
		</div>
		<form class="input">
			<div>
				<label>账  户<input type="text" placeholder="请输入用户名"></label>
			</div>
			<div>
				<label>密  码<input type="password" placeholder="请输入密码"></label>
			</div>
			<button type="submit" class="btn">登  录</button>
		</form>
	</div>
</template>
<style lang="less">
	.login {
		background-color: #F5F5F5;
		.login-header {
			height: 3rem;
			display: flex;
			padding: 0 0.7rem;
			.home {
				width: 3rem;
				height: 3rem;
				text-align: center;
				img {
					width: 50%;
					height: 50%;
					margin-top: 0.7rem;
				}
			}
			h2 {
				flex: 1;
				text-align: center;
				font-weight: normal;
				font-size: 18px;
				line-height: 3rem;
			}
			.regist-btn {
				width: 3rem;
				color: #ed5564;
				line-height: 3rem;
			}
		}
		.input {
			background-color: #fff;
			padding: 0 0.7em;
			div {
				height: 3em;
				border-bottom: 1px solid #eee;
				line-height: 3em;
				label {
					width: 100%;
					margin-left: 2em;
					input {
						outline: none;
						border: none;
						text-indent: 2em;
						font-size: 1em;
					}
				}
			}
			.btn {
				padding: 1em;
				margin: 1em 1em;
				background-color: #EEE;
				border: none;
				outline: none;
				text-align: center;
				width: 90%;
				font-size: 16px;
			}
			
		}
	}
</style>
<script>
	
</script>