
fetch('./work_list.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('works-container').innerHTML = data;
    initFilter();
    genchart();
  });

function initFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const works = document.querySelectorAll('.work2');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const year = btn.getAttribute('data-year');
      applyFilter(year, works);
    });
  });

  let activeBtn = document.querySelector('.filter-btn.active');
  if (!activeBtn) {
    activeBtn = buttons[0];
    activeBtn.classList.add('active');
  }

  const initialYear = activeBtn.getAttribute('data-year');
  applyFilter(initialYear, works);
}

function applyFilter(year, works) {
  works.forEach(work => {
    const workYear = work.getAttribute('data-year');
    if (workYear === year) {
      work.classList.remove('hidden');
    } else {
      work.classList.add('hidden');
    }
  });
}

function countPublicationsByYear() {
  const works = document.querySelectorAll('.work2');
  const yearCount = {};

  works.forEach(work => {
    const year = work.getAttribute('data-year');
    yearCount[year] = (yearCount[year] || 0) + 1;
  });

  return yearCount;
}

function genchart() {
  const yearCount = countPublicationsByYear();
  const years = Object.keys(yearCount).sort();
  const publications = years.map(y => yearCount[y]);

  const chart = document.getElementById('chart');
  for (let i = 0; i < years.length; i++) {
    const contents_div = document.createElement('div');
    contents_div.className = 'bar-row';
    contents_div.innerHTML = `
      <div class="year">${years[i]}</div>
      <div class="bar-area">
          <div class="bar" style="
            width: calc(${publications[i]} / 10 * 100%);
            background: linear-gradient(to right, rgb(255, 200, 0), rgb(255, ${200-publications[i]*20}, 0));
          "></div>
          <div class="value" style="left: calc(${publications[i]} / 10 * 100% + 5px);">${publications[i]}</div>
      </div>
    `;
    chart.appendChild(contents_div);
  }

  const elem = document.getElementById("chart");
  const heightOffset = elem.offsetHeight;
  const axisLines = document.querySelectorAll("div.axis-line");

  axisLines.forEach(line => {
    line.style.height = `calc(${heightOffset}px + var(--font-small))`;
  });
}
