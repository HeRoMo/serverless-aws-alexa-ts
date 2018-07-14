# Serverless Template for Alexa Skill by Typescript

This is a template of Serverless framework for Alexa skill.

## Overview
- A template of Serverless Framework app for Alexa skill by Typescript
- Build by webpack
- Ready for tslint
- Output source maps
- Ready for TDD, by [Jest](https://jestjs.io/) with [virtual-alexa](https://github.com/bespoken/virtual-alexa)
- Config file enable
- Support DynamoDB for Persistent Attributes. <br>(Ready for DynamoDB local by using [serverless-dynamodb-local](https://github.com/99xt/serverless-dynamodb-local))

## Requirements
- Installing [Serverless Framework](https://serverless.com/)
- AWS credential

## Usage

### Setup
Run the following command.<br>
You can create your serverless application for Alexa Skill, based on this template.

```bash
$ serverless install --url https://github.com/HeRoMo/serverless-aws-alexa-ts --name your-app-name
$ cd your-app-name
$ npm install
```

### Config file
Copy *config/config.yml.template* to *config/config.yml*,
and modify config.yml for your skill.

```bash
$ cp config/config.yml.template config/config.yml
```

### Implement Requedt Handlers
There are basically request hander implementations in *src/handlers*.
Please modify these files and add other handlers for your skill.

#### Writing SSML
This template include [ssml-builder](https://github.com/mandnyc/ssml-builder) (with type difinition!).
You can make SSML speach text easily by using this library.
a tiny sample is in [HelloIntentHandler.ts](src/handlers/HelloIntentHandler.ts).

For details, please see [ssml-builder](https://github.com/mandnyc/ssml-builder).

### Interaction Model Management
You can manage Interaction Model JSON file of your Skill.

At first, you should run `ask-cli init` for initialize ask-cli. For details, please see [ask-cli document](https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html#init-command).

Next, create *.npmrc* file by the following command

```bash
$ echo 'skill_id = <your skill id>' > .npmrc
```

Then, you can get and update model by the following commands.
```bash
npm run ask:get-model    # get model json from Alexa console
npm run ask:update-model # put model json to console and rebuild  model
```

If you don't use **ja_JP**, please modify or add npm script of package.json for your skill language.

### Testing

#### Using Jest test suite
This template includes Jest and virtual-alexa.
See a sample implementation in [alexa.spec.ts](__tests__/integrations/alexa.spec.ts).

To execute the test suite, use `npm test`.

**NOTICE:** virtual-alexa use model json so you have to run `npm run ask:get-model` before test.
( This template has a sample model json. )

#### Using Debugger
If using Visual Studio Code, you can use debugger easy.
This template has sample config. see *.vscode/launch.json*.

### Deploy
Run the following command to deploy your hanlder to AWS Lambda.

```bash
$ npm run sls:deploy
```

### DynamoDB
If you would like to use DynamoDB to persist attributes,
uncomment the code for DynamoDB in *index.ts* and *serverless.yaml*.

### Local DynamoDB
When testing and debugging, you can use local DynamoDB

Run the following command to install local DynamoDB.

```bash
$ npm run sls:dynamodb:install
```

Run the following command to install local DynamoDB.

```bash
$ npm run sls:dynamodb:start
```

For details, please see [Serverless Dynamodb Local Plugin](https://github.com/99xt/serverless-dynamodb-local)

## License
MIT
