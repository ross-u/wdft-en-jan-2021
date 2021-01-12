
var hasPassport = false;
var hasPCR = false;


if (hasPassport && hasPCR) {
  console.log('Allowed to travel!')
}
else {


  if (!hasPassport) {
    console.log('Get your passport!')
  }
  
  if (!hasPCR) {
    console.log('Get the PCR test done!')
  }

}