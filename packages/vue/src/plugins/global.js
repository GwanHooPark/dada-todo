import VCalendar from 'v-calendar';
import VueMoment from 'vue-moment';
import '@/assets/css/main.css';

export default {
	install(Vue) {
		Vue.use(VCalendar);
		Vue.use(VueMoment);
	},
};
