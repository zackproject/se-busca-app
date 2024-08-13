export function randNum(min, max, double = false) {
  if (double) {
    //Ho talla a dos decimals i acaba sent float de 2 decimals
    return parseFloat((Math.random() * (max - min + 1) + min).toFixed(2));
  }
  return parseInt(Math.random() * (max - min + 1) + min);
}

export function randPercent(min = 0, max = 80) {
  return `${randNum(min, max, true)}%`;
}
