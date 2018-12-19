<template>
    <div class="city">
      <city-header></city-header>
      <city-search></city-search>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/search'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>
