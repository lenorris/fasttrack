test( "filterNumericChars filters out non numeric characters", function() {
  var result = fastTrack.filterNumericChars("h5a3f2@8)1g");
  var expected = ["5", "3", "2", "8", "1"];
  deepEqual(result, expected, "returns an array of numerical chars");
});

test( "parseInts returns an array of integers", function() {
  var result = fastTrack.parseInts(["5", "3", "2", "8", "1"]);
  var expected = [5, 3, 2, 8, 1];
  deepEqual(result, expected, "returns an array of numerical chars");
});

test( "splitIntoArraysOfFive splits into arrays of five", function() {
  var result = fastTrack.splitIntoArraysOfFive([1, 2, 3, 4, 5, 6]);
  var expected = [[1, 2, 3, 4, 5], [2, 3, 4, 5, 6]];
  deepEqual(result, expected, "returns split arrays of five");
});

test( "calculateProducts calculates products of arrays of five", function() {
  var result = fastTrack.calculateProducts([[1, 2, 3, 4, 5], [2, 3, 4, 5, 6]]);
  var expected = [1*2*3*4*5, 2*3*4*5*6];
  deepEqual(result, expected, "calculates products and flattens");
});

test("fastTrack returns the greatest product of 5 consecutive numbers of a string", function() {
  var result = fastTrack.fastTrack("a6c5jjj4kk3k2ll1jj2kk3kk4kk5jjj99999jjj@@@@");
  var expected = 9*9*9*9*9;
  equal(result, expected, ":'(");

});
