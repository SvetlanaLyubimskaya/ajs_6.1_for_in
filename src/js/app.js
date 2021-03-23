export default function orderByProps(obj, order) {
  const keysArr = []; // для нужных ключей
  const sortArr = []; // для сорт

  order.forEach((key) => { // перебир. по нужным ключам
    if (key in obj) {
      keysArr.push({
        key,
        value: obj[key],
      });
    }
  });

  for (const key in obj) { // перебир. осн массив
    if (!key) {
      sortArr.push({
        key,
        value: sortArr[key],
      });
    }
  }
  sortArr.sort((a, b) => b.key - a.key);
  return [...keysArr, ...sortArr];
}
