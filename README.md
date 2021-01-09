# Respibook frontend

Frontend interface for the Respibook recipe manager.

## Get started

Install the dependencies...

```bash
npm install
```

or

```bash
yarn
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

or

```bash
yarn dev
```

Navigate to [localhost:3000](http://localhost:3000). You should see your app running.


## Building and running in production mode

`Dockerfile` is provided, run

```bash
docker build -t respibook-frontend .
docker run -d -p 8080:80 respibook-frontend
```
