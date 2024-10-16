"use strict";
function *myGenerator() {
    yield "hello";
    yield 'lavishka';
    yield 'hi';
  }
  
  const gen = myGenerator();
  
  console.log(gen.next()); 
  console.log(gen.next()); 
  console.log(gen.next());

  