const students = [
    { name: "Deep", age: 22, grade: "A" },
    { name: "Kunal", age: 22, grade: "B" },
    { name: "Bhavadip", age: 21, grade: "C" }
];

students.forEach(student => {
    if (student.age > 21) {
        console.log(student.name);
    }
});
