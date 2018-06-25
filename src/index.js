import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from './vue/main.vue'

Vue.use(VueRouter)
Vue.config.errorHandler = (error, vm) => {
	console.log('[vue error] ' + error);
}

window.Vue = Vue;
window.VueRouter = VueRouter;

//创建vue实例

// let MainPage = require('./vue/main.vue').default;
let router = new VueRouter({});
//全局路由导航守卫
router.beforeEach((to, from, next) => {
	if (to.matched.length == 0) {//没有可匹配路由

	}
	else {
		next();
	}
});
window.mainVue = new Vue({
	el: '#app',
	router: router,
	components: { MainPage },
	template: `<MainPage></MainPage>`
});;


// var animData = require('./../assets/data_222.json');
// var animData = require('./../assets/dodo.json');

// var animData = require('./../moke-data/countdown.json');


// window.registerEditSymbol = function (elem) {
// 	if (elem.layerElement && elem.layerElement.addEventListener) {
// 		elem.layerElement.addEventListener('click', function (e) {
// 			e.stopPropagation();

// 			var domRect = elem.layerElement.getBoundingClientRect();
// 			var domSelect = document.getElementById('selectRect');

// 			domSelect.style.display = 'block';

// 			domSelect.style.top = domRect.top + 'px';
// 			domSelect.style.left = domRect.left + 'px';
// 			domSelect.style.width = domRect.width + 'px';
// 			domSelect.style.height = domRect.height + 'px';
// 			// console.log(elem.layerElement.childNodes)

// 			console.log('elem: ', elem.constructor.name)

// 			switch (elem.constructor.name) {
// 				case 'SVGTextElement':
// 					let tk = elem.data.t.d.k
// 					if (tk && +tk.length > 0 && tk[0].s) {
// 						// tk[0].s.t = 'fuckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk\rfffffffffffffffff';
// 						console.log('选中文字:', tk[0].s.t);
// 					}
// 					break;
// 				case 'IImageElement':
// 					let id = elem.data.refId;
// 					let assetsData = window.lottieAnim.getAssetData(id)
// 					console.log('选中图片：', assetsData);
// 					break;
// 			}

// 		})
// 	}
// }

// window.loadAnim = function () {
// 	if (window.lottieAnim) {
// 		animData = window.lottieAnim.animationData
// 		window.lottieAnim.destroy();
// 	}
// 	var opts = {
// 		container: document.getElementById('amin'),
// 		renderer: 'svg',
// 		// renderer: 'html',
// 		loop: true,
// 		autoplay: true,
// 	}

// 	opts.animationData = animData;
// 	window.lottieAnim = bodymovin.loadAnimation(opts);
// }


// window.loadAnim();


