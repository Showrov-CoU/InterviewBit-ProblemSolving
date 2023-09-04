/**
 * Time Complexity O(n*k)
 * space Complexity O(n)
 */
const timeRequiredToBuy = (tickets, k) => {
  let times = Array.from({ length: tickets.length }, (v) => 0);
  let loop = 1;
  while (tickets[k] > 0) {
    tickets = tickets.map((v, i) => {
      if (v > 0) {
        v--;
        times[i] = loop++;
      }
      return v;
    });
  }
  return times[k];
};
process.stdin.on("data", (data) => {
  let [k, ...tickets] = data.toString().split(" ").map(Number);
  let result = timeRequiredToBuy(tickets, k);
  console.log(result);
});
