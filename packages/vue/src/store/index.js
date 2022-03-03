import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
// import Cookies from 'js-cookie';
import idb from '@/api/indexedDb';

Vue.use(Vuex);

export default new Vuex.Store({
	// plugins: [
	// 	createPersistedState({
	// 		storage: {
	// 			getItem: key => Cookies.get(key),
	// 			setItem: (key, value) =>
	// 				Cookies.set(key, value, { expires: 365, secure: true }),
	// 			removeItem: key => Cookies.remove(key),
	// 		},
	// 	}),
	// ],
	state: {
		currentDate: '',
		showType: 'all',
		items: [],
	},
	mutations: {
		setCurrentDate(state, item) {
			state.currentDate = item;
		},
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
	actions: {
		async deleteTodo({ commit }, todo) {
			await idb.deleteTodo(todo);
		},
		async getTodo({ commit, state }, date) {
			let todo = idb.getTodo(date).then(result => {
				state.currentDate = date;
				state.items = [];
				result.forEach(t => {
					commit('setItem', t);
				});
			});
		},
		async saveTodo({ commit }, todo) {
			await idb.saveTodo(todo).then(() => {
				commit('setItem', todo);
			});
		},
	},
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
		getCurrentDate(state) {
			return state.currentDate;
		},
	},
});
