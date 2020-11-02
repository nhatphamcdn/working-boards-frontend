<template src="./template.html"></template>

<script>
export default {
  methods: {
    async getMe() {
      const mess = await this.$api.user.me();
      console.log(mess);
    },
  },
};
</script>

<style lang="scss" scoped src="./style.scss"></style>