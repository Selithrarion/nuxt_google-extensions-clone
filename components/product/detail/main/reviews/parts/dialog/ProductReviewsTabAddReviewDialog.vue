<template>
	<v-dialog v-model="dialog" width="500">
		<template v-slot:activator="{ on, attrs }">
			<div v-bind="attrs" v-on="on">
				<slot></slot>
			</div>
		</template>

		<v-card>
			<v-card-title class="pb-1"> Написать отзыв </v-card-title>

			<v-form ref="form" @submit.prevent="reply">
				<v-card-text class="pt-0">
					<v-textarea
						v-model="text"
						rows="2"
						label="Ваш отзыв"
						:rules="addRules"
						auto-grow
						autofocus
					/>
				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn type="submit" color="primary" text> Отправить </v-btn>
				</v-card-actions>
			</v-form>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'ProductReviewsTabAddReviewDialog',

	data() {
		return {
			dialog: false,
			text: '',
			addRules: [
				(v) => !!v || 'Отзыв не может быть пустым',
				(v) => v.length <= 400 || 'Слишком длинный отзыв',
			],
		};
	},

	methods: {
		...mapActions({ addReview: 'product/review/addReview' }),

		reply() {
			if (this.text.trim() === '') {
				this.closeDialog();
				return;
			}

			this.addReview(this.text);
			this.closeDialog();
		},
		closeDialog() {
			this.dialog = false;
			this.$refs.form.resetValidation();
			this.text = '';
		},
	},
};
</script>

<style scoped></style>
