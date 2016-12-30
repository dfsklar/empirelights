cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-fcm.FCMPlugin",
        "file": "plugins/cordova-plugin-fcm/www/FCMPlugin.js",
        "pluginId": "cordova-plugin-fcm",
        "clobbers": [
            "FCMPlugin"
        ]
    },
    {
        "id": "cordova-plugin-firebase-realtime-database.FirebaseDatabasePlugin",
        "file": "plugins/cordova-plugin-firebase-realtime-database/www/firebase.js",
        "pluginId": "cordova-plugin-firebase-realtime-database",
        "clobbers": [
            "FirebaseDatabasePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-fcm": "1.1.5",
    "cordova-plugin-firebase-realtime-database": "0.0.2"
};
// BOTTOM OF METADATA
});