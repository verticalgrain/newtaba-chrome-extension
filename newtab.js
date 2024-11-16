chrome.storage.sync.get(['newTabUrl'], (result) => {
  if (result.newTabUrl) {
    window.location.href = result.newTabUrl;
  } else {
    document.body.innerHTML = 'No URL set.';
  }
});
