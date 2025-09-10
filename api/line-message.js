// api/line-message.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name = '', email = '', message = '' } = req.body;

    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    if (!token) return res.status(500).json({ error: 'Missing LINE token' });

    // 👉 这里要放你自己的 userId（第 4 步获取）
    const toUserId = process.env.LINE_USER_ID;

    const body = {
      to: toUserId,
      messages: [
        {
          type: 'text',
          text:
            `📩 AltanaX 有新表单提交\n\n` +
            `姓名: ${name || '-'}\n` +
            `邮箱: ${email || '-'}\n` +
            `消息: ${message || '-'}`
        }
      ]
    };

    const resp = await fetch('https://api.line.me/v2/bot/message/push', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!resp.ok) {
      return res.status(500).json({ error: await resp.text() });
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message || String(err) });
  }
}
