<template>
	<v-list-item class="product-reviews-tab-item px-0 px-md-2">
		<v-list-item-avatar class="product-reviews-tab-item__avatar mb-auto">
			<v-img :src="review.author.avatarURL" />
		</v-list-item-avatar>

		<v-list-item-content>
			<v-list-item-title>
				<span class="product-reviews-tab-item__username primary--text">
					{{ review.author.name }}
				</span>
				<span class="product-reviews-tab-item__last-update px-1 px-sm-2">
					Последнее изменение: {{ formatDate(review.updatedAt) }}
				</span>
				<BaseProductRating :rating="review.rating" readonly />
			</v-list-item-title>

			<span class="product-reviews-tab-item__text py-3">
				{{ review.text }}
			</span>

			<div class="product-reviews-tab-item__actions">
				<span class="product-reviews-tab-item__poll d-none d-md-flex">
					<span>Был ли этот отзыв полезен?</span>
					<v-radio-group
						v-model="isUsefulValue"
						class="product-reviews-tab-item__radio-group px-4"
						dense
						hide-details
						row
						@change="setReviewIsUseful"
					>
						<v-radio
							class="product-reviews-tab-item__radio"
							label="Да"
							value="yes"
							:ripple="false"
						/>
						<v-radio
							class="product-reviews-tab-item__radio pl-3"
							label="Нет"
							value="no"
							:ripple="false"
						/>
					</v-radio-group>
				</span>

				<span class="d-flex ml-auto ml-md-0">
					<ProductReviewsTabReplyDialog :id="review.id">
						<v-btn color="primary" x-small text>Ответить</v-btn>
					</ProductReviewsTabReplyDialog>

					<v-btn color="primary" x-small text @click="complainReview">
						Пожаловаться
					</v-btn>
				</span>
			</div>
		</v-list-item-content>
	</v-list-item>
</template>

<script>
import { mapActions } from 'vuex';
import formatDateMixin from '@/mixins/format/formatDateMixin';

export default {
	name: 'ProductReviewsTabItem',

	mixins: [formatDateMixin],

	props: {
		review: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			isUsefulValue: null,
		};
	},

	methods: {
		...mapActions({
			setReviewIsUsefulStore: 'product/review/setReviewIsUseful',
			complainReviewStore: 'product/review/complainReview',
		}),

		setReviewIsUseful() {
			const payload = { id: this.review.id, value: this.isUsefulValue };
			this.setReviewIsUsefulStore(payload);
		},
		complainReview() {
			this.complainReviewStore(this.review.id);
		},
	},
};
</script>

<style lang="stylus" scoped>
.product-reviews-tab-item {
  &__last-update {
    opacity: 0.7
    font-size: 0.9rem
  }

  &__actions {
    display: flex
    align-items: center
    opacity: 0.8
    font-size: 0.8rem
  }
  &__poll {
    display: flex
    align-items: center
  }

  &__radio-group {
    margin: 0 !important
    padding-top: 0 !important
    display: inline-flex !important
    flex-flow: column
  }
  &__radio {
    margin: 0 !important
  }
}
</style>
