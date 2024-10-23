function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let customDelimiterMatch = numbers.match(/^\/\/(.)\n/);

  if (customDelimiterMatch) {
    delimiter = new RegExp(customDelimiterMatch[1]);
    numbers = numbers.slice(customDelimiterMatch[0].length);
  }

  let numberArray = numbers.split(delimiter).map(Number);
  let negativeNumbers = numberArray.filter((num) => num < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
  }

  return numberArray.reduce((sum, num) => sum + num, 0);
}