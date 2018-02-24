export default function sendEmail(subject, body) {
  return fetch(
    'https://qen9yylar9.execute-api.us-west-1.amazonaws.com/production/submit',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subject, body })
    }
  )
}
