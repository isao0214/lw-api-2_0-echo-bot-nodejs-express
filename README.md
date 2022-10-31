# LINE WORKS API 2.0 Echo bot Sample - Node.js Express
Sample code for LINE WORKS API 2.0 bot

## Description
Sample code of LINE WORKS Bot supported with API 2.0 using [Express](https://expressjs.com/).

## Getting Started
### Requirements

- Node.js >= 16

### Prepare parameters
Create App and generate parameters on LINE WORKS Developer Console.
https://developers.worksmobile.com/jp/reference/authorization-sa?lang=ja

### Set env

```sh
export LW_API_BOT_ID=1111111
export LW_API_BOT_SECRET=xxxxxxxxxx
export LW_API_CLIENT_ID=xxxxxxxx
export LW_API_CLIENT_SECRET=xxxxxx
export LW_API_SERVICE_ACCOUNT=xxxxx@xxxxxxx
export LW_API_PRIVATEKEY="-----BEGIN PRIVATE KEY-----
xxxxxxxxxxxxxxxxxxxxxxxx
-----END PRIVATE KEY-----"
```

### Run
Choose between "Manual" or "Docker"
#### Manual

```sh
npm install
node index.js
```

#### Docker

```sh
docker compose up -d --build
```

## Contribution

1. Fork ([https://github.com/mmclsntr/lw-api-2_0-echo-bot-nodejs-express](https://github.com/mmclsntr/lw-api-2_0-echo-bot-nodejs-express))
1. Create a feature branch
1. Commit your changes
1. Rebase your local changes against the master branch
1. Create a new Pull Request

## Authors
[mmclsntr](https://github.com/mmclsntr)

## License
[MIT](LICENSE.txt)

