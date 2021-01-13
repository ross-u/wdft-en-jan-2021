const items = {
  jacket: 40,
  pants: 23,
  glasses: 12
}


// Iterating over an object
// for ... in  - Iterates over the key names to access values

for (const key in items) {

  console.log('key', key);
  console.log( items[ key ] );
}