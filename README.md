# circleci-2.0-beta-docker-example

This is an example project for building Docker images on [CircleCI 2.0 Beta](https://circleci.com/beta-access/). This project covers:

- Building Docker images in Docker CI container
- Caching Docker image layers without using [potential premium feature](https://circleci.com/docs/2.0/docker-layer-caching/)
- Testing Docker images using [Docker Compose](https://docs.docker.com/compose/)
- Pushing Docker images to [Amazon EC2 Container Registry](https://aws.amazon.com/jp/ecr/)

## Development Setup

The example application in this project is fairly simple. To launch the app, just run:

```bash
$ docker-compose up
```

Then, you will get `Hello World!` if you `curl localhost:8000`. 

## Amazon EC2 Container Registry Setup

1. Create an AWS account and an IAM user with enough permissions

2. Move to `terraform` directory

    ```bash
    $ cd terraform
    ```

3. Copy `terraform.tfvars.example` to `terraform.tfvars` and fill in values

4. Run terraform command

    ```bash
    $ terraform plan && terraform apply
    ```

## CircleCI Setup

You need to set the following environment variables on CircleCI UI:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_DEFAULT_REGION`
- `ECR_ENDPOINT`: e.g. `<ACCOUNT-ID>.dkr.ecr.ap-northeast-1.amazonaws.com`

## License

Copyright © 2017 Naoto Yokoyama

Distributed under the MIT license. See the [LICENSE](./LICENSE) file for full details.
