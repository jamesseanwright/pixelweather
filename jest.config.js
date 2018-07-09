'use strict';

module.exports = {
    transform: {
        "^.+\\.ts$": "ts-jest"
    },
    testRegex: "src\\/.*\\/__tests__\\/.*\\.test\\.ts$",
    moduleFileExtensions: ['ts', 'js', 'json'],
    globals: {
        'ts-jest': {
            tsConfigFile: './tsconfig.server.json',
        }
    },
};