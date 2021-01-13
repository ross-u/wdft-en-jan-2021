const students = [
  {name: 'Sarah', age: 22, occupation: 'Software Engineer'},
  {name: 'Jack', age: 26, occupation: 'Front End Developer'},
  {name: 'Marco', age: 34, occupation: 'Taxi Driver'},
  {name: 'Gloria', age: 41, occupation: 'Logistics Manager'},
  {name: 'Ben', age: 39, occupation: 'Program Manager'},
];



const places = [
  {
    name: '',
    city: '',
    price: 234,
    isOccupied: false,
    hasPool: true,
    owner: {},
    address: {},
    ammenities: ['tv', 'ac', 'parking', 'breakfast']
  },
    {
    name: '',
    city: '',
    price: 234,
    isOccupied: false,
    hasPool: true,
    owner: {},
    address: {},
    ammenities: ['tv', 'ac', 'parking', 'breakfast']
  },
  {
    name: '',
    city: '',
    price: 234,
    isOccupied: false,
    hasPool: true,
    owner: {},
    address: {},
    ammenities: ['tv', 'ac', 'parking', 'breakfast']
  }
]


let ageTotal = 0;

//  .forEach(  function (el, [index], [arr] ) {  }  )

students.forEach(function (studentObj) {
  ageTotal += studentObj.age;
} )


const avgAge = ageTotal / students.length;


console.log('avgAge', avgAge)
