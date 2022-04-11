window.onload = function() {
  window.ui = SwaggerUIBundle({
    urls: [
      {"url": "https://raw.githubusercontent.com/TheAirBlow/mojang-api/master/docs/mojang/api.yaml", "name": "api.mojang.com"},
      {"url": "https://raw.githubusercontent.com/TheAirBlow/mojang-api/master/docs/mojang/sessionserver.yaml", "name": "sessionserver.mojang.com"},
      {"url": "https://raw.githubusercontent.com/TheAirBlow/mojang-api/master/docs/mojang/authserver.yaml", "name": "authserver.mojang.com"},
      {"url": "https://raw.githubusercontent.com/TheAirBlow/mojang-api/master/docs/minecraft/api.yaml", "name": "api.minecraftservices.com"}
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
      if (req.url.startsWith("https://raw.githubusercontent.com/TheAirBlow/mojang-api/master/docs/"))
        return req;
      req.url = `https://mojangcors.herokuapp.com/${req.url}`
      return req;
    }
  });
};
