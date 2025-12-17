// Minimal ElementSDK implementation
window.elementSdk = {
    init: function(config) {
        console.log('ElementSDK initialized');
        if (config.onConfigChange) {
            config.onConfigChange(config.defaultConfig);
        }
    },
    setConfig: function(newConfig) {
        console.log('Config updated:', newConfig);
    }
};
