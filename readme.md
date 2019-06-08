# local-csp-reporter [![Build Status](https://travis-ci.org/radiovisual/local-csp-reporter.svg?branch=master)](https://travis-ci.org/radiovisual/local-csp-reporter) [![Coverage Status](https://coveralls.io/repos/github/radiovisual/local-csp-reporter/badge.svg?branch=master)](https://coveralls.io/github/radiovisual/local-csp-reporter?branch=master)

> A simple localhost server to log CSP violations

Useful for testing and debugging Content Security Policies

## Install

```
$ npm install -g local-csp-reporter
```


## Usage

After installation, you have a command you can run from the terminal to start the server:

```
$ local-csp-reporter
```

Now you can use `http://localhost:3003/report-violation` as your [**report-uri** and **report-to**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri) directives in your Content Security Policy.

:rainbow:

## Port Assignment

If you want to change the default port number, use the `PORT` enviornment variable: 

```
$ PORT=8001 local-csp-reporter                
```

## License

MIT © [](https://github.com/radiovisual)
