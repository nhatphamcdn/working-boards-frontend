<template src="./template.html"></template>

<script>
export default {
  layout: "auth",
  name: "Register",
  methods: {},
  mounted() {
    // Get to layout and set heading
    this.$parent.$parent.setExternalHeading(
      "Sign Up for WorkingBoards Personal"
    );
  },
};
</script>

<style lang="scss" scoped src="./style.scss"></style>