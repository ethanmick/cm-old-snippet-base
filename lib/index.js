function require_my_service() {
  var Q = require('q');
  
  function MyService() {
    this.value = 'key';
  };

  MyService.prototype.method = function() {
    return 42;
  };

  return MyService;
}
