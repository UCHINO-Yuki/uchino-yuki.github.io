const triggerImage = document.getElementById("running-cat-horz");

let isRunning = false;

triggerImage.addEventListener("click", () => {
  if (isRunning) return;

  isRunning = true;
  triggerImage.classList.add("disabled");

  const cat = document.createElement("img");
  cat.src = "fig/cats.gif";
  cat.className = "flowing-cat";

  document.body.appendChild(cat);

  cat.addEventListener("animationend", () => {
    cat.remove();
    isRunning = false;
    triggerImage.classList.remove("disabled");
  });
});
