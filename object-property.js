const students = [
    { id: 11, name: 'pikey' },
    { id: 21, name: 'sharma' },
    { id: 41, name: 'dj' }
];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);

// Displaying Output
console.log(names);
console.log(ids);
console.log(bigger);