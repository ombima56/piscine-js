let clone1 = JSON.parse(JSON.stringify(person));
let clone2 = JSON.parse(JSON.stringify(person));

let samePerson = person;
person.age += 1;
person.country = 'FR';