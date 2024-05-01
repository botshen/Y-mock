import { getLogsRepo } from "@/store/LogsRepo";

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: "document_end",

  main() {
    const script = document.createElement("script");
    script.src = browser.runtime.getURL("/injected.js");
    document.documentElement.appendChild(script);
    const logRepo = getLogsRepo();

    window.addEventListener(
      "xxx",
      async (event) => {
        const customEvent = event as CustomEvent
        if (browser.runtime?.id) {
          try {
            if (customEvent.detail) {
              logRepo.create({
                pathRule: customEvent.detail,
                timestamp: Date.now(),
                timeText: new Date().toLocaleString(),
              })
            }
          } catch (error) {
            console.error(error)
          }
        }
      },
      false
    )
  },
});
export const sendMessage = async (message: { type: string; timestamp: number; data: any }) => {
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

