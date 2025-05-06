function fetchGitHubInfo(owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const baseId = `${owner}/${repo}`;
        const starsElem = document.getElementById(`stars/${baseId}`);
        const forksElem = document.getElementById(`forks/${baseId}`);
        if (starsElem) starsElem.textContent = data.stargazers_count;
        if (forksElem) forksElem.textContent = data.forks_count;
      })
      .catch(error => {
        console.error(`Error fetching info for ${owner}/${repo}:`, error);
        const baseId = `${owner}/${repo}`;
        const starsElem = document.getElementById(`stars/${baseId}`);
        const forksElem = document.getElementById(`forks/${baseId}`);
        if (starsElem) starsElem.textContent = "err";
        if (forksElem) forksElem.textContent = "err";
      });
  }
  
  function initGitHubInfoLoader() {
    const starElems = document.querySelectorAll("span[id^='stars/']");
    const processed = new Set();
  
    starElems.forEach(elem => {
      const id = elem.id;
      const [, owner, repo] = id.split("/");
      const key = `${owner}-${repo}`;
      if (!processed.has(key)) {
        processed.add(key);
        fetchGitHubInfo(owner, repo);
      }
    });
  }
  
  window.addEventListener("DOMContentLoaded", initGitHubInfoLoader);
  