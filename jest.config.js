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
    window: {},
  },
  moduleNameMapper: {
    '@components(.*)$': ['<rootDir>/src/components/$1'],
    '@queries(.*)$': ['<rootDir>/src/queries/$1'],
    '@models(.*)$': ['<rootDir>/src/models/$1'],
    '@lib(.*)$': ['<rootDir>/src/lib/$1'],
    '@config(.*)$': ['<rootDir>/src/config/$1'],
    '@pages(.*)$': ['<rootDir>/src/pages/$1'],
    '@public(.*)$': ['<rootDir>/public/$1'],
    '@styles(.*)$': ['<rootDir>/public/styles/$1'],
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.svg\\?(sprite|include)(.+)?$': '<rootDir>/__mocks__/svgMock.ts',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'enzyme.js',
    '/prod_node_modules/',
  ],
  setupFiles: ['<rootDir>/__mocks__/client.ts'],
  modulePathIgnorePatterns: ['/prod_node_modules/'],
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '.*': 'babel-jest',
  },
};
