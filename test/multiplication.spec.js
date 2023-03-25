import { multiplication } from '../src/multiplication';

describe('Testing mathematical operation', () => {

    it('testing the multiplication of two numbers', () => {
        const exp = 9;
        const ret = multiplication(3, 3);

        expect(ret).toEqual(exp);
    });

    it('testing the error of the multiplication of two number', () => {
        const exp = 9;
        const ret = multiplication(3, 4);

        expect(ret).not.toEqual(exp);
    });
});