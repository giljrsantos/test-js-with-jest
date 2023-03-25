import { subtraction } from '../src/subtraction';

describe('Testing mathematical operation', () => {

    it('testing the subtraction of two numbers', () => {
        const exp = 3;
        const ret = subtraction(6, 3);

        expect(ret).toBe(exp);
    });

    it('testing the error of the subtraction of two numbers', () => {
        const exp = 3;
        const ret = subtraction(6, 2);

        expect(ret).not.toEqual(exp);
    });
});