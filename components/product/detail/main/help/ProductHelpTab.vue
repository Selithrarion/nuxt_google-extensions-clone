<template>
	<div class="product-help-tab text-center">
		Сообщить об ошибках в работе приложения, задать вопрос или поделиться идеями
		можно на <a :href="'//' + productData.website"> сайте разработчика</a>.
	</div>
</template>

<script>
export default {
	name: 'ProductHelpTab',

	props: {
		productData: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped></style>
