export async function scrapedAmazonProduct(url: string) {
  if (!url) {
    return
  }
  //brightData proxy configuration
  const userName = String(process.env.BRIGHT_DATA_USERNAME)
  const passWord = String(process.env.BRIGHT_DATA_PASSWORD)
  const port = 2225
  const session_id = (100000 * Math.random()) | 0
  const options = {
    auth: { userName: `${userName}-session-${session_id}`, passWord },
    host: ' brd.superproxy.io',
    port,
    rejectUnauthorized: false,
  }
}
