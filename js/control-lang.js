let url_researchmap = "https://researchmap.jp/yukiuchino?lang=ja";
let url_scholar = "https://scholar.google.co.jp/citations?hl=ja&user=gne9K9wAAAAJ";

document.addEventListener("DOMContentLoaded", function () {

  function setLanguage(lang) {
    
    // <html lang='en'> or <html lang='ja'>
    document.documentElement.lang = lang;

    // only display en or ja
    document.querySelectorAll(".ja").forEach(el => {
        el.style.display = (lang === "ja") ? "flex" : "none";
    });

    document.querySelectorAll(".en").forEach(el => {
        el.style.display = (lang === "en") ? "flex" : "none";
    });

    // change switch
    document.getElementById("switch").checked = (lang === "ja");
    
    // change link
    const rikenLink = document.getElementById("riken-link");
    if (rikenLink) {
        rikenLink.href = lang === "ja" 
            ? "https://www.r-ccs.riken.jp/" 
            : "https://www.r-ccs.riken.jp/en/";
    }

    url_researchmap = lang === "ja"
      ? "https://researchmap.jp/yukiuchino?lang=ja"
      : "https://researchmap.jp/yukiuchino?lang=en";
    
    url_scholar = lang === "ja"
      ? "https://scholar.google.co.jp/citations?hl=ja&user=gne9K9wAAAAJ"
      : "https://scholar.google.co.jp/citations?hl=en&user=gne9K9wAAAAJ";

    // change figure
    const imageElement = document.getElementById("title-image");
    if (imageElement) {
        imageElement.src = lang === "ja" 
            ? "fig/Piskel_yuki_PC.gif" 
            : "fig/New-Piskel_yuki_centerPart.gif";
    }
  }

  const currentLang = navigator.language.startsWith('ja') ? 'ja' : 'en';
  setLanguage(currentLang);
  
  document.getElementById("switch").addEventListener("change", function () {
    const newLang = this.checked ? "ja" : "en";
    // const flagbox = document.getElementById("flagbox");
    // const flagimg = document.getElementById("flagimg");
    // flagimg.src = newLang === "ja" 
    //   ? "fig/ja.gif" 
    //   : "fig/en.gif";
    // flagbox.style.display = "block";
    // setTimeout(function () {
    //   setLanguage(newLang);
    // }, 3000);
    // setTimeout(function () {
    //   flagbox.style.display = "none";
    // }, 6000);
    setLanguage(newLang);
  });
  
  document.getElementById("open-researchmap").addEventListener("click", function () {
    window.open(url_researchmap, "_blank", "noopener,noreferrer");
  });

  document.getElementById("open-scholar").addEventListener("click", function () {
    window.open(url_scholar, "_blank", "noopener,noreferrer");
  });
});
