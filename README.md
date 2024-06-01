# CICDTesting
Integrating CI CD with test so they run before merging any pull request to the main branch and making the tests for the code.

# Testing with CI CD pipeline

# Create a simple app

Final code - https://github.com/pu5hp/CICDTesting

Jest is one of many famous testing frameworks in Typescript

- Initialize a simple TS project

`npm init -y
npx tsc --init`

- Change rootDir and srcDir

`"rootDir": "./src",
"outDir": "./dist",`

- Create `src/index.ts`

`export function sum(a: number, b: number) {
    return a + b
}`

- Add ts-jest as a dependency

`npm install --save-dev ts-jest  @jest/globals`

- Initialize jest.config.ts

`npx ts-jest config:init`

- Update package.json

`"scripts": {
    "test": "jest"
},`

- Add tests (index.test.ts)

`import {describe, expect, test} from '@jest/globals';
import {sum} from '../index';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});`

- Run `npm run test`

# Adding a CI/CD pipeline

- Create a CI/CD pipeline that runs `npm run test`
- Create `.github/workflows/test.yml`

```
name: CI/CD Pipeline

on:
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm run test

```

# How to Check the CI CD Pipeline

1. Create a new Branch ‘testing1’ and change src/index.ts 

```jsx

export function sum(a:number, b:number){
    return a+b+0;
}

changed the function to below

export function sum(a:number, b:number){
    return a-b;
}
```

1.  Pushes the branch to their forked repository on a hosting service like GitHub, and then create a pull request. This PR requests that the changes be merged into the original repository.
2. When the PR is merged with Main branch the test.yml file runs and all the tests run if the tests are successful then they are merged else it remains in error state.

# Failed PR Case:

This is the failed PR case

![Screenshot 2024-06-01 at 3.51.27 PM.png](Testing%20with%20CI%20CD%20pipeline%20df36653f919c4e2695f6203e30ae5a08/Screenshot_2024-06-01_at_3.51.27_PM.png)

![Screenshot 2024-06-01 at 3.54.50 PM.png](Testing%20with%20CI%20CD%20pipeline%20df36653f919c4e2695f6203e30ae5a08/Screenshot_2024-06-01_at_3.54.50_PM.png)
