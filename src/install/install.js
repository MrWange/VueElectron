import MNavigation from '../components/MNavigation.vue' //导入导航栏

import MusicPlay from '../components/MusicPlay.vue' //导入音乐播放器
let myui={
	install:(vue)=>{
		vue.component('MNavigation',MNavigation),
		vue.component('MusicPlay',MusicPlay)
	}
}

export default myui