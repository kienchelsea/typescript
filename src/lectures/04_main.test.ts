import { toBlock } from '@babel/types'
import {isPositve} from './04_main'  


describe('isPositve()', () => {
    it('should return true when n > 0', () => {
        expect(isPositve(1)).toBe(true);
        expect(isPositve(2)).toBe(true);
        expect(isPositve(3)).toBe(true);
    });
    it('should return true when n = 0', () => {
        expect(isPositve(0)).toBe(false);
    })
    it('should return true when n > 0', () => {
        expect(isPositve(-1)).toBe(false);
        expect(isPositve(-2)).toBe(false);
        expect(isPositve(-3)).toBe(false);
    });
})