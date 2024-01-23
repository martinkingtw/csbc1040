Github Actions

1. lint_and_test.yml

Install ESLint, Mocha, Chai and Jsdom
Setup linter
Setup testing script at samples/counter-app/public/script.test.js
Setup .github/workflows/lint_and_test.yml to run Github Actions
The action will be run on every new pull request
The content of the YAML file is
Checkout, Setup environment, Run linter, Run unit testing

2. gcp.yml

Create a service account on GCP for Github
Add the service account as a member to the Cloud Storage buckets of the project
Enable Cloud Build API to the project
Setup all the necessary permissions in IAM service account
App Engine Admin, App Engine Deployer, App Engine Service Admin, Storage Object Creator, Storage Object Viewer
Add GCP_PROJECT (project id) and GCP_CREDENTIALS (service account keys) to Github secrets
Setup samples/counter-app/.gcloudignore to specify the files to ignore
Setup samples/counter-app/app.yaml to specify the build and serve environments
Setup .github/workflows/gcp.yml to run Github Actions
The action will be run on every merge to develop branch. It is a protected branch, must merge to commit.
The content of the YAML file is
Deploy to GCP with the specified app.yaml file. (samples/counter-app/app.yaml)

3. aws.yml

Create a credentials for AWS Amplify
Add AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY to Github secrets
Disable auto building on AWS Amplify hosting environment
Setup amplify.yml to specify the build and serve environments
Setup .github/workflows/aws.yml to run Github Actions
The action will be run on every merge to develop branch. It is a protected branch, must merge to commit.
The content of the YAML file is
Deploy to AWS with the specified app id and the amplify.yml build environments