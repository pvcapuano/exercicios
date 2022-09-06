function square(nums) {
  const arrs = nums.toString().split("");
  const arrMap = arrs.map((arr) => Number(arr) ** 2).join("");

  return Number(arrMap);
}

console.log(square(3514)); //925116
console.log(square(94571)); //811625491
console.log(square(24)); // 416
console.log(square(745821698)); //4916256441368164
