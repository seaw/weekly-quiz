NSArray *stock_prices_yesterday = @[@5, @6, @4, @7, @9, @8, @8];
[self find_best_deal:stock_prices_yesterday];

- (void)find_best_deal:(NSArray*)stock_prices{
    int ear = 0;
    NSNumber *buy, *sell;
    for (int i=0; i<[stock_prices count]; i++) {
        NSNumber *buyObject = stock_prices[i];
        for (int j = i+1; j<[stock_prices count]; j++) {
            NSNumber *sellObject = stock_prices[j];
            if (sellObject > buyObject) {
                int profit = [sellObject intValue] - [buyObject intValue];
                if (profit > ear){
                    buy = buyObject;
                    sell = sellObject;
                    ear = profit;
                }
            }
        }
    }
    NSLog(@"buy at %@  sell at %@",buy, sell);
}
