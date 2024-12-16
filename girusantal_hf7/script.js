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


//   <script>
//     // Megkeressük az összes td elemet
//     const cells = document.querySelectorAll('td');
    
//     // Indításkor beállítjuk a kezdő időt, amikor a cellák forgása elkezdődik
//     let delay = 0;
    
//     // Végigmegyünk minden cellán
//     cells.forEach((cell, index) => {
//       // Késleltetjük az animációt a cellák sorrendjének megfelelően
//       setTimeout(() => {
//         // Alkalmazzuk a 360 fokos forgást
//         cell.style.transform = 'rotate(360deg)';
//       }, delay);
      
//       // Módosítjuk a késleltetést a következő cellához
//       delay += 200; // 200ms késleltetés
//     });
//   </script>


