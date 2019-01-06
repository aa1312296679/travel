export default {
  changeCity (state, city) {
    state.city = city
    try {
      // 将公用数据存储至H5本地存储
      localStorage.city = city
    } catch (e) {}
  }
}
