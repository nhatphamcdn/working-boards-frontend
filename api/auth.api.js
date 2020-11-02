export default ($axios, resource) => ({
  signIn(payload) {
    return $axios.post(resource.auth.signin, payload);
  },

  signUp(payload) {
    return $axios.post(resource.auth.signup, payload);
  }
})
