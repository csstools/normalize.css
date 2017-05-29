# normalize.css

<a href="https://github.com/jonathantneal/normalize.css"><img
  src="https://jonathantneal.github.io/normalize.css/logo.svg" alt="normalize.css logo"
  width="80" height="80" align="right"></a>

[normalize.css] is a CSS library which provides cross-browser consistency in
the default styling of HTML elements.

## Usage

```sh
npm install --save jonathantneal/normalize.css
```

**Download**

See https://jonathantneal.github.io/normalize/latest/normalize.css


## What does it do?

* Normalizes styles for a wide range of elements.
* Corrects bugs and common browser inconsistencies.
* Explains what code does using detailed comments.

## Browser support

* Chrome (last three)
* Edge (last three)
* Firefox (last three)
* Firefox ESR
* Internet Explorer 8+
* iOS Safari (last three)
* Opera (last three)
* Safari 6+

## Extended details and known issues

Additional detail and explanation of the esoteric parts of normalize.

#### `pre, code, kbd, samp`

The `font-family: monospace, monospace` hack fixes the inheritance and scaling
of font-size for preformatted text. The duplication of `monospace` is
intentional. [Source](https://en.wikipedia.org/wiki/User:Davidgothberg/Test59).

#### `sub, sup`

Normally, using `sub` or `sup` affects the line-box height of text in all
browsers. [Source](https://gist.github.com/413930).

#### `svg:not(:root)`

Adding `overflow: hidden` fixes IE9's SVG rendering. Earlier versions of IE
don't support SVG, so we can safely use the `:not()` and `:root` selectors that
modern browsers use in the default UA stylesheets to apply this style.
[Source](https://lists.w3.org/Archives/Public/public-svg-wg/2008JulSep/0339.html).

#### `select`

By default, Chrome on OS X and Safari on OS X allow very limited styling of
`select`, unless a border property is set. The default font weight on `optgroup`
elements cannot safely be changed in Chrome on OSX and Safari on OS X.

#### `[type="checkbox"]`

It is recommended that you do not style checkbox and radio inputs as Firefox's
implementation does not respect box-sizing, padding, or width.

#### `[type="number"]`

Certain font size values applied to number inputs cause the cursor style of the
decrement button to change from `default` to `text`.

#### `[type="search"]`

The search input is not fully stylable by default. In Chrome and Safari on
OSX/iOS you can't control `font`, `padding`, `border`, or `background`. In
Chrome and Safari on Windows you can't control `border` properly. It will apply
`border-width` but will only show a border color (which cannot be controlled)
for the outer 1px of that border. Applying `-webkit-appearance: textfield`
addresses these issues without removing the benefits of search inputs (e.g.
showing past searches). Safari (but not Chrome) will clip the cancel button on
when it has padding (and `textfield` appearance).

#### `::placeholder`

In Edge, placeholders will disappear on `relative` or `absolute` positioned
`<input>` elements if you use `opacity` less than `1` due to a [bug](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/3901363/).

## Contributing

Please read the [contribution guidelines](CONTRIBUTING.md) in order to make the
contribution process easy and effective for everyone involved.

## Similar Projects

- [opinionate.css](https://github.com/adamgruber/opinionate.css) - Supplement to normalize, restores opinionated rules removed in v6
- [sanitize.css](https://github.com/jonathantneal/sanitize.css) - Alternative to normalize, adheres to common developer expectations and preferences

## Acknowledgements

Normalize is a project by [Jonathan Neal](https://github.com/jonathantneal),
co-created with [Nicolas Gallagher](https://github.com/necolas).
