<template>
  <div class="container">
    <div>
      <button @click="getMe">CLick get Me</button>
    </div>
  </div>
</template>

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