/**
 * dependencies
 */
const assert = require('assert');
const config = require('../.');
const react = require('../react');

/**
 * isObject
 * @param  {object}  obj target object
 * @return {Boolean}     is object or not
 */
function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

/**
 * tests
 */
describe('test basic properties of all configurations', () => {
    it('should be an object', () => {
        assert(isObject(config));
        assert(isObject(react));
    });

    it('should have the "rules" property', () => {
        assert(config.rules);
        assert(isObject(config.rules));
        assert(react.rules);
        assert(isObject(react.rules));
    });

    it('should extend "airbnb-base"', () => {
        assert(config.extends);
        assert(config.extends, 'airbnb-base');
    });

    it('should extend "airbnb"', () => {
        assert(react.extends);
        assert(react.extends, 'airbnb');
    });
});
