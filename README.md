# WRF Center

## Resources
 - GRPC issue upon first `npm i`? Go [here](https://github.com/grpc/grpc-node/issues/1183)
 - AWS Amplify Console redirects [here](https://stackoverflow.com/questions/57449853/react-router-dom-not-working-correctly-on-amplify-console-aws)

## Setup
 - Setup via amplify [tutorial](https://docs.amplify.aws/start/q/integration/react)
    - Skipped the GraphQL and Auth layer for the time being. May migrate to AWS auth, using firebase auth right now
 - GraphQL Setup for relational source [here](https://docs.amplify.aws/cli/graphql-transformer/relational)
 
## Dev/Local
 - `npm start dev` works just fine as long as you've `npm i` first

## Prod
 - Yep, from dev to prod. We test in dev. We dine in hell. Once dev is tested, it's merged into master and amplify picks it and rebuilds.