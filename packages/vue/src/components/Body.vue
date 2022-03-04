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
		<ul class="space-y-1 svg-checkbox">
			<li
				class="flex items-center round"
				v-for="(item, index) in todoItems"
				:key="index"
			>
				<input
					class="add_input"
					type="checkbox"
					:id="`checkbox${item.no}`"
					v-model="item.done"
					@change="updateItem(item)"
				/>
				<label :for="`checkbox${item.no}`"></label>
				<p
					class="ml-4 pl-1 pt-1 pb-1 pr-8 w-full text-left"
					:class="{ done_text: item.done }"
				>
					<template v-if="!item.editable">
						<div class="pl-1" @click="editItem(index)">
							{{ item.msg }}
						</div>
					</template>
					<template v-else>
						<input
							class="item_input pl-1"
							type="text"
							v-model="item.msg"
							autofocus
							@blur="updateItem(item)"
							@keyup.enter="updateItem(item)"
						/>
					</template>
				</p>
				<button
					id="js-filter-clear"
					class="absolute right-0 text-xs mr-2 text-red-500 focus:outline-none hover:underline"
					@click="delItem(item, index)"
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
	created() {
		//this.$store.dispatch('getTodo', this.$store.getters.getCurrentDate);
	},
	computed: {
		todoItems() {
			return this.$store.getters.getItems;
		},
	},
	methods: {
		addItem() {
			if (this.msg == '') return;
			const date = this.$store.getters.getCurrentDate;
			this.$store.dispatch('saveTodo', {
				no: `${date}-${this.makeRandom()}`,
				editable: false,
				done: false,
				msg: this.msg,
				date: date,
			});
			this.msg = '';
		},
		makeRandom() {
			return Math.floor(Math.random() * 1001);
		},
		delItem(todo, index) {
			this.$store.dispatch('deleteTodo', { todo, index });
		},
		updateItem(todo, index) {
			todo.editable = false;
			this.$store.dispatch('updateTodo', { todo, index });
		},
		editItem(index) {
			if (this.todoItems[index].done) return;
			this.todoItems[index].editable = true;
		},
	},
};
</script>

<style></style>
