<template>
	<v-menu offset-y>
		<template v-slot:activator="{ on, attrs }">
			<span class="layout-account__account" v-bind="attrs" v-on="on">
				{{ currentUserEmail }}
			</span>
		</template>
		<v-list>
			<v-list-item-group>
				<v-list-item v-for="email of emailsToChoose" :key="email">
					<v-list-item-title>{{ email }}</v-list-item-title>
				</v-list-item>
				<v-list-item>
					<v-list-item-title
						>Войти с помощью другого аккаунта</v-list-item-title
					>
				</v-list-item>
				<v-list-item>
					<v-list-item-title>Выйти</v-list-item-title>
				</v-list-item>
			</v-list-item-group>
		</v-list>
	</v-menu>
</template>

<script>
export default {
	name: 'LayoutAccount',

	data() {
		return {
			currentUserEmail: 'currentEmail@google.com',
			allUserSavedEmails: [
				'currentEmail@google.com',
				'testemail@google.com',
				'anothertestemail@google.com',
				'email@yandex.ru',
			],
		};
	},
	computed: {
		emailsToChoose() {
			const emails = this.allUserSavedEmails;
			const currentEmail = this.currentUserEmail;
			return emails.filter((email) => email !== currentEmail);
		},
	},
};
</script>

<style scoped lang="stylus">
.layout-account {
  &__account {
    &:hover {
      color #1976d2
    }
  }
}
</style>
