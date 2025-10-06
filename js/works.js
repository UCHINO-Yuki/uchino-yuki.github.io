
fetch('work_list.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('works-container').innerHTML = data;
    initFilter();
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
