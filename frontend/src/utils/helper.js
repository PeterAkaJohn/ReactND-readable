export default function sortByFilter(items, filter) {
  const filterByProperty = filter || 'voteScore';
  return items.sort((a, b) => {
    if (a[filterByProperty] < b[filterByProperty]) {
      return 1;
    }
    if (a[filterByProperty] > b[filterByProperty]) {
      return -1;
    }

    return 0;
  });
}
