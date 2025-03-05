
//Name: Joel Nithish Kumar Murugan
//ITMD - 541-01 Grad Student
// Exercise #1: Min, Max, and Average Function
function minMaxAverage(numbers) {
    const totalNumbers = numbers.length;
    const minValue = Math.min(...numbers);
    const maxValue = Math.max(...numbers);
    const average = numbers.reduce((sum, num) => sum + num, 0) / totalNumbers;
    console.log(`Total Numbers: ${totalNumbers}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${average.toFixed(2)}`);
}
// Test cases
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([7, 14, 21, 28, 35, 42]);

// Exercise #2: Count Vowels Function
function countVowels(word) {
    const vowels = "aeiouAEIOU";
    const count = word.split('').filter(letter => vowels.includes(letter)).length;
    console.log(`${word}: ${count} vowels`);
}
// Test cases
countVowels("Winter");
countVowels("Programming");
countVowels("Midterm");

// Exercise #3: Sort Numbers Function
function sortNumbers(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}
// Test cases
console.log("Original Array: [9, 4, 6, 2]", "Sorted Array:", sortNumbers([9, 4, 6, 2]));
console.log("Original Array: [15, 3, 8, 1, 22]", "Sorted Array:", sortNumbers([15, 3, 8, 1, 22]));
console.log("Original Array: [100, 50, 75, 25, 10]", "Sorted Array:", sortNumbers([100, 50, 75, 25, 10]));

// Exercise #4: Celsius to Fahrenheit Function
function celsiusToFahrenheit(celsius) {
    const celsiusNum = parseFloat(celsius);
    if (isNaN(celsiusNum)) {
        console.log("Invalid input. Please enter a number.");
        return;
    }
    const fahrenheit = (celsiusNum * 9/5) + 32;
    console.log(`${celsiusNum.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}
// Test cases
celsiusToFahrenheit(30);
celsiusToFahrenheit(-5);
celsiusToFahrenheit(100);
celsiusToFahrenheit("35");
celsiusToFahrenheit("12.5");

// Exercise #5: Sorting People by Age
function sortPeopleByAge(people) {
    return people.sort((a, b) => a.age - b.age).map(person => `${person.name} is ${person.age} and from ${person.city}`);
}
// Test cases
const people1 = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 25, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "Chicago" },
    { name: "David", age: 20, city: "Houston" },
    { name: "Eve", age: 28, city: "Miami" }
];
console.log(sortPeopleByAge(people1));

const people2 = [
    { name: "Tommy", age: 40, city: "Boston" },
    { name: "Jake", age: 32, city: "Seattle" },
    { name: "Hannah", age: 22, city: "San Francisco" },
    { name: "Isaac", age: 27, city: "Austin" },
    { name: "Jack", age: 50, city: "Denver" }
];
console.log(sortPeopleByAge(people2));

const people3 = [
    { name: "Abby", age: 70, city: "Boston" },
    { name: "Danny", age: 42, city: "New York" },
    { name: "Raj", age: 12, city: "Atlanta" },
    { name: "Sheeba", age: 77, city: "Dallas" },
    { name: "Jemi", age: 40, city: "Chicago" }
];
console.log(sortPeopleByAge(people3));
