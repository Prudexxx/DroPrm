
  document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Ваши данные
    const message = `Телефон: ${name}\nМатериал: ${phone}`;

    // Конфигурация
    const token = '7831903358:AAHIkRNmstPV5QYoRC5GYqGiuGppTlLiotk'; // вставьте сюда токен бота
    const chatId = '-1002657190873'; // вставьте сюда chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

  


    axios.post(url, {
      chat_id: chatId,
      text: message
    })
    .then(response => {
      alert('Сообщение отправлено!');
    })
    .catch(error => {
      alert('Ошибка при отправке сообщения.');
      console.error(error);
    });
  });
  
