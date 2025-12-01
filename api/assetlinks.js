export default function handler(request, response) {
  const assetLinks = [
    {
      "relation": ["delegate_permission/common.handle_all_urls"],
      "target": {
        "namespace": "android_app",
        "package_name": "com.daskoon.crivia",
        "sha256_cert_fingerprints": [
          "D3:D6:7D:EA:19:25:E9:0F:FA:79:A3:51:59:D8:70:49:88:3D:54:A7:B9:68:01:83:DA:E4:D5:13:33:67:87:F1",
          "6F:75:FD:B9:F0:AF:6B:2D:7E:A4:7D:AE:81:3D:17:4C:42:DD:CC:F5:98:EF:9B:42:C5:FF:4A:15:C6:AC:7B:BB",
          "09:73:B2:34:E1:B6:5E:16:FD:01:CF:08:12:5D:8C:A5:33:45:B9:18:8A:66:6F:CD:CD:0D:23:00:53:9C:4F:53"
        ]
      }
    }
  ];

  response.status(200).json(assetLinks);
}