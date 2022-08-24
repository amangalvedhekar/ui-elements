const config = {
    verbose: true,
    projects: [
        {
            preset: 'jest-expo/ios',
            transformIgnorePatterns: [
                'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
            ],
            setupFiles: ['<rootDir>/__tests__/mocks/jestSetup.ts'],
            setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"]
        },
        {
            preset: 'jest-expo/android',
            transformIgnorePatterns: [
                'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
            ],
            setupFiles: ['<rootDir>/__tests__/mocks/jestSetup.ts'],
            setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"]
        },
    ],
};

module.exports = config;
