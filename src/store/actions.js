export default {
  changeCity (state, city) {
    state.commit('changeCity', city)
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
