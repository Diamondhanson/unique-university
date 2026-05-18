type Submission = {
  name: string
  email: string
  subject: string
  message: string
  submittedAt: Date
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function nlToBr(value: string): string {
  return escapeHtml(value).replace(/\n/g, '<br />')
}

export function buildContactEmailHtml(s: Submission): string {
  const navy = '#0a1828'
  const navyMid = '#163052'
  const green = '#28c81f'
  const gold = '#fbbf24'
  const ink = '#0a1828'
  const subtle = '#4a6fa5'
  const surface = '#f1fde6'
  const formattedDate = s.submittedAt.toLocaleString('en-US', {
    dateStyle: 'long',
    timeStyle: 'short'
  })

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>New contact message — UBHI</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f6fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Helvetica,Arial,sans-serif;color:${ink};">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f4f6fb;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 8px 30px rgba(10,24,40,0.08);">
            <tr>
              <td style="background:linear-gradient(135deg,${navy} 0%,${navyMid} 55%,${green} 130%);padding:32px 36px;color:#ffffff;">
                <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${gold};font-weight:600;">Unique Bilingual Higher Institute</div>
                <div style="margin-top:8px;font-size:22px;font-weight:700;font-family:Georgia,'Times New Roman',serif;line-height:1.25;">New message from the contact form</div>
                <div style="margin-top:6px;font-size:13px;color:#dbe5f3;">Submitted ${escapeHtml(formattedDate)}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 36px 8px 36px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td style="padding:0 0 16px 0;">
                      <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${subtle};font-weight:600;">From</div>
                      <div style="margin-top:6px;font-size:16px;font-weight:600;color:${ink};">${escapeHtml(s.name)}</div>
                      <div style="margin-top:2px;font-size:14px;">
                        <a href="mailto:${encodeURIComponent(s.email)}" style="color:${green};text-decoration:none;font-weight:500;">${escapeHtml(s.email)}</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 24px 0;">
                      <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${subtle};font-weight:600;">Subject</div>
                      <div style="margin-top:6px;font-size:16px;color:${ink};">${escapeHtml(s.subject || '(no subject)')}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 36px 32px 36px;">
                <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${subtle};font-weight:600;margin-bottom:10px;">Message</div>
                <div style="background:${surface};border-left:4px solid ${green};border-radius:10px;padding:20px 22px;font-size:15px;line-height:1.65;color:${ink};white-space:pre-wrap;">${nlToBr(s.message)}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 36px 32px 36px;">
                <a href="mailto:${encodeURIComponent(s.email)}?subject=${encodeURIComponent('Re: ' + (s.subject || 'your message'))}" style="display:inline-block;background:${green};color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:999px;font-size:14px;font-weight:600;letter-spacing:0.2px;">Reply to ${escapeHtml(s.name.split(' ')[0] || 'sender')}</a>
              </td>
            </tr>
            <tr>
              <td style="background:${navy};padding:20px 36px;color:#dbe5f3;font-size:12px;line-height:1.55;">
                <div style="font-weight:600;color:#ffffff;">Unique Bilingual Higher Institute</div>
                <div style="margin-top:4px;">Yaoundé, Cameroon</div>
                <div style="margin-top:10px;color:#94a8c4;">Sent automatically from the UBHI website contact form.</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

export function buildContactEmailText(s: Submission): string {
  return [
    'New contact form submission — UBHI',
    '----------------------------------',
    '',
    `From:    ${s.name} <${s.email}>`,
    `Subject: ${s.subject || '(no subject)'}`,
    `Sent:    ${s.submittedAt.toLocaleString('en-US')}`,
    '',
    'Message:',
    s.message,
    '',
    '---',
    'Sent automatically from the UBHI website contact form.'
  ].join('\n')
}
