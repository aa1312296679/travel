<template>
  <div id="app">
    <!--
      将每次的显示的路由组件的所有数据存入本地缓存，
      避免页面组件重复发送ajax请求
    -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
