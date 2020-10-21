export default ($axios) => ({
  me() {
    return $axios.$get(`users/me`);
  },
})
