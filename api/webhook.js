// api/webhook.js
export const config = { api: { bodyParser: false } }; // 接收 LINE 原始请求体

export default async function handler(req, res) {
  try {
    // 读取原始 body
    const raw = await new Promise((resolve, reject) => {
      let data = '';
      req.on('data', (c) => (data += c));
      req.on('end', () => resolve(data));
      req.on('error', reject);
    });

    // 解析 JSON
    const body = JSON.parse(raw || '{}');

    // 取出第一个事件（你发消息给 OA 时会有一个 event）
    const event = body?.events?.[0];
    const userId = event?.source?.userId || '(no userId)';

    // 为了方便你查看，打印详细日志
    console.log('LINE webhook event userId =>', userId);
    console.log('Full event =>', JSON.stringify(event, null, 2));

    // 可选：立即回一句话（需 replyToken）
    // 这里只做 200 OK 即可
    res.status(200).send('OK');
  } catch (e) {
    console.error('Webhook error:', e);
    res.status(200).send('OK'); // 仍返回 200，避免 LINE 重试
  }
}
