var assert = require('assert');
var chai = require('chai');
var should = chai.should();

var roman_function = require('../problems/roman_numeral_translator')

describe('Array', function() {
  console.log(roman_function.translateRomanNumeral('V'))
  describe('#indexOf()', function() {
    it('should take a single roman numeral and give a value', function() {
      roman_function.translateRomanNumeral('V').should.equal(5)
    });

    it('should be able to take two descending roman numerals', function() {
      roman_function.translateRomanNumeral('VI').should.equal(6)
    })
    

    it('should be able to take two descending roman numerals', function() {
      roman_function.translateRomanNumeral('IV').should.equal(4)
    })
      

    it('should be able to a long roman numeral MCMXC', function() {
      roman_function.translateRomanNumeral('MCMXC').should.equal(1990)
    })
      

    it('should return NaN if a correct roman numeral was not entered', function() {
      roman_function.translateRomanNumeral('MXH').should.be.NaN
    })
      
  });

});