<template>
	<v-dialog v-model="dialog" width="500">
		<template v-slot:activator="{ on, attrs }">
			<div v-bind="attrs" v-on="on">
				<slot></slot>
			</div>
		</template>

		<v-card>
			<v-card-title class="pb-1"> Ответить </v-card-title>

			<v-form ref="form" @submit.prevent="reply">
				<v-card-text class="pt-0">
					<v-textarea
						v-model="text"
						rows="2"
						label="Ваш ответ"
						:rules="replyRules"
						auto-grow
						autofocus
					/>
				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn type="submit" color="primary" text> Ответить </v-btn>
				</v-card-actions>
			</v-form>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'ProductReviewsTabReplyDialog',

	props: {
		id: {
			type: [Number, String],
			required: true,
		},
	},

	data() {
		return {
			dialog: false,
			text: '',
			replyRules: [
				(v) => !!v || 'Ответ не может быть пустым',
				(v) => v.length <= 400 || 'Слишком длинный ответ',
			],
		};
	},

	methods: {
		...mapActions({ sendReviewReplyStore: 'product/review/sendReviewReply' }),

		reply() {
			if (this.text.trim() === '') {
				this.closeDialog();
				return;
			}

			const payload = {
				id: this.id,
				text: this.text,
			};

			this.sendReviewReplyStore(payload);
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
