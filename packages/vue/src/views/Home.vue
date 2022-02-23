<template>
	<main
		class="relative px-6 pt-10 pb-8 bg-gray-800 shadow-xl ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10"
	>
		<h1
			class="uppercase text-2xl block font-bold py-6 text-gray-400 tracking-widest text-center"
		>
			Tailwindcss Todos
		</h1>
		<div
			id="js-user-input"
			class="flex items-center justify-between relative"
		></div>
		<ul id="js-list" class="m-0 my-4 p-0 list-none w-full"></ul>
		<div class="flex py-4 border-t border-gray-900 justify-between">
			<div>
				<button
					id="js-filter-all"
					class="text-xs mr-3 font-bold hover:underline text-gray-500 text-green-500 focus:outline-none"
				>
					All
				</button>
				<button
					id="js-filter-active"
					class="text-xs mr-3 hover:underline text-gray-500 focus:outline-none"
				>
					Active
				</button>
			</div>
			<div>
				<button
					id="js-filter-clear"
					class="text-xs mr-3 text-red-500 focus:outline-none hover:underline"
				>
					Clear
				</button>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Home',
};
</script>
