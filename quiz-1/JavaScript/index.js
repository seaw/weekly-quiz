'use strict';

var inquirer = require('inquirer');
var _ = require('lodash');


function stringToInt(prices){
  var splitPrices = prices.split(',');
  return  _.map(splitPrices, function (price) {
    return parseInt(price, 10);
  });
}
function findBestDeal(historicalPrices){
  var profit = 0;
  for (var pricesIndex = 0; pricesIndex < historicalPrices.length; pricesIndex++){
    for (var nextPriceIndex = pricesIndex + 1; nextPriceIndex < historicalPrices.length; nextPriceIndex++){
      var buyingPrice = historicalPrices[pricesIndex];
      var sellingPrice = historicalPrices[nextPriceIndex]
      if(sellingPrice - buyingPrice > 0){
        var currentProfit = sellingPrice - buyingPrice;
        if (currentProfit > profit){
         profit = currentProfit;
        }
      }
    }
  }
  console.log('profit',profit);
  return profit
}

inquirer.prompt([
    {type: 'input', name: 'prices', message: 'Historical stock prices' }
  ],
  function (answers) {
    findBestDeal(stringToInt(answers.prices));
  });

module.exports = {
  findBestDeal: findBestDeal
};




