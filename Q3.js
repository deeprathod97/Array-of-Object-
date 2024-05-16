const students = [
    { name: "Deep", age: 19, grade: "A" },
    { name: "Kunal", age: 22, grade: "B" },
    { name: "bhavadip", age: 21, grade: "C" }
];

students.forEach(student => {
    console.log(`${student.name} - ${student.age} years old`);
});
