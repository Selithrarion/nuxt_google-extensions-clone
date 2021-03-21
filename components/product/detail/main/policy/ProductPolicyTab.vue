<template>
	<div class="product-policy-tab text-center">
		<a v-if="productData.policyURL" :href='"//" + productData.policyURL'>
			{{ productData.policyURL }}
		</a>
		<div v-else>
			Издатель не предоставил никакой информации о сборе и использовании ваших
			данных
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductPolicyTab',

	props: {
		productData: {
			type: Object,
			required: true,
		},
	},
};
</script>
