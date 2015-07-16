'use strict';

/* Filters */

angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

/*
The name of our filter is "checkmark". The input evaluates to either true or false,
and we return one of the two unicode characters we have chosen to represent true (\u2713 -> ✓) or false (\u2718 -> ✘).
*/
