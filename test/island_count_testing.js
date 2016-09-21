var assert = require('assert');
var chai = require('chai');
var should = chai.should();

var island = require('../problems/island_count')

  describe('Island Count', function() {
    it('should find how many islands there are', function() {
      island.countIslands('.').should.equal(0)
      island.countIslands('0').should.equal(1)
      island.countIslands('.0.0').should.equal(2)
      island.countIslands('.0...\n.00..\n....0').should.equal(2)
      island.countIslands('..000.\n..0...\n..0.0.\n..0...\n..000.').should.equal(2)
    });
      
  });
