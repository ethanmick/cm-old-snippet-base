var Q = require('q');

var AnyKey = '<%- any_key %>';

setupTesting({
  passed_in: 'a key from the caller, now available in data.params',
});

var MyService = require_my_service();

Q().then(function() {
  exit({example: AnyKey, works: MyService.method()});
}).fail(function(err) {
  exit({error: err});
});

<% include ../lib/index.js %>
<% include ../lib/test.js %>
