import numeral from 'numeral';

export function num(d) {
  return numeral(d).format('0,0');
}
export function price(d) {
  return '$' + numeral(d).format('0,0.00');
}
export function percent(d) {
  return numeral(d).format('0.00') + ' %';
}
