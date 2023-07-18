import MNavigation from '../components/MNavigation.vue' //导入导航栏
let myui={
	install:(vue)=>{
		vue.component('MNavigation',MNavigation)
	}
}

export default myui