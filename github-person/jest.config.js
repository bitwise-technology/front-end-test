module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/default',
       
    transformIgnorePatterns: [
        '/node_modules/(?!(axios|other-package)/)',
    ],
}