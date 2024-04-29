export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: "document_end",

  main() {
    const script = document.createElement("script");
    script.src = browser.runtime.getURL("/injected.js");
    document.documentElement.appendChild(script);
  },
});
