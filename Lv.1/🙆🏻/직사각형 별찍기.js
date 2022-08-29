process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]); // 가로(a) 세로(b)
  // b만큼 반복하기
  for (let i = 0; i < b; i++) {
    // *을 a번 찍고,
    for (let j = 0; j < a; j++) {
      process.stdout.write("*");
    }
    // 한 줄 띄고,
    process.stdout.write("\n");
  }
});
