fastTrack = {
	filterNumericChars : function(series) {
		return _.filter(series.split(''), function(char) { return !isNaN(char); });
	},

	parseInts : function(chars) {
		return _.map(chars, function(char) { return parseInt(char) ;});
	},

	splitIntoArraysOfFive : function(arrayOfNumbers) {
		var n = 5;
		arrays =  _.map(arrayOfNumbers, function(value, index, list) {
			return list.length >= index + n  ? list.slice(index, index + n) : null; 
		});
		return _.filter(arrays, function(array) { return array !== null; });
	},

	calculateProducts : function(arraysOfArraysOfFive) {
		return _.flatten(_.map(arraysOfArraysOfFive, function(array) {
			return _.reduce(array, function(memo, num) {return memo*num;}, 1);
		}));
	},

	fastTrack : function(string) {
		return _.max(
				  this.calculateProducts(
				    this.splitIntoArraysOfFive(
					  this.parseInts(
					    this.filterNumericChars(string)))));
		}
};