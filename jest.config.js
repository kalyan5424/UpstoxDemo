module.exports = {
  verbose: true,
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '\\.(ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/', '<rootDir>/src/features/home/saga/'],
  transformIgnorePatterns: ['/node_modules/(?!(@react-native|@react-navigation|react-native)/).*/'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coverageReporters: ['html'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['<rootDir>/src/features/home/saga/'],
  // moduleNameMapper: {
  //   '\\.(png|jpg|ico|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '<rootDir>/__mock__/ImageMock.js',
  // },
}
