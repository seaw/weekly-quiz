'use strict';

var findBestDeal = require('./index.js');
var chai = require('chai');
var expect = chai.expect;

var tests = [
  {
    prices: [5, 6, 4, 7, 9, 8, 8],
    profit: 5
  },
  {
    prices: [1, 2, 3, 4, 5],
    profit: 4
  }
];

describe('find best deal', function() {
  tests.forEach(function (test) {
    it('Check answer is correct' , function () {
      expect(findBestDeal.findBestDeal(test.prices)).to.equal(test.profit);
    });
  });

  tests.forEach(function (test) {
    it('Check answer is correct(using one for loop)' , function () {
      expect(findBestDeal.findBestDealUsingOneForLoop(test.prices)).to.equal(test.profit);
    });
  });


});
