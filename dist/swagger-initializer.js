window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {"url": "https://raw.githubusercontent.com/TheAirBlow/mojang-api/master/docs/mojang/api.yaml", "name": "api.mojang.com"},
      {"url": "https://raw.githubusercontent.com/TheAirBlow/mojang-api/master/docs/mojang/account.yaml", "name": "account.mojang.com"},
      {"url": "https://raw.githubusercontent.com/TheAirBlow/mojang-api/master/docs/mojang/sessionserver.yaml", "name": "sessionserver.mojang.com"},
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
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
