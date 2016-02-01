var Vue = require('vue');
var base = require('./base.vue');
var module = require('./module.vue');
var typography = require('./typography.vue');

var header = require('./_header.vue');

new Vue({
  el: 'body',
  components: {
    base: base,
    pageheader: header,
    module: module,
    typography: typography
  },
});
