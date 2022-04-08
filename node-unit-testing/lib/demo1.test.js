const { expect } = require('chai');
const chai = require('chai');
const {add} = require('./demo');

describe('Unit Testing add()',()=>{
     it('should add two numbers', () => {
         const actual = add(1,2);
         const expected =3;
        expect(actual).to.equal(expected);
      });

      it('should add two strings',()=>{
          expect(add("unit","testing")).to.equal("unittesting");
      });
});