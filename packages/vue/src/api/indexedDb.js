const DB_NAME = 'todoDb';
const DB_VERSION = 1;
const STORE_NAME = 'todo';
let DB;

export default {
	async getDb() {
		return new Promise((resolve, reject) => {
			if (DB) {
				return resolve(DB);
			}
			console.log('OPENING DB', DB);
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);

			request.onerror = e => {
				console.log('Error opening db', e);
				reject('Error');
			};

			request.onsuccess = e => {
				DB = e.target.result;
				resolve(DB);
			};

			request.onupgradeneeded = e => {
				console.log('onupgradeneeded');
				let db = e.target.result;
				let todos = db.createObjectStore(STORE_NAME, {
					autoIncrement: true,
					keyPath: 'id',
				});

				//인덱스 생성
				todos.createIndex('no_idx', 'no');
				todos.createIndex('date_idx', 'date');
			};
		});
	},
	async getTodo(date) {
		let db = await this.getDb();

		return new Promise(resolve => {
			let trans = db.transaction([STORE_NAME], 'readonly');
			trans.oncomplete = () => {
				resolve(todo);
			};

			const store = trans.objectStore(STORE_NAME);
			const dateIndex = store.index('date_idx');
			let todo = [];
			dateIndex.openCursor(date).onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
					todo.push(cursor.value);
					cursor.continue();
				}
			};
		});
	},
	async saveTodo(todo) {
		const db = await this.getDb();

		return new Promise(resolve => {
			const trans = db.transaction([STORE_NAME], 'readwrite');
			trans.oncomplete = () => {
				resolve(key);
			};

			let key;
			const store = trans.objectStore(STORE_NAME);
			store.put(todo).onsuccess = e => {
				key = e.target.result;
			};
		});
	},
	async updateTodo(todo) {
		const db = await this.getDb();

		return new Promise(resolve => {
			const trans = db.transaction([STORE_NAME], 'readwrite');
			trans.oncomplete = () => {
				resolve();
			};
			const store = trans.objectStore(STORE_NAME);
			store.put(todo);
		});
	},
	async deleteTodo(id) {
		const db = await this.getDb();

		return new Promise(resolve => {
			const trans = db.transaction([STORE_NAME], 'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			const store = trans.objectStore(STORE_NAME);
			store.delete(id);
		});
	},
	async clearTodo(item) {
		const db = await this.getDb();

		return new Promise(resolve => {
			const trans = db.transaction([STORE_NAME], 'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			const store = trans.objectStore(STORE_NAME);
			item.map(o => o.id).forEach(id => {
				store.delete(id);
			});
		});
	},
};
