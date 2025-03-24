// write a simple express server
const express = require("express");
const app = express();
const port = 3000;
//  write a color change function
function changeColor() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  return color;
}
//  write a function that returns a random number
function randomNumber() {
  return Math.floor(Math.random() * 100);
}
//  write a function that returns a random string
function randomString() {
  return Math.random().toString(36).substring(7);
}
//  write a function that returns a random boolean
function randomBoolean() {
  return Math.random() >= 0.5;
}
// wap to write all the prime numbers between 1 to 100
function primeNumbers() {
  let primes = [];
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}
