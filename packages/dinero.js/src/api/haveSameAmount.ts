import type {
  HaveSameAmountParams} from '@dinero.js/core';
import {
  haveSameAmount as coreHaveSameAmount
} from '@dinero.js/core';

/**
 * Check whether a set of Dinero objects have the same amount.
 *
 * @param dineroObjects The Dinero objects to compare.
 *
 * @returns Whether the Dinero objects have the same amount.
 */
export function haveSameAmount<TAmount>(
  ...[dineroObjects]: HaveSameAmountParams<TAmount>
) {
  const _haveSameAmount = coreHaveSameAmount({
    calculator: dineroObjects[0].calculator,
  });

  return _haveSameAmount(dineroObjects);
}
