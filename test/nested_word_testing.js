var assert = require('assert');
var chai = require('chai');
var should = chai.should();

var nested = require('../problems/nested_word_count')

  describe('Nested Word Count', function() {
    it('should take an array of words and find the one with the most included words in the word', function() {
      nested.nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]).should.equal('grays')
    });
    it('should return an empty string if not given a word list', function() {
      nested.nestedWordCount([]).should.equal('')
     // nested.nestedWordCount().should.equal('')
    })
      
  });
