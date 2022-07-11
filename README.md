## Overview

This repo is a boilerplate for create web application using [ReactJS](https://reactjs.org/).
This is Front-end test project.

## Quiz
- 1. develop brance
- 2. feature/web-socket

## Features

- Styling with [EmotionJS](https://emotion.sh/docs/introduction)
- UI Framework using [Antd](https://ant.design/)
- Testing using [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library)
- Code validation and pre-commit git hook using [ESLint](https://eslint.org/), [Husky](https://www.npmjs.com/package/husky) and [LintStage](https://github.com/okonet/lint-staged)
- Bundle Analyzer

### Setup

Create .env file in root directory.

```bash
REACT_APP_API_URL="{API}"
REACT_APP_SOCKET_URL="{WS}"
```

Install dependencies:

```bash
yarn
```

### Development

```bash
yarn run dev
```

### Testing

Start the dev server:

```bash
yarn run test
```

## Production

```bash
yarn run build
yarn start
```
