<template>
  <div class="container mx-auto h-screen">
    <div class="max-w-3xl mx-auto my-8 rounded-xl py-16 px-12 bg-white shadow-sm">
      <h1 class="text-3xl font-bold leading-7 mb-8 text-center">今日のesa オプション設定</h1>
      <div class="flex flex-col mb-4">
        <label class="text-base leading-7 font-bold" for="accessToken">esaのAccessToken</label>
        <input class="w-full rounded-md border-2 border-gray-200 focus:border-amber-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" id="accessToken" placeholder="6ygGa430KiYG1feSK1x180...">
      </div>

      <div class="flex flex-col mb-4">
        <label class="text-base leading-7 font-bold" for="teamName">esaのチーム名</label>
        <input class="w-full rounded-md border-2 border-gray-200 focus:border-amber-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" id="teamName" placeholder="esa-team">
      </div>

      <div class="flex flex-col mb-4">
        <label class="text-base leading-7 font-bold" for="diaryCategory">日報のカテゴリ</label>
        <input class="w-full rounded-md border-2 border-gray-200 focus:border-amber-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" id="diaryCategory" placeholder="Diary">
      </div>

      <div class="flex flex-col mb-8">
        <!-- TODO: テンプレートはesaからapiで取得するようにする  -->
        <label class="text-base leading-7 font-bold" for="templateId">日報テンプレートの記事ID</label>
        <input class="w-full rounded-md border-2 border-gray-200 focus:border-amber-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" id="templateId" placeholder="79">
      </div>

      <div class="flex justify-end">
        <button id="save" class="text-white bg-amber-500 border-0 py-2 px-4 focus:outline-none rounded-full text-sm">保存</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useToast } from "vue-toastification";

const toast = useToast()

const save_options = () => {
  const accessToken = (document.getElementById('accessToken')! as HTMLInputElement).value
  const teamName = (document.getElementById('teamName')! as HTMLInputElement).value
  const diaryCategory = (document.getElementById('diaryCategory')! as HTMLInputElement).value
  const templateId = (document.getElementById('templateId')! as HTMLInputElement).value

  chrome.storage.sync.set({
    'accessToken': accessToken,
    'teamName': teamName,
    'diaryCategory': diaryCategory,
    'templateId': templateId
  }, () => {
    toast.success("保存しました", {
      timeout: 2000
    })
  })
}

const restore_options = () => {
  chrome.storage.sync.get([
    'accessToken',
    'teamName',
    'diaryCategory',
    'templateId'
  ], (items: {[key: string]: string}) => {
    if (items.accessToken) {
      (document.getElementById('accessToken')! as HTMLInputElement).value = items.accessToken
      console.log(items.accessToken)
    }
    if (items.teamName) (document.getElementById('teamName')! as HTMLInputElement).value = items.teamName
    if (items.diaryCategory) (document.getElementById('diaryCategory')! as HTMLInputElement).value = items.diaryCategory
    if (items.templateId) (document.getElementById('templateId')! as HTMLInputElement).value = items.templateId
  })
}

onMounted(() => {
  document.addEventListener('DOMContentLoaded', restore_options)
  document.getElementById('save')!.addEventListener('click', save_options)
})
</script>
