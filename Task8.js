let str=" Sadaqat ";

console.log(str.length);

console.log(str.charAt(0));
console.log(str.charAt(1));

console.log(str.trim());

console.log(str.trimStart());
console.log(str.trimEnd());

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.startsWith());
console.log(str.startsWith("Sadaqat"));
console.log(str.startsWith(" Sadaqat"));
console.log(str.startsWith(" Sada"));
console.log(str.startsWith(" S"));
console.log(str.startsWith(" "));
console.log(str.endsWith("Sadaqat "));
console.log(str.endsWith(" "));
console.log(str.endsWith("qat"));
console.log(str.endsWith("qat "));

console.log(str.match("S"));
console.log(str.match("d"));
console.log(str.match("a"));
console.log(str.match("t"));

console.log(str.includes("S"));
console.log(str.includes("q"));
console.log(str.includes("da"));