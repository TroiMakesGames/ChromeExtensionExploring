let keyword = "join queue";

const storage = browser.storage || chrome.storage;

// initial load
storage.local.get(["keyword"], (result) => {
  if (result.keyword) {
    keyword = result.keyword;
  }
});

//listen for changes in real time
storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.keyword) {
    keyword = changes.keyword.newValue;
    console.log("Keyword updated to:", keyword);
  }
});

setInterval(() => {
  const buttons = document.querySelectorAll("button");

  const target = Array.from(buttons).find(btn =>
    btn.textContent &&
    btn.textContent.toLowerCase().includes(keyword.toLowerCase())
  );

  if (target) {
    console.log("Clicking:", target.textContent.trim());
    target.click();
  }
}, 1000);