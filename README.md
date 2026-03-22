## Prerequisites:

You need
Node installed
Docker installed and open

## Install dependencies

run: npm install

## Run Storybook

run: npm run storybook

## Run the tests

run: npm test

## Run quality checks

run: npm run check:precommit

# Docker Build and Run

## Build the image

run: docker build -t zack-deboer-ui-garden-assignment13 .

## Run the container

run: docker run --name deboer_zack_coding_assignment13 -p 8018:8018 zack-deboer-ui-garden-assignment13

## Open the app in your browser

Visit http://localhost:8018

## Stop the container

run: docker stop deboer_zack_coding_assignment13

## Remove the container

run: docker rm deboer_zack_coding_assignment13

# Github Actions

## On every push and pull request, Github Actions runs:

- rettier check
- ESLint check
- Tests
- Build
