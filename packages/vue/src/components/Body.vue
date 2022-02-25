<template>
	<div class="py-8 text-base leading-7 space-y-6 text-gray-600">
		<div
			id="js-user-input"
			class="flex items-center justify-between relative add_wrap"
		>
			<input
				placeholder="Add new todo..."
				type="text"
				class="p-3 pl-5 pr-20 border-blue-500 rounded w-full shadow-inner outline-none placeholder-blue-400"
				style="background-color: #e0f2fe; color: #0ea5e9"
				v-model="msg"
				@keyup.enter="addItem"
			/><button
				id="js-add-item"
				class="py-2 pl-4 pr-4 absolute right-0 focus:outline-none"
				@click="addItem"
			>
				Add
			</button>
		</div>
		<ul class="space-y-4 svg-checkbox">
			<li
				class="flex items-center round"
				v-for="(item, index) in todoItems"
				:key="index"
			>
				<input
					type="checkbox"
					:id="`checkbox${item.id}`"
					v-model="item.done"
					@change="updateItem(index)"
				/>
				<label :for="`checkbox${item.id}`"></label>
				<p class="ml-4 pl-2 pr-8" :class="{ line_through: item.done }">
					{{ item.msg }}
				</p>
				<button
					id="js-filter-clear"
					class="absolute right-0 text-xs mr-2 text-red-500 focus:outline-none hover:underline"
					@click="delItem(index)"
				>
					Del
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: '',
		};
	},
	computed: {
		todoItems() {
			return this.$store.getters.getItems;
		},
	},
	methods: {
		addItem() {
			if (this.msg == '') return;
			this.$store.commit('setItem', {
				id: this.makeRandom(),
				done: false,
				msg: this.msg,
			});
			this.msg = '';
		},
		makeRandom() {
			return Math.floor(Math.random() * 1001);
		},
		delItem(index) {
			this.$store.commit('deleteItem', index);
		},
		updateItem(index) {
			const item = this.todoItems[index];
			this.$store.commit('updateItem', { index, item });
		},
	},
};
</script>

<style></style>
