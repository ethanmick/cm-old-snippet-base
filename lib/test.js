function setupTesting(dummyData) {
  if (typeof exit !== 'undefined') return;

  exit = function(result) {
    if (result && result.error && result.error.stack) {
      console.log(result.error);
      console.log(result.error.stack);
    }

    console.log(JSON.stringify({result: result}));
    process.exit();
  };

  data = {
    params: dummyData
  };
}
