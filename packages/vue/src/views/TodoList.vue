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
			<div class="wrapper_width mx-auto">
				<LogoComponent></LogoComponent>
				<div class="divide-y divide-gray-300/50">
					<BodyComponent></BodyComponent>
					<FooterComponent></FooterComponent>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import LogoComponent from '@/components/Logo';
import BodyComponent from '@/components/Body';
import FooterComponent from '@/components/Footer';
export default {
	components: {
		LogoComponent,
		BodyComponent,
		FooterComponent,
	},
};
</script>
<style scoped>
.wrapper_width {
	width: 300px;
}
</style>
