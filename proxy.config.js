const PROXY_HOST = "https://www.kd100.com";

const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: PROXY_HOST,
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
