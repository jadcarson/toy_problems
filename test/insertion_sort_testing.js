var assert = require('assert');
var chai = require('chai');
var should = chai.should();

var insert = require('../problems/insertion_sort')

  describe('Insertion Sort', function() {
    it('should sort an array of values', function() {
        insert.insertionSort([{ "value": 3 }, { "value": 1 }, { "value": 2 }]).should.eql([ { "value": 1 }, { "value": 2 }, { "value": 3 } ])
    });
     it('should sort while keeping the correct order of values that are identical', function() {
        insert.insertionSort([ { "value": 10 }, { "value": 5, "order": 1 }, { "value": 5, "order": 2 } ]).should.eql([ { "value": 5, "order": 1 }, { "value": 5, "order": 2 }, { "value": 10 } ])
        insert.insertionSort([ { "value": 10 }, { "value": 5, "order": 1 }, { "value": 5, "order": 2 } ]).should.not.eql([ { "value": 5, "order": 2 }, { "value": 5, "order": 1 }, { "value": 10 } ])
     })
        
      
  });
