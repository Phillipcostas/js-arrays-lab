const foods = []
foods.push('Pizza', 'Cheeseburger')
console.log('Exercise 2 result:', foods)

foods.unshift('Taco')
console.log('Exercise 3 result:',foods)

let favFood = foods[1];
console.log('Exercise 4 result:', `${favFood}`)

let removed = foods.splice(2, 0, 'Tofu')
console.log('Exercise 5 result:',foods)

foods.splice(1, 1, 'Sushi', 'Cupcake')
console.log('Exercise 6 result', foods)

const yummy = [foods.slice(2,-2)]
console.log('Exercise 7 result', yummy);

let soyIndex = foods.indexOf('Tofu')
console.log('Exercise 8 result:', soyIndex);

const allFoods = [foods.join(" -> ")]
console.log('Exercise 9 result:', allFoods);

hasSoup = foods.includes('soup')
console.log('Exercise 10 result:', hasSoup);

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];
for(let i = 0; i < nums.length; i++){
    nums[i] % 2 === 1 && odds.push(nums[i]);
}
console.log('Exercise 11 result:', odds);

const fizz = [];
for(let i = 0; i < nums.length; i++){
    if(nums[i]%3 === 0) fizz.push(nums[i]);
};
const buzz = [];
for(let i = 0; i < nums.length; i++){
    if(nums[i]%5 === 0) buzz.push(nums[i]);
}
const fizzbuzz = [];
for(let i = 0; i < nums.length; i++){
    if(nums[i]%(3) === 0) fizzbuzz.push(nums[i]);
    if(nums[i]%(5) === 0) fizzbuzz.push(nums[i]);
}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[3]
//console.log('Exercise 13 result:' ,numList)



num = numArrays [2][1];
console.log('Exercise 14 result:', num);


let total = 0;
numArrays.forEach((element) => total += element);

console.log('Exercise 15 result:\n', total);



