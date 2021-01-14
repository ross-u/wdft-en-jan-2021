const students = [
  { name: 'Edward', age: 42},
  { name: 'Marc', age: 38}, 
  { name: 'Luca', age:21 },
  { name: 'Natalia', age:32 },
  { name: 'Anna', age:24 },
  { name: 'Amy', age:25 }
];


const ageTotal = students.reduce(function (total, el) {
  const updatedTotal = total + el.age;
  return updatedTotal;

}, 0);

console.log('ageTotal', ageTotal);



const string = students.reduce(function (acc, el) {
  const updatedAcc = acc + el.name + ' ';
  return updatedAcc;

}, "");

console.log('string', string)







const htmlString = students.reduce(function (acc, el, i) {

  if (i !== students.length - 1) {         // if not on the last item
    return acc + '<li>' + el.name + '</li>'
  }
  else {    // when on the last item
    return acc + '<li>' + el.name + '</li> </ul>'
  }

}, "<ul>");

console.log('htmlString', htmlString)

document.body.innerHTML = htmlString;



