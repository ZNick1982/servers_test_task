
# Getting Started
## Dependencies
Tools needed to run this app:
* `node` and `npm`
Once you have these, install the following as globals:  
`npm install -g gulp karma karma-cli webpack`

## Installing
* `npm install -g gulp karma karma-cli webpack` install global cli dependencies
* `npm install` to install dependencies
 
### Gulp Tasks
Here's a list of available tasks:
* `webpack`
  * runs Webpack, which will transpile, concatenate, and compress (collectively, "bundle") all assets and modules into `dist/bundle.js`. It also prepares `index.html` to be used as application entry point, links assets and created dist version of our application.
* `serve`
  * starts a dev server via `webpack-dev-server`, serving the client folder.
* `watch`
  * alias of `serve`
* `default` (which is the default task that runs when typing `gulp` without providing an argument)
	* runs `serve`.
  
### Testing
To run the tests, run `npm test` or `karma start`.

`Karma` combined with Webpack runs all files matching `*.spec.js` inside the `app` folder. This allows us to keep test files local to the component--which keeps us in good faith with continuing to build our app modularly. The file `spec.bundle.js` is the bundle file for **all** our spec files that Karma will run.

Be sure to define your `*.spec.js` files within their corresponding component directory. You must name the spec file like so, `[name].spec.js`. If you don't want to use the `.spec.js` suffix, you must change the `regex` in `spec.bundle.js` to look for whatever file(s) you want.
`Mocha` is the testing suite and `Chai` is the assertion library. If you would like to change this, see `karma.conf.js`.


## Mock data template

Mock data template for http://www.json-generator.com/

```
[
  '{{repeat(7, 10)}}',
  {
    id: '{{guid()}}',
    name: '{{firstName()}} {{surname()}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    picture: 'http://lorempixel.com/400/400/business/',
    
    messages: [
      '{{repeat(5, 20)}}',
      {
        id: '{{guid()}}',
		    text: '{{lorem(1, "paragraphs")}}',
        date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}'
      }
    ]
  }
]
```
