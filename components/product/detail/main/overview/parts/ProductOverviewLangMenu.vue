<template>
	<v-menu class="product-overview-lang-menu" offset-y>
		<template v-slot:activator="{ on, attrs }">
			<a class="product-overview-lang-menu__activator" v-bind="attrs" v-on="on">
				Показать все {{ langArray.length }} языка
			</a>
		</template>
		<v-list>
			<v-list-item>
				{{ langArray.join(', ') }}
			</v-list-item>
		</v-list>
	</v-menu>
</template>

<script>
export default {
	name: 'ProductOverviewLangMenu',

	props: {
		langArray: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped lang="stylus"></style>
