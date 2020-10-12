# Tally

This is the web system of the Tally project.

<!--
  TODO:
  Add test badges using: https://shields.io/
-->

![Deps](https://img.shields.io/david/la5ta/tally-web?style=for-the-badge&labelColor=000000)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge&labelColor=000000)](http://commitizen.github.io/cz-cli/)

## Requirements

We mainly use the following to work in this project:

- [NextJS](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Ant Design](https://ant.design/)

## Installation

```bash
git clone git@github.com:la5ta/tally-web.git
cd tally-web
```

## Relay and Next.JS

Before running next, we need to make sure the queries are valid with the relay schema. Build the queries files and finally, we can run next.

```bash
$ yarn build-schema
$ yarn dev
```

## Testing

To run all test and see the coverage, use the command:

```bash
$ yarn test
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the process for submitting pull requests.
