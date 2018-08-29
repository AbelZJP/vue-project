import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.prototype.$http = axios;
Vue.use(Vuex)
export default new Vuex.Store({
	//静态数据
	state: {
		item: "",
		//购物车数据
		goodsList: [],
		//shoppingcar组件点击删除传过来的当前产品
		currentgoods: '',
		//"删除"弹窗显隐状态
		alertShowHide: true,
		//搜索词
		word: "",
		//总价
		//wholePrice: 0
		info: {
			name: '',
			address:{
				p: "",
				c: "",
				a: ""
			},
			detail: ''
		}
	},
	//动态数据
	getters: {
		
	},
	//同步消息
	mutations: {
		//goodslist组件点击图片时存储过来的数据，需要在detail组件调用
		receiveId(state, item) {
			state.item = item
		},
		//address组件传过来的值
		getPeopleInfo(state, peopleinfo) {
			//stste.info = peopleinfo
			state.info.name = peopleinfo.name
			state.info.address.p = peopleinfo.address.p
			state.info.address.c = peopleinfo.address.c
			state.info.address.a = peopleinfo.address.a
			state.info.detail = peopleinfo.detailAddress
		},
		//detail组件点击'加入购物车'添加到数组里面
		// innerShoppingCar(state, data) {
		// 	//判断是否已经存在
		// 	if (state.goodsList.find(item => item.goods_id == data.goods_id)){
		// 		alert("该产品已经添加了")
		// 		return;
		// 	}
		// 	state.goodsList.push(data)
		// },
		//shoppingcar组件点击删除传过来的当前产品
		delete(state, obj) {
			state.currentgoods = obj.currentgoods,
			state.alertShowHide = obj.alertShowHide
			//state.wholePrice = obj.wholePrice
		},
		//更新搜索词
		updataWord(state, word) {
			state.word = word;
		},
		// //alert组件点击确认按钮执行删除
		// deleteGoods(state, data) {
		// 	//获取当前商品索引
		// 	let idx = state.goodsList.indexOf(data)
		// 	//在数组中删除
		// 	state.goodsList.splice(idx, 1);
		// 	state.alertShowHide = false
		// }
	},
	//
	actions: {

	}
})
