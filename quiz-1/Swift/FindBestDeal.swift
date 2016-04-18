func findBestDeal(withPrices prices: [Int]) -> Int {
  let count = prices.count - 1
  var min = Int.max
  var deal = 0
  
  for index in 0 ..< count {
    let currentValue = prices[index]
    let nextValue = prices[index + 1]
    
    if min > currentValue {
      min = currentValue
    }
    
    let dealValue = nextValue - min
    
    if dealValue > deal {
      deal = dealValue
    }
  }
  
  return deal
}


var stockPricesYesterday = [5, 6, 4, 7, 9, 8, 8]
print("stockPricesYesterday: \(stockPricesYesterday)")
var result = findBestDeal(withPrices: stockPricesYesterday)
print("result: \(result)")


stockPricesYesterday = [1, 2, 3, 4, 5]
print("stockPricesYesterday: \(stockPricesYesterday)")
result = findBestDeal(withPrices: stockPricesYesterday)
print("result: \(result)")