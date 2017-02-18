# tsb-stat-extractor-es6 &middot; [![CircleCI](https://circleci.com/gh/retro-games/tsb-stat-extractor-es6/tree/master.svg?style=shield)](https://circleci.com/gh/retro-games/tsb-stat-extractor-es6/tree/master) [![Build Status](https://travis-ci.org/retro-games/tsb-stat-extractor-es6.svg?branch=master)](https://travis-ci.org/retro-games/tsb-stat-extractor-es6) [![Coverage Status](https://coveralls.io/repos/github/retro-games/tsb-stat-extractor-es6/badge.svg)](https://coveralls.io/github/retro-games/tsb-stat-extractor-es6) [![Stories In Progress](https://badge.waffle.io/retro-games/tsb-stat-extractor-es6.png?label=In%20Progress&title=In%20Progress)](http://waffle.io/retro-games/tsb-stat-extractor-es6)

*A stat extractor for TSB save states, written in ECMAScript 6*

Current save states supported:
 * **TSB-NES (Nestopia)**
 
 ## Example
 
 ```javascript
 let reader = new FileReader();
 
 reader.onload = function() {
    const arrayBuffer = reader.result;
    const buffer = new Uint8Array(arrayBuffer, 0, arrayBuffer.byteLength);
    console.log(extract(buffer));
 };
 
 reader.readAsArrayBuffer(file);
 ```