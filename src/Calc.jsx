import React from 'react'

function add(a,b){
  return a + b;
}

function sub(a,b){
  return a - b;
}

function div(a,b){
  return (a / b).toFixed(2);
}

function mult(a,b){
  return a * b;
}

export {add, sub, mult, div};