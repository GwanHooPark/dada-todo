<template>
	<div class="header relative flex items-center">
		<img
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACrUlEQVRoge2Zz0sUYRyHn3d2I5WMoiDINTNj66Ai2T+geBNEPBhG/sB0JKOWLlHWYU9B/0DQsVsdQjxkdAj/iA6aQqIGUVbSKRx3308HW1lrRlvbdR2Y57DM7Pf9vvt5lnnnBwMRERER5cSUO4AvD97XIDMGugpUgBnjUfKV39D4PkfbmYm5NnDGkbpBednsE6DOr6X8Anfnqjnk9CHdBJpBPoPMmaD28gncn01iYsOAi3R8r9Psr0BaDpmFdqQUohP032twfwQmPpwCbwhv/gYBx/JeKa3AvdlWHMeFjX4wlaX4ieILpBcr8Lxe4A7QUvT5/6B4Ag8XGrAaxfNGgBNFm3cX/k8gtygtLtb2ALHixPp39iaQXjyGtz6IN58C6osbqTAKE8gtSm/9GpiqEmUqiN0Fbi0c5mi2C2tcDB2bXx6cW6hggbtzp4k7t8FeR+bkAcq8jWCBuJkBJfcxy06sBBWc4B69K0WSPbCClVvuEBERB5XAk+Olt2svJXqQ0O+HJOW2Bdr88N3X74bN2vb+rTHk1f6aT2irn49Y6y4N1r72yxl4FjLQWOi/USISMuZpUDFQwGYzbaDHwNeSxCqM2qDCrtfX89M6fCT+vQs5rrAdZTiEkMTyQMI3a0E3CE1vVlsd67iCa0JVoRPI0TK5dsxW2kFlbUqY+tAJbJGW03T5W7vAFepBxMIlkEfj9OcGZcyoYETafKQMlUCOszOLFZU/qnox5o5ES+gE8rk4udoK1pXoBypDJ5CjcerzqY2sGZLsDURd6AS2SMtJNn1pl1VK0IlkwiWQx7nnq0knlhmWxUUcD51AjgtTq9WZnxt9wtxEag6dQD4NLz612azGkboF8TyBpeWBxFm/ngMlkCPxbKUmFo+Nga5gTQxsaqk/4fuKKSIiIqK8/AJ7WVh8sCL86QAAAABJRU5ErkJggg=="
		/>
		<div class="logo">Dada <span>Todo</span></div>
		<v-date-picker v-model="selectDate">
			<template v-slot="{ togglePopover }">
				<div
					class="right-0 -top-3 flex absolute justify-end text-center cursor-pointer"
					@click="togglePopover()"
				>
					<div class="day" :class="{ holiday: isHoliday() }">
						{{ getDay }}
					</div>
					<div class="month">
						{{ getMonth }} <br />
						<span class="year">{{ getYear }}</span>
					</div>
				</div>
			</template>
		</v-date-picker>
	</div>
</template>

<script>
export default {
	data() {
		return {
			date: new Date(),
		};
	},
	created() {
		this.updateCurrentDate(new Date());
	},
	watch: {
		date() {
			console.log(this.date);
			this.updateCurrentDate(this.date);
		},
	},
	computed: {
		selectDate: {
			get() {
				return this.date;
			},
			set(value) {
				if (!value) return;
				this.date = value;
			},
		},
		getYear() {
			return this.$moment(this.date).format('YYYY');
		},
		getMonth() {
			return this.$moment(this.date).format('MMM');
		},
		getDay() {
			return this.$moment(this.date).format('D');
		},
	},
	methods: {
		isHoliday() {
			const day = this.$moment(this.date).day();
			return day == 0 || day == 6 ? true : false;
		},
		updateCurrentDate(date) {
			this.$store.dispatch(
				'getTodo',
				this.$moment(date).format('YYYYMMDD'),
			);
		},
	},
};
</script>
<style></style>
