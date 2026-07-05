document.getElementById("save").addEventListener("click", () => {
  const value = document.getElementById("keyword").value;

  browser.storage.local.set({ keyword: value }, () => {
    alert("Saved keyword: " + value);
  });
});