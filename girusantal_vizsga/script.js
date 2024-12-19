document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.practice, .time, .race'); // Kiválasztjuk a gyakorlatokat, időmérőket és versenyeket

    cells.forEach(cell => {
        const tooltip = document.createElement('span'); // Tooltip létrehozása
        tooltip.classList.add('tooltip');
        document.body.appendChild(tooltip); // Tooltip hozzáadása a body-hoz

        const tooltipText = cell.getAttribute('data-tooltip'); // Tooltip szövege a data-tooltip attribútumból
        tooltip.textContent = tooltipText;

        // Tooltip megjelenítése
        cell.addEventListener('mouseenter', function (event) {
            // Cella pozíciója
            const rect = cell.getBoundingClientRect();
            const parentElement = event.target.closest('.card'); // Szülő elem: .card
            const parentRect = parentElement.getBoundingClientRect();
            const scrollX = window.scrollX;
            const scrollY = window.scrollY;
            console.log(parentRect.x);
            console.log(parentRect.y);
            console.log(rect.y);

            // Tooltip pozicionálása
            tooltip.style.left = parentRect.x + 'px';
            tooltip.style.top = rect.y + scrollY +'px'; 

            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = 1;
        });

        // Tooltip eltűnése
        cell.addEventListener('mouseleave', function () {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = 0;
        });
    });
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function (event) {
        // Megakadályozza az alapértelmezett linkviselkedést
        event.preventDefault();

        // Megkapjuk az aktuális menüpont bal pozícióját
        var menuItem = event.target.closest('li');
        var menuPosition = menuItem.offsetLeft;

        // Beállítjuk a kerék pozícióját
        var wheel = document.getElementById('animated-wheel');
        wheel.style.left = menuPosition + 'px';
        
        // Indítjuk az animációt
        wheel.style.animation = 'moveAndBounce 3s ease-in-out forwards';

        // Az animáció végén elrejtjük a képet
        wheel.addEventListener('animationend', function () {
            wheel.style.visibility = 'hidden'; // A kerék eltűnik, miután az animáció befejeződik
        });

        // Továbbítjuk a felhasználót a kattintott menüpontra
        window.location.href = event.target.href;
    });
});