var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama_4",
      "name": "Panorama_4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.8552455267381625,
        "pitch": -0.11035839405083969,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": 1.9685642168979687,
          "pitch": -0.12187142014605712,
          "rotation": 4.71238898038469,
          "target": "1-panorama_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama_1",
      "name": "Panorama_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.24305759545458727,
        "pitch": -0.017820468209057694,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": 0.6676208297976842,
          "pitch": 0.06908550088338927,
          "rotation": 0.7853981633974483,
          "target": "0-panorama_4"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
