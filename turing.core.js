(function(global){
  var turing = {
    VERSION: '0.0.1', 
    lesson: 'Part 1: Library Architecture'
  };

  if (global.turing) {
    throw new Error('turing: top-level turing object already exists!');
  }
  else {
    global.turing = turing;
  }

})(typeof window === 'undefined' ? this : window);