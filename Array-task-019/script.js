//Give a practical usages of the .fill() method

const color1 = ['red','green','yellow','blue'];
color1.fill('aqua');
console.log(color1); 
console.table(color1);
//all color change to aqua because of fill method

const color2 = ['red','green','yellow','blue'];
color2.fill('pink',1,3);
console.log(color2); // [ 'red', 'pink', 'pink', 'blue' ] 