let students = [
    { name: "John", marks: 85 },
    { name: "Paul", marks: 92 },
    { name: "Richard", marks: 70 }
];

students.push({ name: "George", marks: 95 });
let highestStudent = students[0];
for (let student of students) {
    if (student.marks > highestStudent.marks) {
        highestStudent = student;
    }
}
console.log("Highest Marks Student:", highestStudent.name);
console.log("Marks:", highestStudent.marks);
// Output:
// Highest Marks Student: George
// Marks: 95
