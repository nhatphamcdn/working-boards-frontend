export default ($axios) => ({
  signIn(payload) {
    return $axios.post(`auth/sign-in`, payload);
  },

  signUp(payload) {
    return $axios.post(`auth/sign-up`, payload);
  }
})
