<template>
	<div
		class="min-h-screen bg-gray-50 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12"
	>
		<img
			src="@/assets/img/beams.jpg"
			alt=""
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
			width="1308"
		/>
		<div
			class="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10"
		>
			<div class="max-w-md mx-auto">
				<img src="@/assets/logo.png" class="h-6" alt="Tailwind Play" />
				<div class="divide-y divide-gray-300/50">
					<div
						class="py-8 text-base leading-7 space-y-6 text-gray-600"
					>
						<div
							id="js-user-input"
							class="flex items-center justify-between relative"
						>
							<input
								placeholder="Add new todo..."
								type="text"
								id="js-input-field"
								class="p-4 pr-20 border-t-2 text-blue-600 bg-blue-50 border-blue-500 rounded w-full shadow-inner outline-none placeholder-blue-400"
							/><button
								id="js-add-item"
								class="text-blue-500 hover:text-blue-800 font-semibold py-2 px-4 absolute right-0 mr-2 focus:outline-none"
							>
								Add
							</button>
						</div>
						<ul class="space-y-4">
							<li class="flex items-center">
								<svg
									class="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<circle cx="12" cy="12" r="11" />
									<path
										d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
										fill="none"
									/>
								</svg>
								<p class="ml-4">
									Customizing your
									<code
										class="text-sm font-bold text-gray-900"
										>tailwind.config.js</code
									>
									file
								</p>
							</li>
							<li class="flex items-center">
								<svg
									class="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<circle cx="12" cy="12" r="11" />
									<path
										d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
										fill="none"
									/>
								</svg>
								<p class="ml-4">
									Extracting classes with
									<code
										class="text-sm font-bold text-gray-900"
										>@apply</code
									>
								</p>
							</li>
							<li class="flex items-center">
								<svg
									class="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<circle cx="12" cy="12" r="11" />
									<path
										d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
										fill="none"
									/>
								</svg>
								<p class="ml-4">
									Code completion with instant preview
								</p>
							</li>
						</ul>
					</div>
					<div
						class="flex text-base leading-7 font-semibold justify-between"
					>
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
				</div>
			</div>
		</div>
	</div>
</template>
