const btn = document.getElementById('toggleBtn');
const info = document.getElementById('info');

btn.addEventListener('click', () => {
  if (info.style.maxHeight && info.style.maxHeight !== '0px') {
    info.style.maxHeight = '0';
    info.style.padding = '0 10px';
  } else {
    info.style.maxHeight = info.scrollHeight + 'px';
    info.style.padding = '10px';
  }
});