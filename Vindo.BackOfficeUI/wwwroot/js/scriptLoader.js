// wwwroot/js/scriptLoader.js

window.dynamicScriptLoader = {
    loadScript: function (src, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.onload = callback;
        document.head.appendChild(script);
    }
};
