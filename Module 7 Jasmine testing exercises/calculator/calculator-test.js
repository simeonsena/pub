
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 10,
    rate: 10
  };
  expect(calculateMonthlyPayment(values)).toEqual('132.15');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10000,
    years: 10,
    rate: 10
  };
  expect(calculateMonthlyPayment(values)).toEqual('132.15');
});

it("should be able to handle very large numbers", function() {
  const values = {
    amount: 9910000,
    years: 30,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('817575.00');
});

it("should be able to handle decimals and still round to 2 decimal places", function() {
  const values = {
    amount: 9910.123,
    years: 30.333,
    rate: 99.999
  };
  expect(calculateMonthlyPayment(values)).toEqual('825.84');
});


/// etc
