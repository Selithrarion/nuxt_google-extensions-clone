<template>
	<div class="product-overview-left-column">
		<div class="product-overview-left-column__title text-center text-sm-left">
			Обзор
		</div>
		<div class="product-overview-left-column__description pt-4">
			{{ description }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductOverviewLeftColumn',

	props: {
		description: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped lang="stylus">
.product-overview-left-column {
  &__title {
    font-size: 1.2rem
    font-weight: 500
    line-height: 1.5rem !important;
  }
}
</style>
