module.exports = {
    testDir: './tests/e2e',
    use: {
        browserName: 'chromium',
        headless: true
    },
    reporter: [['list'], ['json', { outputFile: 'test-results.json' }]]
};