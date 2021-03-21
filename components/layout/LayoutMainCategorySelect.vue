<template>
	<v-radio-group v-model="category" :disabled="isDisabled" mandatory>
		<v-radio
			label="Расширения"
			value="extensions"
			@change="pushToExtensionPage"
		/>

		<v-radio label="Темы" value="themes" @change="pushToThemesPage" />
	</v-radio-group>
</template>

<script>
import getRouteNameMixin from '../../mixins/getRouteNameMixin';

export default {
	name: 'LayoutMainCategorySelect',

	mixins: [getRouteNameMixin],

	props: {
		isDisabled: {
			type: Boolean,
			required: true,
		},
	},

	data() {
		return {
			category: 'extensions',
		};
	},

	methods: {
		pushToExtensionPage() {
			this.$router.push('/extensions');
		},
		pushToThemesPage() {
			this.$router.push('/themes');
		},
	},

	created() {
		const name = this.getRouteName;
		switch (name) {
			case '/extensions':
				this.category = 'extensions';
				break;
			case 'themes':
				this.category = 'themes';
				break;
		}
	},
};
</script>

<style scoped></style>
