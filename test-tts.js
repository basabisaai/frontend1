// test-tts.js
const tts = require('./tts.js');

const req = {
  body: {
    text: "Sure, I'd be happy to share some background information on five neighborhoods in Beijing 1. Dongcheng (东城) Literally means 'East City'."
  }
};

const res = {
  send: data => console.log('Response:', data),
  json: data => console.log('JSON Response:', data),
  status: code => ({
    send: data => console.log('Status', code, ':', data),
    json: data => console.log('Status', code, ':', data)
  })
};

// Cari route /speak dan jalankan middleware
const speakRoute = tts.router.stack.find(r => r.route?.path === '/speak');
if (speakRoute) {
  const handler = speakRoute.route.stack[0].handler;
  handler(req, res);
} else {
  console.error("Route /speak not found");
}