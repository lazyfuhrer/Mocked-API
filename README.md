
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-18-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<p align="center" style="margin-bottom: 20px">
  <a href="https://github.com/ageddesi/Mocked-API">
    <img
      src="./mocked-api-logo.png" 
      alt="Mocked-API" 
      width="35%">
  </a>
</p>


## About

Welcome to Mocked-API, this is a live API that can be accessed by anyone who needs data to test out their website, app, components etc.

## Getting Started

First you should head over to https://api.mocked-api.dev and read our live api docs than start calling the api endpoints for the data you need.

## Join our discord

<p align="center" style="margin-bottom: 20px">
  <a href="https://discord.gg/yxqrkjDR87">
    <img
      src="./discord-join.png" 
      alt="Join Our Discord" 
      width="35%">
  </a>
</p>

## How to run Mocked-API
Once you've cloned this repository, running Mocked-API is quite easy, there are just 2 steps you have to follow:
1. Install the dependencies
```bash
npm run install
```
2. Serve the application
```bash
npm run serve
```
This will show you where the application is running
```
Mock API is running on port 3000.
```

## Getting Started (Docker)

1. Ensure you have Docker installed
1. Open your terminal/command line tool
1. Run `docker-compose up`
1. Open your browser to [http://localhost:3000/](http://localhost:3000/)

Now you should be able to make any request to that port, and get a response back! 

💡 If you browse to that port, you'll see our swagger documentation. 


## Testing

### How to write tests
For each module you create you will also need to create a tests folder, Inside this folder there should be a `api` and `utils`
(if you create any utils) folder.

The utils tests are fairly simple jests tests, the `api` routes tests are slightly different where you will need to add 
```javascript
const request = require('supertest');
const baseURL = 'http://localhost:3000';
``` 
to your tests and make a request in your test instead of calling a normal function.

### How to run tests
1. Run the mocked api server locally
2. run `npm run test`


## FAQ

**Q:** Are you planning to add more end points? <br />
**A:** I plan to add as many as I can, if there is a specific endpoint of data you would like to see feel free to add a Issue Request.

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

I encourage you to contribute to ***Mocked-API***! Feel free to fork the codebase and make a pull request for your changes.

Our contributing guide is currently WIP and available here [CONTRIBUTING GUIDE](CONTRIBUTING.md)

We use semantic commit messages 
- feat: (new feature for the user, not a new feature for build script)
- fix: (bug fix for the user, not a fix to a build script)
- docs: (changes to the documentation)
- style: (formatting, missing semi colons, etc; no production code change)
- refactor: (refactoring production code, eg. renaming a variable)
- test: (adding missing tests, refactoring tests; no production code change)
- chore: (updating grunt tasks etc; no production code change)

## Sponsor

Do you like this project? Support it by donating.

<a href="https://www.buymeacoffee.com/aaronrackley">
  Buy Me A Coffee
</a>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/ahmedsilat44"><img src="https://avatars.githubusercontent.com/u/105588821?v=4?s=100" width="100px;" alt="Ahmed Silat"/><br /><sub><b>Ahmed Silat</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=ahmedsilat44" title="Code">💻</a></td>
      <td align="center"><a href="http://yasio.dev"><img src="https://avatars.githubusercontent.com/u/3300701?v=4?s=100" width="100px;" alt="Yasio"/><br /><sub><b>Yasio</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=YasiOnFire" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/alberturria"><img src="https://avatars.githubusercontent.com/u/32776999?v=4?s=100" width="100px;" alt="Alberto Herrera Vargas"/><br /><sub><b>Alberto Herrera Vargas</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=alberturria" title="Documentation">📖</a></td>
      <td align="center"><a href="https://github.com/Coskntkk"><img src="https://avatars.githubusercontent.com/u/53823825?v=4?s=100" width="100px;" alt="Coşkun Atak"/><br /><sub><b>Coşkun Atak</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=Coskntkk" title="Code">💻</a></td>
      <td align="center"><a href="https://website-portofolio-ian.vercel.app/"><img src="https://avatars.githubusercontent.com/u/58666218?v=4?s=100" width="100px;" alt="Rizky ian indiarto"/><br /><sub><b>Rizky ian indiarto</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=rizkyian78" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/Eroxl"><img src="https://avatars.githubusercontent.com/u/77178777?v=4?s=100" width="100px;" alt="Evan"/><br /><sub><b>Evan</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=Eroxl" title="Code">💻</a></td>
      <td align="center"><a href="http://steamcommunity.com/id/Trigstur"><img src="https://avatars.githubusercontent.com/u/11588132?v=4?s=100" width="100px;" alt="Trigstur"/><br /><sub><b>Trigstur</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=Trigstur" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/fadkeabhi"><img src="https://avatars.githubusercontent.com/u/31249309?v=4?s=100" width="100px;" alt="fadkeabhi"/><br /><sub><b>fadkeabhi</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=fadkeabhi" title="Documentation">📖</a> <a href="https://github.com/ageddesi/Mocked-API/commits?author=fadkeabhi" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/Sir-Martin-Esq-III"><img src="https://avatars.githubusercontent.com/u/11279843?v=4?s=100" width="100px;" alt="Thomas Martin"/><br /><sub><b>Thomas Martin</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=Sir-Martin-Esq-III" title="Code">💻</a> <a href="https://github.com/ageddesi/Mocked-API/commits?author=Sir-Martin-Esq-III" title="Tests">⚠️</a></td>
      <td align="center"><a href="http://tuanvu.dev"><img src="https://avatars.githubusercontent.com/u/61374202?v=4?s=100" width="100px;" alt="Vu"/><br /><sub><b>Vu</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=tzii" title="Code">💻</a> <a href="https://github.com/ageddesi/Mocked-API/commits?author=tzii" title="Documentation">📖</a></td>
      <td align="center"><a href="http://kalwabed.xyz"><img src="https://avatars.githubusercontent.com/u/49640654?v=4?s=100" width="100px;" alt="Kalwabed Rizki"/><br /><sub><b>Kalwabed Rizki</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=kalwabed" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/talis-fb"><img src="https://avatars.githubusercontent.com/u/54823205?v=4?s=100" width="100px;" alt="Talison Fabio"/><br /><sub><b>Talison Fabio</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=talis-fb" title="Code">💻</a></td>
      <td align="center"><a href="https://c-j.tech"><img src="https://avatars.githubusercontent.com/u/3969086?v=4?s=100" width="100px;" alt="Chris Jones"/><br /><sub><b>Chris Jones</b></sub></a><br /><a href="#tool-cmjchrisjones" title="Tools">🔧</a></td>
      <td align="center"><a href="https://johnkolcun.com/"><img src="https://avatars.githubusercontent.com/u/104634518?v=4?s=100" width="100px;" alt="jkol7"/><br /><sub><b>jkol7</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=jkol7" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center"><a href="https://siddharth1729.github.io/sid.github.io/"><img src="https://avatars.githubusercontent.com/u/46781764?v=4?s=100" width="100px;" alt="Siddharth Pandey"/><br /><sub><b>Siddharth Pandey</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=siddharth1729" title="Code">💻</a></td>
      <td align="center"><a href="https://aharrison.xyz"><img src="https://avatars.githubusercontent.com/u/8920897?v=4?s=100" width="100px;" alt="Alex Harrison"/><br /><sub><b>Alex Harrison</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=alexjharrison" title="Code">💻</a></td>
      <td align="center"><a href="https://derzan.dev/"><img src="https://avatars.githubusercontent.com/u/76019114?v=4?s=100" width="100px;" alt="Derzan Chiang"/><br /><sub><b>Derzan Chiang</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=MiTo0o" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/ATH42"><img src="https://avatars.githubusercontent.com/u/80352300?v=4?s=100" width="100px;" alt="ATH"/><br /><sub><b>ATH</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=ATH42" title="Documentation">📖</a></td>
    </tr>
  </tbody>
  <tfoot>
    
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
