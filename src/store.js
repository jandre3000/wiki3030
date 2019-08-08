import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		title: 'Vuex page title',
		content: 'Vuex page content',
		lang: 'en',
		layout: 'vector',
		devGrid: false
	},
	getters: {
		title: state => state.title,
		content: state => state.content,
		lang: state => state.lang,
		layout: state => state.layout,
		devGrid: state => state.devGrid
	},
	mutations: {
		setTitle( state, payload ) {
			state.title = payload;
		},
		setContent( state, payload ) {
			state.content = payload;
		},
		setLang( state, payload ) {
			state.lang = payload;
		},
		setLayout( state, payload ) {
			state.layout = payload;
		},
		setDevGrid( state, payload ) {
			state.devGrid = payload;
		}
	}
})

export default store;
