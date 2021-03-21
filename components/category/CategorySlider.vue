<template>
	<v-carousel
		v-model="carousel"
		height="300"
		cycle
		hide-delimiter-background
		hide-delimiters
		show-arrows-on-hover
	>
		<v-carousel-item
			v-for="item in carouselData"
			:key="item.id"
			:src="item.imgURL"
			:to="'/details/' + item.id"
		>
		</v-carousel-item>
	</v-carousel>
</template>

<script>
export default {
	name: 'CategorySlider',

	props: {
		carouselData: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			carousel: 0,
			colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
		};
	},
};
</script>

<style scoped></style>
