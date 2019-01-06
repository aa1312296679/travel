let defaultCity = '上海'
try {
  // 如果H5本地存储的公用数据属性已存在则从H5本地存储获取
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default {
  city: defaultCity
}
