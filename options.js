const save_options = () => {
  const accessToken = document.getElementById('accessToken').value
  const teamName = document.getElementById('teamName').value
  const diaryCategory = document.getElementById('diaryCategory').value
  const templateId = document.getElementById('templateId').value

  chrome.storage.sync.set({
    'accessToken': accessToken,
    'teamName': teamName,
    'diaryCategory': diaryCategory,
    'templateId': templateId
  }, () => {
    const status = document.getElementById('status')
    status.textContent = 'Options saved'
    setTimeout(() => {
      status.textContent = ''
    }, 750)
  })
}

const restore_options = () => {
  chrome.storage.sync.get([
    'accessToken',
    'teamName',
    'diaryCategory',
    'templateId'
  ], (items) => {
    if (items.accessToken) document.getElementById('accessToken').value = items.accessToken
    if (items.teamName) document.getElementById('teamName').value = items.teamName
    if (items.diaryCategory) document.getElementById('diaryCategory').value = items.diaryCategory
    if (items.templateId) document.getElementById('templateId').value = items.templateId
  })
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options);
