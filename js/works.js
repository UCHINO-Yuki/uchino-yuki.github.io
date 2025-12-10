
fetch('./work_list.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('works-container').innerHTML = data;
    initFilter();
    genchart();
    // updateButtonCounts();
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

// function updateButtonCounts() {
//   const counts = countPublicationsByYear();

//   document.querySelectorAll('.filter-btn').forEach(btn => {
//     const year = btn.getAttribute('data-year');
//     const count = counts[year] || 0;
//     btn.textContent = `${year} (${count})`;
//   });
// }

function genchart() {
  const works = document.querySelectorAll('.work2');
  const counts = countPublicationsByYear();
  document.getElementById('chart_container').style.height = `${50 + 25 * Object.keys(counts).length}px`;

  // ソートして配列化
  const years = Object.keys(counts).sort();
  const values = years.map(y => counts[y]);

  // Chart.jsで描画
  const ctx = document.getElementById('chart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [{
        label: '#Publications',
        data: values,
        borderWidth: 1,
      }]
    },
    options: {
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          fontSize: 18,
          fontFamily: "sans-serif",
          text: 'Number of Publications per Year'
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Year' }
        },
        x: {
          max: 10,
          title: { display: true, text: 'No. of Publications' }
        }
      },
    }
  });
}
