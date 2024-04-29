export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: "document_end",

  main() {
    const script = document.createElement("script");
    script.src = browser.runtime.getURL("/injected.js");
    document.documentElement.appendChild(script);
  },
});
export const sendMessage = async (message: { type: string; data: any }) => {
  try {
    await browser.runtime.sendMessage(message)
  } catch (error) {
    if (
      !(error instanceof Error) ||
      error.message !==
        "Could not establish connection. Receiving end does not exist."
    ) {
      throw error
    }
  }
}
window.addEventListener(
  "xxx",
  async (event) => {
    const customEvent = event as CustomEvent 
    if (browser.runtime?.id) {
      console.log('event======', event) 
      try { 
        if (customEvent.detail) {
          console.log('customEvent.detail======', customEvent.detail)
          await sendMessage({
            type: "ajaxInterceptor",
            data: customEvent.detail
          })
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  false
)
