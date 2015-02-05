Package.describe({
    summary: "famous package for meteor",
    version: "2.0.0",
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
        'lib/functionPrototypeBind.js',
        'lib/classList.js',
        'lib/requestAnimationFrame.js',
        'lib/famous.css',
        'lib/famous-global.js',
        'lib/export.js',
        'lib/require.js'
    ], client);
    if (typeof api.export !== 'undefined') {
        api.export('famous');
    }
});

Package.on_test(function(api) {
    api.use(['test-helpers', 'tinytest', 'particle4dev:famous'], client);
    api.add_files([
        'tests/famous-tests.js'
    ], client);
});