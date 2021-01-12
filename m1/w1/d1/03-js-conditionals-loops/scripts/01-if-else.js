var age = 16;
var isMember = false;


if (age <= 16) {

  if (isMember) {
    console.log('You have a teenager discount');
  }
  else {
    console.log('You need to be a member to get a teenager discount!')
  }

}
else if (age >= 70) {
  console.log('You have a senior discount');
}
else {
  console.log('Sorry, you have no discount!');
}