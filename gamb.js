
    const overlay = document.getElementById('overlay');
    const burger = document.getElementById('burger');

    // Открытие/закрытие шторки
    burger.addEventListener('click', () => {
        overlay.classList.toggle('active');
        const expanded = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!expanded));
    });
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('#overlay a').forEach(a => {
        a.addEventListener('click', () => {
        overlay.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
        });
    });
    burger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        burger.click();
        }
    });

    // Функция для плавной прокрутки по якорю
    function setupScrollLink(id) {
        document.getElementById(id).addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.dataset.target; // получаем id блока
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // Настройка для всех ссылок
    setupScrollLink('linkMain');
    setupScrollLink('linkAbout');
    setupScrollLink('linkServices');
    setupScrollLink('linkContacts');
    setupScrollLink('linkPrice');

    setupScrollLink('mobLinkMain');
    setupScrollLink('mobLinkAbout');
    setupScrollLink('mobLinkServices');
    setupScrollLink('mobLinkContacts');
    setupScrollLink('mobLinkPrice');

// const anchors = document.querySelectorAll('#mainContent a[href*="#"]');  
// for (let anchor of anchors) {  
//     anchor.addEventListener('click', function (e) {  
//         e.preventDefault();  
//         const blockID = anchor.getAttribute('href').substr(1);  
//         document.getElementById(blockID).scrollIntoView({ behavior: 'smooth', block: 'start'})  
//     });  
// }  