/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageProvider: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest' // Seta que todo arquivo com extensão ts seja primeiro convertido pelo ts-jest para só então os testes serem aplicados
  }
}
