

'use strict';
console.log('Loading event');
            
exports.handler = function(event, context) {
  
  var name = '';
  if (event.name === '' || event.name === undefined){ 
    name = 'No-Name';
  } else {
    name = event.name;
  }
  
  
  if (name !== 'No-Name') {
    
    console.log('"Hello":"' + name + '"');
    context.done(null, {"Hello":name}); // SUCCESS with message
  
  } else {
    
    console.log('"Hello":"World"');
    context.done(null, {"Hello":"World"});  // SUCCESS with message
      
  }

    
    
};