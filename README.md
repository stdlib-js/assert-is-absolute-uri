<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isAbsoluteURI

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test whether a value is an absolute [URI][uri].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-absolute-uri
```

</section>

<section class="usage">

## Usage

```javascript
var isAbsoluteURI = require( '@stdlib/assert-is-absolute-uri' );
```

#### isAbsoluteURI( value )

Tests whether a value is an absolute [URI][uri].

```javascript
var bool = isAbsoluteURI( 'http://example.com' );
// returns true

bool = isAbsoluteURI( './beep/boop' );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For more information regarding the URI scheme, see [RFC 3986][rfc-3986] and [Wikipedia][uri].
-   On the distinction between URI, URL, and URN, see [The Difference Between URLs and URIs][difference-url-uri].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isAbsoluteURI = require( '@stdlib/assert-is-absolute-uri' );

var bool = isAbsoluteURI( 'https://www.google.com/' );
// returns true

bool = isAbsoluteURI( 'https://www.google.com/search?q=node.js' );
// returns true

bool = isAbsoluteURI( 'https://www.google.com#footer' );
// returns true

bool = isAbsoluteURI( '/search?q=node.js' );
// returns false

bool = isAbsoluteURI( 'C:\\Users\\nodejs\\node.js' );
// returns false

bool = isAbsoluteURI( null );
// returns false
```

</section>

<!-- /.examples -->


<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/assert-is-absolute-uri
```

</section>

<section class="usage">

### Usage

```text
Usage: is-absolute-uri [options] [<uri>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ is-absolute-uri https://google.com
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'https://google.com' | is-absolute-uri
true
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'https://google.com\tbeep' | is-absolute-uri --split '\t'
true
false
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-absolute-uri.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-absolute-uri

[test-image]: https://github.com/stdlib-js/assert-is-absolute-uri/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-absolute-uri/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-absolute-uri/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-absolute-uri?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-absolute-uri.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-absolute-uri/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-absolute-uri/main/LICENSE

[uri]: http://en.wikipedia.org/wiki/URI_scheme

[rfc-3986]: https://tools.ietf.org/html/rfc3986

[difference-url-uri]: https://danielmiessler.com/study/url-uri/

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
