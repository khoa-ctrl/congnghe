(function () {
  'use strict';

  const container = document.getElementById('wiki-sections-content');
  if (!container) return;

  let htmlContent = "";

  WIKI_SECTIONS_DATA.forEach(sec => {
    htmlContent += `<section id="${sec.id}" class="wiki-section">`;
    htmlContent += `<h2>${sec.title}</h2>`;

    sec.items.forEach(item => {
      htmlContent += `
        <div class="wiki-sub-item">
          <span class="sub-tag">${item.tag}</span>
          <h3>${item.title}</h3>
          <img src="${item.image}" alt="${item.title}" crossorigin="anonymous" loading="lazy">
          <p>${item.content}</p>
        </div>
      `;
    });

    htmlContent += `</section>`;
  });

  container.innerHTML = htmlContent;
})();
