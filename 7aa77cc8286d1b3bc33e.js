function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,t){if(r){if("string"==typeof r)return _arrayLikeToArray(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(r,t):void 0}}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _arrayLikeToArray(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=r[e];return o}function makeRequest(r,t,e,o){var n=new XMLHttpRequest;n.onreadystatechange=function(){var r=n.status;if(n.readyState===XMLHttpRequest.DONE)if(r>=200&&r<400){var t=JSON.parse(n.responseText);e({responseData:t})}else e({error:new Error(n.statusText)})},n.open(r,t),n.send(o||null)}var stringifyJSON=function r(t){if(void 0!==t)return null===t?"null":t.constructor===String?'"'.concat(t.replace(/"/g,'\\"'),'"'):t.constructor===Number?String(t):t.constructor===Boolean?t?"true":"false":t.constructor===Array?"[ ".concat(t.reduce((function(t,e){return[].concat(_toConsumableArray(t),void 0===e?["null"]:[r(e)])}),[]).join(", ")," ]"):t.constructor===Object?"{ ".concat(Object.keys(t).reduce((function(e,o){return void 0===t[o]?e:[].concat(_toConsumableArray(e),["".concat(r(o),":").concat(r(t[o]))])}),[]).join(", ")," }"):"{}"};makeRequest("GET","https://data.wa.gov/resource/f6w7-q2d2.json",(function(r){if(r.error)throw r.error;console.log(r);var t={};r.responseData.forEach((function(r){t[r.make]?t[r.make]+=1:t[r.make]=1})),Object.keys(t).forEach((function(r){document.querySelector(".ajax").innerHTML+="<p>".concat(r,": ").concat(t[r],"</p>")})),console.log(t)}));