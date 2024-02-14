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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isAbsoluteURI

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether a value is an absolute [URI][uri].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import isAbsoluteURI from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-absolute-uri@esm/index.mjs';
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import isAbsoluteURI from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-absolute-uri@esm/index.mjs';

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

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->



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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-absolute-uri.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-absolute-uri

[test-image]: https://github.com/stdlib-js/assert-is-absolute-uri/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/assert-is-absolute-uri/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-absolute-uri/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-absolute-uri?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-absolute-uri.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-absolute-uri/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/assert-is-absolute-uri#cli
[cli-url]: https://github.com/stdlib-js/assert-is-absolute-uri/tree/cli
[@stdlib/assert-is-absolute-uri]: https://github.com/stdlib-js/assert-is-absolute-uri/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-absolute-uri/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-absolute-uri/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-absolute-uri/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-absolute-uri/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-absolute-uri/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-absolute-uri/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-absolute-uri/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-absolute-uri/main/LICENSE

[uri]: https://en.wikipedia.org/wiki/URI_scheme

[rfc-3986]: https://tools.ietf.org/html/rfc3986

[difference-url-uri]: https://danielmiessler.com/study/url-uri/

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
