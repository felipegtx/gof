
import { expect } from 'chai';
import 'mocha';
import { Factory } from '../src/factory/creational';
import carFactory = Factory.CarFactory;
import brands = Factory.brands;

describe('Factory', () => {

    it('should return the correct instance', () => {
        let instance = carFactory.create(brands.vw);
        let result = instance.accelerate();
        expect(instance.name()).equal(brands.vw);
        expect(result).to.equal("VRUUUUUM");
    });

});