document.getElementById('saveBtn').addEventListener('click', () => {
  const url = document.getElementById('urlInput').value;
  if (url) {
    chrome.storage.sync.set({ newTabUrl: url }, () => {
      alert('URL saved!');
      window.close();
    });
  }
});

document.getElementById('closeBtn').addEventListener('click', () => {
  window.close();
});
