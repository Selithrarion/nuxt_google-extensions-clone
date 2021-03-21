<template>
	<div class="product-detail-main-info">
		<v-list-item v-if="productData">
			<v-list-item-avatar
				class="product-detail-main-info__img d-none d-sm-flex pt-3 mb-auto"
				size="60"
				tile
			>
				<v-img :src="productData.imgURL" :alt="productData.title"></v-img>
			</v-list-item-avatar>

			<v-list-item-content>
				<v-list-item-title class="product-detail-main-info__title pb-3">
					{{ productData.title }}
				</v-list-item-title>
				<v-list-item-subtitle class="pb-1 pb-md-3">
					<span>Источник:</span>
					<a :href="'//' + productData.website">
						{{ productData.website }}
					</a>
				</v-list-item-subtitle>

				<div class="product-detail-main-info__details">
					<span class="d-none d-md-inline-flex">
						<BaseProductRating
							:rating="productData.rating"
							:quantity="productData.ratingQuantity"
						/>
						<span class="divider" />
					</span>

					<a class="product-detail-main-info__product-type">
						{{ productData.type }}
					</a>

					<span class="d-none d-md-inline-flex">
						<span class="divider" />
						<span class="product-detail-main-info__users">
							<v-icon>mdi-account</v-icon>
							<span>
								Пользователей: {{ roundBigNumber(productData.downloads) }}
							</span>
						</span>
					</span>
				</div>
			</v-list-item-content>

			<v-list-item-action class="product-detail-main-info__actions">
				<v-btn color="primary" outlined> Установить </v-btn>
			</v-list-item-action>
		</v-list-item>
		<LayoutNothingFound v-else text="Что-то случилось и здесь пусто." />
	</div>
</template>

<script>
import roundBigNumberMixin from '@/mixins/format/roundBigNumberMixin';

export default {
	name: 'ProductDetailIntroductionInfo',

	mixins: [roundBigNumberMixin],

	props: {
		productData: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped lang="stylus">
.product-detail-main-info {
  a {
    text-decoration: none
    font-weight: 500
  }
  &__title {
    font-size: 1.5rem
  }

  &__details {
    display: flex;
    align-items: center
  }

  &__users {
    span {
      font-size: 13px
      opacity: 0.5
    }
  }
  &__product-type {
    font-size: 13px
    letter-spacing: 1px
  }
  &__actions {
    margin-bottom: auto
  }
}
.divider {
  border-right: 1px solid rgba(69, 69, 69, 0.5)
  margin: 0 8px 0 8px
}
</style>
