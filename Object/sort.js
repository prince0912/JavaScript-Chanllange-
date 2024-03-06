const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 72 },
    { name: 'Charlie', score: 90 },
    { name: 'David', score: 68 }
  ];

const sortByDescending = (a, b) => b.score - a.score
const sortedStudent = students.sort(sortByDescending)

