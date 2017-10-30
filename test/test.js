const defaults = require('../.');
const react = require('../react');

describe('test basic properties of all configurations', () => {
    it('should match the snapshot', () => {
        expect(defaults).toMatchSnapshot();
        expect(react).toMatchSnapshot();
    });

    it('should be an object', () => {
        expect(defaults).toBeInstanceOf(Object);
        expect(react).toBeInstanceOf(Object);
    });

    it('should have the "rules" property', () => {
        expect(defaults.rules).toBeTruthy();
        expect(react.rules).toBeTruthy();
    });

    it('should extend "airbnb-base"', () => {
        expect(defaults.extends).toBe('airbnb-base');
    });

    it('should extend "airbnb" and defaults', () => {
        expect(react.extends).toEqual(['airbnb', '@endouble.com/eslint-config-endouble']);
    });

    it('should have "react" as a plugin', () => {
        expect(react.plugins).toContain('react');
    });
});
