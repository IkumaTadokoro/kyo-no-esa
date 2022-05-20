// Saves options to chrome.storage
const save_options = () => {
  const accessToken = document.getElementById('accessToken').value

  chrome.storage.sync.set({
    'accessToken': accessToken
  }, () => {
    console.log('保存しました!')
    const status = document.getElementById('status')
    status.textContent = 'Options saved'
    setTimeout(() => {
      status.textContent = ''
    }, 750)
  })
}

const restore_options = () => {
  chrome.storage.sync.get('accessToken', (items) => {
    document.getElementById('accessToken').value = items.accessToken
  })
}


document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options);
