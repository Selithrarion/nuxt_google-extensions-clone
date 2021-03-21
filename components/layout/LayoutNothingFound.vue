<template>
	<div class="text-center mt-12 text-h5">
		{{ text }}
	</div>
</template>

<script>
export default {
  name: 'LayoutNothingFound',

	props: {
		text: {
			type: String,
			default: 'Ничего не найдено',
		},
	},
};
</script>

<style scoped></style>
