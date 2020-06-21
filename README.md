# Tally

This is the web system of the Tally project.

<!--
  TODO:
  Add test badges using: https://shields.io/
-->
![Deps](https://img.shields.io/david/la5ta/tally-web?style=for-the-badge&amp;labelColor=000000)

## Requirements

We mainly use the following to work in this project:

- [Docker](https://www.docker.com/)
- [NextJS](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- CSS?

## Installation

```bash
git clone git@github.com:la5ta/tally-web.git
cd tally-web
```

## Usage

To directly run this container use the following:
```bash
docker build -t tally-web .

# For development
$ docker run --name my-tally-web -p 3000:3000 -e NODE_ENV=development tally-web

# For production
$ docker run --name my-tally-web -p 3000:3000 tally-web
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the process for submitting pull requests.


## Contributing

Pull requests are the way to go. For major changes, please open an issue first to discuss what you would like to change.

Pushing directly to master should be avoided, create a feature branch and then a pull request to merge with master.

Please make sure to update tests as appropriate.
