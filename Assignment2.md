# Assignment 2 -- Continuous Integration and Delivery

Instructions

1. Build a Github Actions workflow that lints and runs unit tests on every new Pull Request 

- Use the previous repository that your team created for Assignment #1.
- Create a .github/workflows directory using the "mkdir -p .github/workflows". This directory is where you define all your github actions using individual YAML files. 
- Once you create your directory, add a YAML file and title it "lin_and_test.yml". 
- Inside your YAML file add the neccessary steps for checkout, environment setup, dependencies linting, and unit tests.
- Commit your workflow file.

2. Build a Github Actions workflow that builds and deploys the static site on every merge to develop to GCP

3. Build a Github Actions workflow that builds and deploys the static site on every merge to develop to AWS

Create a PR with the CI/CD workflows and submit a link to the PR and the latest commit to moodle
