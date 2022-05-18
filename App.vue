<script setup lang="ts">
// TODO: esaのAPIで日報情報を取得する
// TODO: esaのAPIで日報情報が取得できなければ、日報を作成して、ページに遷移する。
</script>

<template>
  <li class="navbar-side_item">
    <a class="navbar-side_link" href="/posts">
      今日のesa
    </a>
  </li>
</template>

<style scoped>
li {
  background-color: #42b983;
  width: 80px;
  height: 80px;
}

a {
  text-decoration: none;
  color: white;
}
</style>
