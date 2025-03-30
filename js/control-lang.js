document.addEventListener("DOMContentLoaded", function () {
  const userLang = navigator.language.startsWith('ja') ? 'ja' : 'en';
  const otherLang = navigator.language.startsWith('ja') ? 'en' : 'ja';

  // only display en or ja
  document.querySelectorAll(`.${userLang}`).forEach(el => {
      el.style.display = "flex";
  });
  document.querySelectorAll(`.${otherLang}`).forEach(el => {
      el.style.display = "none";
  });

  // <html lang='en'> or <html lang='ja'>
  document.documentElement.lang = userLang;

  const rikenLink = document.getElementById("riken-link");
  if (rikenLink) {
      rikenLink.href = userLang === "ja" 
          ? "https://www.r-ccs.riken.jp/" 
          : "https://www.r-ccs.riken.jp/en/";
  }
});

document.getElementById("open-researchmap").addEventListener("click", function () {
  const lang = navigator.language.startsWith('ja') ? 'ja' : 'en';
  const url = `https://researchmap.jp/yukiuchino?lang=${lang}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

document.getElementById("open-scholar").addEventListener("click", function () {
  const lang = navigator.language.startsWith('ja') ? 'ja' : 'en';
  const url = `https://scholar.google.co.jp/citations?hl=${lang}&user=gne9K9wAAAAJ`;
  window.open(url, "_blank", "noopener,noreferrer");
});
