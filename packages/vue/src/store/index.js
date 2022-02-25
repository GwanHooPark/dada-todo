import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [
		createPersistedState({
			storage: {
				getItem: key => Cookies.get(key),
				setItem: (key, value) =>
					Cookies.set(key, value, { expires: 365, secure: true }),
				removeItem: key => Cookies.remove(key),
			},
		}),
	],
	state: {
		showType: 'all',
		items: [],
	},
	mutations: {
		setItem(state, item) {
			state.items.push(item);
		},
		updateItem(state, { index, item }) {
			state.items[index] = item;
		},
		deleteItem(state, index) {
			state.items.splice(index, 1);
		},
		clearItem(state) {
			state.items = [];
		},
		setShowType(state, type) {
			state.showType = type;
		},
	},
	actions: {},
	getters: {
		getItems(state) {
			if (state.showType == 'all') return state.items;
			return state.items.filter(o => o.done == false);
		},
		getActiveItems(state) {
			return state.items.filter(o => o.done == false);
		},
		getShowType(state) {
			return state.showType;
		},
	},
});
