const students = [
	{firstName: 'John', lastName: 'Carr'},
  {firstName: 'Leonardo', lastName: 'Di Vittorio'},
  {firstName: 'Sarah', lastName: "Connor"},
]


const studentNames = students.map( (studentObj) => {
  return studentObj.firstName;
})


console.log('studentNames', studentNames)

