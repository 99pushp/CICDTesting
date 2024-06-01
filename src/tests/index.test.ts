import {describe, expect, test} from '@jest/globals';
import {sum} from '../index';



describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });


  test('adds 1 + 23 to equal 24', () => {
    expect(sum(1, 23)).toBe(24);
  });


  test('adds 1 + 200 to equal 201', () => {
    expect(sum(1, 200)).toBe(201);
  });

});



