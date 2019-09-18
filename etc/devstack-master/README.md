# bpromotion devstack

## Basics

We are using gulp:

```bash
$ npm i
$ npm run gulp serve
```

All source assets are in `src` folder.

* `src/html` - Nunjucks templates. They're converted to HTML.
* `src/js` - Javacript modules. They're converted from ESnext to ES5 with Webpack.
* `src/scss` - Sass styles. They're converted to - wait for it - CSS!

Static assets like images should go to `public` folder.

## Gulp build

We can build the result in two ways: in-memory build and static files build.

For developing, we use in-memory build:
```bash
$ npm run gulp serve
```

For static website build (testing, staging, whatever):
```bash
$ npm run gulp build
```

But "static website" build doesn't mean it's ready for production.

For production we have to provide a `--production` flag like this:
```bash
$ npm run gulp build -- --production
```

This will minify and optimize code for production.

## What is going on while building?

### Nunjucks and HTML

We use Nunjucks as a template system. Every nunjucks file in `src/html` is converted to plain HTML file, meaning every nunjucks file in folder root serves as a website page. You can put partial templates or shared page layouts in subfolders, but subfolders are never converted to website pages.

The structure of folders and files is up to you, but we prefer you do it this way ;)

* `./index.nunjucks` - Homepage or pages list.
* `./{pageName}.nunjucks` - Any project page.
* `./layout/{layoutName}.nunjucks` - Basic page layout (html, head, body etc.). Every project page should extend these layouts. Typically there should be just one default layout for whole project.
* `./includes/{includeName}.nunjucks` - Page partials which are included in project pages or in other partials. You can use it for shared parts of code or for long code splitting.

Do you need to process large amount of data? Like list 100 empoyees, show their names and photos in HTML? You can use JSON file as a data source. Every JSON file in `html` folder is parsed and you can access it via variable in Nunjucks. For example, `mypage.json` file's content can be accessed via `{{ mypage }}` variable.

### JavaScript

We use Webpack as a builder for JavaScript. Basic config should always allow to use ES6, ES7 and ES8. Feel free to modify the `webpack.config.js` file to your needs. JavaScript source files are located in `src/js` folder.

There is always one starting point for all scripts. It's a file:

* `./src/js/index.js`

### SCSS

We use Sass as a CSS preprocessor. Source files are in `src/scss` folder. Also, you should know, that after CSS is built, PostCSS comes to place, we use autoprefixer only though. 

There is always one starting point for all styles. It's a file:

* `./src/scss/main.scss`

Oh, and one more thing. Sass also use [sass-module-loader](https://www.npmjs.com/package/sass-module-importer), to make your life easier, when it comes to loading styles from `node_modules`.

## What's next?

Any problems? You want someone who will listen? Contact [Patrik Helta](mailto:patrik@bpromotion.cz).

# Luky's TODO:

- v css setřídění vlastností
- responsivní helpery
- automatizace minifikace obrázků
  - naming konvence pro velikost komprese
- lint javascriptů
- příklady použití gridu
- opravit grid v devstacku (správně je na UTA)
- sjednotit názvosloví na jeden typ
- příklady použití helperů, hlavně margin
- https://github.com/gilbox/css-bliss

# PW

- site template pro CMS
- propojení s devstackem