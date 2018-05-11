let text = '';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'ccc',
    title: 'WordPress用に引用としてコピー',
    type: 'normal',
    contexts: ['selection']
  });

  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    text = `[bq uri="${tab.url}"]${info.selectionText}[/bq]`;

    document.execCommand('copy');
  });
});

document.addEventListener('copy', e => {
  e.preventDefault();
  e.clipboardData.setData('text/plain', text);
});
