document.addEventListener('DOMContentLoaded', () => {
    const tabsLabels = document.querySelectorAll('.tab-btn');
    const tabsPanels = document.querySelectorAll('.tab-panel');

    tabsLabels.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            // Убираем active у всех кнопок и панелей
            tabsLabels.forEach(btn => btn.classList.remove('active'));
            tabsPanels.forEach(panel => panel.classList.remove('active'));

            // Добавляем active текущей кнопке и нужной панели
            button.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger-btn');
    const headerMenu = document.querySelector('.header-menu');

    if (burgerBtn && headerMenu) {
        burgerBtn.addEventListener('click', () => {
            // Переключаем класс active на кнопке (для анимации крестика) и на самом меню
            burgerBtn.classList.toggle('active');
            headerMenu.classList.toggle('active');
        });

        // Закрываем меню, если пользователь кликнул на ссылку
        const menuLinks = document.querySelectorAll('.header-menu-link');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                headerMenu.classList.remove('active');
            });
        });
    }
});