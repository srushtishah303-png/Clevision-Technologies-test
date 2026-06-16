const students = [
  { name: 'Aarav', marks: 78, passed: true, subject: 'Math' },
  { name: 'Diya', marks: 42, passed: false, subject: 'Science' },
  { name: 'Kabir', marks: 88, passed: true, subject: 'Math' },
  { name: 'Meera', marks: 65, passed: true, subject: 'English' },
  { name: 'Rohan', marks: 38, passed: false, subject: 'Science' },
  { name: 'Isha', marks: 92, passed: true, subject: 'Math' },
  { name: 'Vivaan', marks: 75, passed: true, subject: 'English' },
  { name: 'Anaya', marks: 70, passed: true, subject: 'Science' }
];


const filteredStudents = students.filter
  student => student.passed && student.marks >= 70
);

console.log("Filtered Students:", filteredStudents);


const totalMarks = filteredStudents.reduce(
  (sum, student) => sum + student.marks,
  0
);

console.log("Total Marks:", totalMarks);


const toppers = Object.values
  filteredStudents.reduce((acc, student) => {
    if (
      !acc[student.subject] ||
      student.marks > acc[student.subject].marks
    ) {
      acc[student.subject] = student;
    }
    return acc;
  }, {})
);

console.log("Toppers:", toppers);

  