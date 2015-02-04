Package.describe({
    summary: "famous package for meteor",
    version: "1.3.0",
    name: "particle4dev:famous",
    git: "https://github.com/particle4dev/famous-meteor.git"
});

// meteor test-packages ./
var both = ['client', 'server'];
var client = ['client'];
var server = ['server'];

Package.on_use(function(api) {
    if (api.versionsFrom)
        api.versionsFrom('1.0');
    api.add_files([
        'functionPrototypeBind.js',
        'classList.js',
        'requestAnimationFrame.js',
        'require.js',
        'famous.css',
        'famous.min.js'
    ], client);
    if (typeof api.export !== 'undefined') {
    }
});

Package.on_test(function(api) {
    api.use(['test-helpers', 'tinytest'], client);
    api.add_files([
    ], client);
});