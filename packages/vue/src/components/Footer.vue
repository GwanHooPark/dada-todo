<template>
	<div class="flex text-base leading-7 font-semibold justify-between">
		<div>
			<button
				id="js-filter-all"
				class="text-xs mr-3 hover:underline text-gray-500 focus:outline-none"
				:class="classObject('all')"
				@click="changeShowType('all')"
			>
				All
			</button>
			<button
				id="js-filter-active"
				class="text-xs mr-3 hover:underline text-gray-500 focus:outline-none"
				:class="classObject('active')"
				@click="changeShowType('active')"
			>
				Active
			</button>
		</div>
		<div>
			<button
				id="js-filter-clear"
				class="text-xs mr-1 text-red-500 focus:outline-none hover:underline"
				@click="clearItem"
			>
				Clear
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		classObject() {
			return type => {
				return {
					'font-bold': this.showTypeCheck(type),
					'text-green-500': this.showTypeCheck(type),
				};
			};
		},
	},
	methods: {
		showTypeCheck(type) {
			return this.$store.getters.getShowType == type;
		},
		changeShowType(type) {
			this.$store.commit('setShowType', type);
		},
		clearItem() {
			this.$store.commit('clearItem');
		},
	},
};
</script>

<style></style>
