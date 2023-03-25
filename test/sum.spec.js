import { sum } from '../src/sum';

describe('Testing mathematical operation', () => {

    it('testing the sum of two numbers', () => {
        const exp = 7;
        const ret = sum(2, 5);

        expect(ret).toBe(exp);
    });

    it('testing the error of the sum of two numbers', () => {
        const exp = 6;
        const ret = sum(2, 5);

        expect(ret).not.toBe(exp);
    })

});
