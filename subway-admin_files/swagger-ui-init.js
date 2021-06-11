
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "info": {
      "title": "Subway API",
      "version": "1.0.0",
      "description": "Subway Admin API"
    },
    "host": "localhost:3000",
    "basePath": "/",
    "swagger": "2.0",
    "paths": {
      "/auth/signup": {
        "post": {
          "summary": "회원가입",
          "tags": [
            "Users"
          ],
          "parameters": [
            {
              "name": "name",
              "type": "string",
              "required": true
            },
            {
              "name": "email",
              "type": "string",
              "required": true
            },
            {
              "name": "password",
              "type": "string",
              "required": true
            }
          ],
          "produces": [
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "Success create user"
            }
          }
        }
      },
      "/auth/login": {
        "post": {
          "summary": "로그인",
          "tags": [
            "Users"
          ],
          "parameters": [
            {
              "name": "email",
              "type": "string",
              "required": true
            },
            {
              "name": "password",
              "type": "string",
              "required": true
            }
          ],
          "produces": [
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "login success"
            }
          }
        }
      },
      "/api/stations": {
        "post": {
          "summary": "역 생성",
          "tags": [
            "Stations"
          ],
          "security": [
            {
              "Bearer": []
            }
          ],
          "parameters": [
            {
              "name": "name",
              "type": "string",
              "required": true
            }
          ],
          "produces": [
            "application/json"
          ]
        },
        "get": {
          "summary": "역 리스트",
          "tags": [
            "Stations"
          ],
          "security": [
            {
              "Bearer": []
            }
          ],
          "produces": [
            "application/json"
          ]
        }
      },
      "/api/stations/{stationId}": {
        "put": {
          "summary": "역 수정",
          "tags": [
            "Stations"
          ],
          "parameters": [
            {
              "name": "name",
              "type": "string",
              "required": true
            }
          ],
          "produces": [
            "application/json"
          ]
        },
        "delete": {
          "summary": "역 삭제",
          "tags": [
            "Stations"
          ]
        }
      },
      "/api/lines": {
        "post": {
          "summary": "노선 생성",
          "tags": [
            "Lines"
          ],
          "security": [
            {
              "Bearer": []
            }
          ],
          "parameters": [
            {
              "name": "name",
              "type": "string",
              "required": true
            },
            {
              "name": "color",
              "type": "string",
              "required": true
            },
            {
              "name": "upStationId",
              "type": "string",
              "required": true
            },
            {
              "name": "downStationId",
              "type": "string",
              "required": true
            },
            {
              "name": "distance",
              "type": "string",
              "required": true
            },
            {
              "name": "duration",
              "type": "integer",
              "required": true
            }
          ],
          "produces": [
            "application/json"
          ]
        },
        "get": {
          "summary": "노선 리스트",
          "tags": [
            "Lines"
          ],
          "security": [
            {
              "Bearer": []
            }
          ],
          "produces": [
            "application/json"
          ]
        }
      },
      "/api/lines/{lineId}": {
        "put": {
          "summary": "노선 수정",
          "tags": [
            "Lines"
          ],
          "security": [
            {
              "Bearer": []
            }
          ],
          "parameters": [
            {
              "name": "name",
              "type": "string",
              "required": true
            },
            {
              "name": "color",
              "type": "string",
              "required": true
            },
            {
              "name": "upStationId",
              "type": "string",
              "required": true
            },
            {
              "name": "downStationId",
              "type": "string",
              "required": true
            },
            {
              "name": "distance",
              "type": "string",
              "required": true
            },
            {
              "name": "duration",
              "type": "string",
              "required": true
            }
          ],
          "produces": [
            "application/json"
          ]
        },
        "delete": {
          "summary": "노선 삭제",
          "tags": [
            "Lines"
          ]
        }
      },
      "/api/lines/{lineId}/sections": {
        "post": {
          "summary": "구간 생성",
          "tags": [
            "Sections"
          ],
          "security": [
            {
              "Bearer": []
            }
          ],
          "parameters": [
            {
              "name": "lineId",
              "type": "string",
              "required": true
            },
            {
              "name": "upStationId",
              "type": "string",
              "required": true
            },
            {
              "name": "downStationId",
              "type": "string",
              "required": true
            }
          ],
          "produces": [
            "application/json"
          ]
        }
      },
      "/api/lines/{lineId}/sections?stationId=${stationId}": {
        "delete": {
          "summary": "구간 삭제",
          "tags": [
            "Sections"
          ]
        }
      }
    },
    "definitions": {},
    "responses": {},
    "parameters": {},
    "securityDefinitions": {},
    "tags": [
      {
        "name": "Users",
        "description": "All about /api/auth"
      },
      {
        "name": "Stations",
        "description": "All about /api/stations"
      },
      {
        "name": "Lines",
        "description": "All about /api/lines"
      }
    ]
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
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
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
