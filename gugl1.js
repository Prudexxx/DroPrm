
  const form1 = document.getElementById('feedbackForm');
  const statusText1 = document.getElementById('status');

  form1.addEventListener('submit', function(e) {
    e.preventDefault();

    const data1 = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      tel: document.getElementById('tel').value
    };

    fetch('https://script.google.com/macros/s/AKfycbxhNQcdWS7c8KVsHEapAUfflU_eHb0-cwsfWRIkJAkOpz081hx68wVYJRg6L4xqJKVtIg/exec', {
      method: 'POST',
      contentType: 'application/json',
      body: JSON.stringify(data1)
    })
    
    .then(response => response.text())
    .then(text => {
      statusText1.textContent = 'Данные успешно отправлены!';
      form1.reset();
    })
    .catch(error => {
      statusText1.textContent = 'Ошибка при отправке данных.';
    });
  });
