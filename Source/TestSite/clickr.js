setInterval(() => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(btn => {
    if (btn.textContent && btn.textContent.includes("Join queue")) {
      console.log("Found matching button, clicking...");
      btn.click();
    }
  });
}, 1000);