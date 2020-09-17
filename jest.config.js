module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
  moduleNameMapper: {
    '@components(.*)$': ['<rootDir>/src/components/$1'],
    '@queries(.*)$': ['<rootDir>/src/queries/$1'],
    '@models(.*)$': ['<rootDir>/src/models/$1'],
    '@lib(.*)$': ['<rootDir>/src/lib/$1'],
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'enzyme.js',
    '/prod_node_modules/',
  ],
  setupFilesAfterEnv: ['<rootDir>/enzyme.js'],
  modulePathIgnorePatterns: ['/prod_node_modules/'],
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '.*': 'babel-jest',
  },
};
