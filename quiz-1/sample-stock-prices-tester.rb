require './find-best-deal.rb'

tests = [
  {
    prices: [5, 6, 4, 7, 9, 8, 8],
    profit: 5
  },
  {
    prices: [1, 2, 3, 4, 5],
    profit: 4
  }
]

tests.each do |test|
  result = StockDealFinder.find_best_deal(test[:prices])
  passed = result == test[:profit]

  unless passed
    puts '----------------------------------------------'
    puts "Expected: #{test[:profit]}, Actual: #{result || 'no result'}"
  end

end
