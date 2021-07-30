
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-calendar.Calendar",
          "file": "plugins/cordova-plugin-calendar/www/Calendar.js",
          "pluginId": "cordova-plugin-calendar",
        "clobbers": [
          "Calendar"
        ]
        },
      {
          "id": "cordova-plugin-telerik-imagepicker.ImagePicker",
          "file": "plugins/cordova-plugin-telerik-imagepicker/www/imagepicker.js",
          "pluginId": "cordova-plugin-telerik-imagepicker",
        "clobbers": [
          "plugins.imagePicker"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-calendar": "5.1.5",
      "cordova-plugin-telerik-imagepicker": "2.3.5"
    };
    // BOTTOM OF METADATA
    });
    