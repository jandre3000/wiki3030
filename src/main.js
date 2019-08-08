import Vue from 'vue';
import LayoutController from './components/layouts/LayoutController';
import store from './store';
import router from './router';

const components = require('./components/**/*.vue');

function findVueComponentsRecursively( obj ) {
	Object.keys( obj ).forEach( key => {
		if ( obj[key].render || obj[key].default ) {
			Vue.component( key, obj[key].default  || obj[key]);
		} else if ( typeof obj[key] === 'object' ) {
			findVueComponentsRecursively( obj[key] );
		}
	} )
}

findVueComponentsRecursively( components );

Vue.prototype.$router = router;

new Vue({
  el: document.getElementById('app'),
  store,
  render: h => h(LayoutController)
})
