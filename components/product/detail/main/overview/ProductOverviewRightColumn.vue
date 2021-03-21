<template>
	<div class="product-overview-right-column pa-0 pa-sm-6 pt-6 pt-sm-0">
		<div class="product-overview-right-column__title text-center text-sm-left">
			Дополнительная информация
		</div>

		<div
			class="product-overview-right-column__info-actions text-center text-sm-left pt-2"
		>
			<v-btn
				v-if="productData.website"
				:href="'//' + productData.website"
				target="_blank"
				color="primary"
				small
				text
			>
				<v-icon small left>mdi-home</v-icon>
				<span>Сайт</span>
			</v-btn>
			<v-btn color="error" small text>
				<v-icon small left>mdi-close-circle</v-icon>
				<span>Сообщить о нарушении</span>
			</v-btn>
		</div>

		<div class="product-overview-right-column__info-content pt-2">
			<div
				v-if="productData.version"
				class="product-overview-right-column__info-item product-overview-right-column__version"
			>
				<div class="product-overview-right-column__info-item-title">Версия</div>
				<div class="product-overview-right-column__info-item-content">
					{{ productData.version }}
				</div>
			</div>

			<div
				class="product-overview-right-column__info-item product-overview-right-column__updated"
			>
				<div class="product-overview-right-column__info-item-title">
					Обновлено
				</div>
				<div class="product-overview-right-column__info-item-content">
					{{ formatDate(productData.updatedAt) }}
				</div>
			</div>

			<div
				class="product-overview-right-column__info-item product-overview-right-column__size"
			>
				<div class="product-overview-right-column__info-item-title">Размер</div>
				<div class="product-overview-right-column__info-item-content">
					{{ productData.size }}
				</div>
			</div>

			<div
				class="product-overview-right-column__info-item product-overview-right-column__lang"
			>
				<div class="product-overview-right-column__info-item-title">Язык</div>
				<div class="product-overview-right-column__info-item-content">
					<div v-if="isOnlyOneAvailableLang">
						{{ productData.lang[0] }}
					</div>
					<div v-else>
						<ProductOverviewLangMenu :lang-array="productData.lang" />
					</div>
				</div>
			</div>

			<div
				class="product-overview-right-column__info-item product-overview-right-column__author"
			>
				<div class="product-overview-right-column__info-item-title">
					Разработчик
				</div>
				<div class="product-overview-right-column__info-item-content">
					<div>
						<a :href="productData.author.contactURL" target="_blank">
							Связь с разработчиком
						</a>
					</div>
					<div>
						<a :href="productData.author.policyURL" target="_blank">
							Политика конфиденциальности
						</a>
					</div>
					<div class="product-overview-right-column__info-address">
						<div v-if="isAuthorCountry">
							{{ productData.author.address.country }}
						</div>
						<div v-if="isAuthorCity">
							{{ productData.author.address.city }}
						</div>
						<div v-if="isAuthorStreenAndHouse">
							{{ productData.author.address.street }}
							{{ productData.author.address.house }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import formatDateMixin from '@/mixins/format/formatDateMixin';

export default {
	name: 'ProductOverviewRightColumn',

	mixins: [formatDateMixin],

	props: {
		productData: {
			type: Object,
			required: true,
		},
	},

	methods: {
		isOnlyOneAvailableLang() {
			return this.productData.lang.length === 1;
		},

		isAuthorCountry() {
			return this.productData.author.address.country;
		},
		isAuthorCity() {
			return this.productData.author.address.city;
		},
		isAuthorStreenAndHouse() {
			return (
				this.productData.author.address.street &&
				this.productData.author.address.house
			);
		},
	},
};
</script>

<style scoped lang="stylus">
.product-overview-right-column {
  &__title {
    font-size: 1.2rem
    font-weight: 500
    line-height: 1.5rem !important;
  }
  &__info {
    border-left: 1px solid rgba(112, 112, 112, 0.5)
    &-item {
      padding-bottom: 16px
      &-title {
        font-size: 0.9rem
        font-weight: 500;
      }
      &-content {
        opacity: 0.7
        font-size: 0.85rem
      }
    }
    &-address {
      font-size: 0.8rem
    }
  }
}
</style>
