<template>
	<span class="base-product-rating">
		<v-rating
			class="base-product-rating__rating"
			color="gray"
			:value="rating"
			:readonly="readonly"
			:color="color"
			small
		/>
		<span v-if="quantity" class="base-product-rating__quantity">
			{{ quantity }}
		</span>
	</span>
</template>

<script>
export default {
	name: 'BaseProductRating',

	props: {
		rating: {
			type: Number,
			required: true,
		},
		quantity: {
			type: Number,
			required: false,
		},
		readonly: {
			type: Boolean,
			required: false,
			default: false,
		},
		color: {
			type: String,
			required: false,
			default: 'gray',
		},
	},
};
</script>

<style scoped lang="stylus">
.base-product-rating {
  &__rating {
    display: inline-flex
    ::v-deep button {
      padding: 2px !important;
    }
  }
  &__quantity {
    font-size: 13px
    opacity: 0.6
  }
}
</style>
