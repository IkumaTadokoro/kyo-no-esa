<script setup lang="ts">
import { Configuration, EsaApi } from "../client"
import { ref } from 'vue'

const diaryUrl = ref({});

const getToday = () => {
  const date = new Date()
  const year = date.getFullYear();
  const month = ('00' + (date.getMonth() + 1)).slice(-2);
  const day = ('00' + date.getDate()).slice(-2);

  return (year + '/' + month + '/' + day);
}

(async () => {
  const { accessToken, teamName, diaryCategory, templateId } = await chrome.storage.sync.get([
    'accessToken',
    'teamName',
    'diaryCategory',
    'templateId'
  ])
  const esaApi = new EsaApi(new Configuration({ accessToken }))
  const q = `in:"${diaryCategory}" category:"${getToday()}"`
  const { data } = await esaApi.getPosts({ teamName, q } )
  const url = data.posts.length ? data.posts[0].url : `https://${teamName}.esa.io/posts/new?template_post_id=${templateId}`
  diaryUrl.value = url
})();
</script>

<template>
    <a class="text-center" :href="diaryUrl">今日の<br>esa</a>
</template>

<style scoped>
a {
  display: block;
  width: 80px;
  height: 68px;
  padding: 8px 0 8px 0;
  font-size: 16px;
  text-decoration: none;
  color: rgba(0,0,0,0.3);
}

a:hover {
  color: white;
  text-decoration: none;
}
</style>
