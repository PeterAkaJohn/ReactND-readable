export default function sortByVoteScore(items) {
  return items.sort((a, b) => {
    if (a.voteScore < b.voteScore) {
      return 1;
    }
    if (a.voteScore > b.voteScore) {
      return -1;
    }

    return 0;
  });
}
