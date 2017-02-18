# tsb-stat-extractor &middot; [![CircleCI](https://circleci.com/gh/retro-games/tsb-stat-extractor/tree/master.svg?style=shield)](https://circleci.com/gh/retro-games/tsb-stat-extractor/tree/master) [![Build Status](https://travis-ci.org/retro-games/tsb-stat-extractor.svg?branch=master)](https://travis-ci.org/retro-games/tsb-stat-extractor) [![Coverage Status](https://coveralls.io/repos/github/retro-games/tsb-stat-extractor/badge.svg)](https://coveralls.io/github/retro-games/tsb-stat-extractor) [![npm version](https://img.shields.io/npm/v/tsb-stat-extractor.svg?style=flat)](https://www.npmjs.com/package/tsb-stat-extractor) [![Stories In Progress](https://badge.waffle.io/retro-games/tsb-stat-extractor.png?label=In%20Progress&title=In%20Progress)](http://waffle.io/retro-games/tsb-stat-extractor)

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