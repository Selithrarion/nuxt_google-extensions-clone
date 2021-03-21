<template>
	<div v-if="similarProducts" class="product-similar pb-2">
		<div v-if="type === 'built-in'">
			<div class="text-h6 text-center pb-2 font-weight-regular">Похожие</div>
			<v-carousel
				class="product-similar"
				height="200"
				cycle
				hide-delimiter-background
				hide-delimiters
				show-arrows-on-hover
			>
				<v-carousel-item v-for="product in similarProducts" :key="product.id">
					<ProductSimilarBuiltinItem :product-data="product" />
				</v-carousel-item>
			</v-carousel>
		</div>

		<v-row v-else-if="type === 'tab'">
			<v-col
				cols="12"
				sm="6"
				md="3"
				v-for="product in similarProducts"
				:key="product.id"
			>
				<ProductSimilarTabItem :product-data="product" />
			</v-col>
		</v-row>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import errorMixin from '@/mixins/errorMixin';

export default {
	name: 'ProductSimilar',

	mixins: [errorMixin],

	props: {
		productData: {
			type: Object,
			required: true,
		},
		type: {
			type: String,
			required: true,
			validator(value) {
				return ['built-in', 'tab'].indexOf(value) !== -1;
			},
		},
	},

	async fetch() {
		try {
			const id = this.productData.id;
			this.similarProducts = await this.getSimilarProductsById(id);
		} catch (e) {
			this.setIsErrorStatusStore();
			console.error(e);
		}
	},

	data() {
		return {
			similarProducts: null,
		};
	},

	methods: {
		...mapActions({
			getSimilarProductsById: 'product/getSimilarProductsById',
		}),
	},
};
</script>

<style scoped></style>
