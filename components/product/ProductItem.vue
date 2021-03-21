<template>
	<v-col cols="12" sm="6" md="3">
		<nuxt-link :to="detailsPath" class="text-decoration-none">
			<v-card class="card" elevation="1">
				<v-img
					:src="itemData.imgURL"
					:alt="itemData.title"
					height="136"
				/>
				<v-card-title class="text-body-2 font-weight-medium pb-2">
					{{ itemData.title }}
				</v-card-title>
				<v-card-text>
					<span>
						<span>{{ itemData.rating }}</span>
						<v-icon small class="pb-1">mdi-star</v-icon>
					</span>
					<span class="product-item__rating-quantity text--disabled">
						{{ itemData.ratingQuantity }}
					</span>
				</v-card-text>
			</v-card>
		</nuxt-link>
	</v-col>
</template>

<script>
export default {
	name: 'ProductItem',

	props: {
		itemData: {
			type: Object,
			required: true,
		},
	},

	computed: {
		detailsPath() {
			return '/detail/' + this.itemData.id;
		},
	},
};
</script>

<style scoped lang="stylus">
.product-item {
  &__rating-quantity {
    font-size: 0.8rem
  }
}
</style>
