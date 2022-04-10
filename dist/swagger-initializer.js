window.onload = function() {
  window.ui = SwaggerUIBundle({
    urls: [
      {"url": "https://raw.githubusercontent.com/TheAirBlow/mojang-api/master/docs/mojang/api.yaml", "name": "Public Mojang API"},
      {"url": "https://raw.githubusercontent.com/TheAirBlow/mojang-api/master/docs/mojang/account.yaml", "name": "Mojang Account API"},
      {"url": "https://raw.githubusercontent.com/TheAirBlow/mojang-api/master/docs/mojang/sessionserver.yaml", "name": "Mojang Session API"},
      {"url": "https://raw.githubusercontent.com/TheAirBlow/mojang-api/master/docs/mojang/authserver.yaml", "name": "Yggdrasil Mojang Server"},
      {"url": "https://raw.githubusercontent.com/TheAirBlow/mojang-api/master/docs/minecraft/api.yaml", "name": "Minecraft Services API"}
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    requestInterceptor: function(req) {
      req.url = `https://api.allorigins.win/raw?url=${encodeURIComponent(req.url)}`
      return req;
    }
  });
};
