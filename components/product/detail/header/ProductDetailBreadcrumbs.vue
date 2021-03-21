<template>
	<v-breadcrumbs :items="breadcrumbItems">
		<template v-slot:divider>
			<v-icon small>mdi-chevron-right</v-icon>
		</template>

		<template v-slot:item="{ item }">
			<v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
				{{ item.title }}
			</v-breadcrumbs-item>
		</template>
	</v-breadcrumbs>
</template>
<script>
export default {
	name: 'ProductDetailBreadcrumbs',

	props: {
		breadcrumbItems: {
			type: Array,
			required: true,
		},
	},
};
</script>
