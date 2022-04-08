const { expect } = require('chai');
const chai = require('chai');
const { getFullAddress } = require("./user");

describer("unit testing getFullAddress", () => {

    it('it should return Invalid user  if street is not present', () => {

        const address = {
            city: 'HYD',
            province: 'Telangana',
            postal: '500057'
        }
        const actualResult = getFullAddress(address);
        expect(actualResult).to.eq('Invalid user')
    });
    it('it should return valid address  if street is not present', () => {

        const address = {
            city: 'HYD',
            province: 'Telangana',
            postal: '500057'
        }
        const actualResult = getFullAddress(address);
        expect(actualResult).to.eq('Invalid user')
    });
});