<h1 align="center">graphql-serverless</h1>
<p align="center">Serverless app using graphql.</p>

### What is that ?

This is a `Hello World` app that uses [Serverless](https://www.serverless.com/) & [GraphQL](https://graphql.org/)

### Stack

- Dependencies:
	- `apollo-server-lambda`: Apollo Server
	- `graphql`: GraphQL
- Dev Dependencies
	- `serverless-offline`: Run Serverless Server Offline

### How to use ?

After download, just run this command to install the dependencies:

```
npm i
```

If you want to run the app offline, run this command:

```
npm run start
```
And the app will be running on `http:localhost:PORT/graphql`.

<br/>

If you want to deploy it to an AWS service, run this command:

```
sls deploy
```

<br/>

To check if the app is running, go to the route `/graphql`, and execute this query:
```
query {
  hello
}
```

The expected response is:

```
{
  "data": {
    "hello": "Hello world!"
  }
}
```
