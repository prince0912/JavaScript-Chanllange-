const students = [
    { name: 'Alice', marks: 85, class: 'A' },
    { name: 'Bob', marks: 72, class: 'B' },
    { name: 'Charlie', marks: 90, class: 'A' },
    { name: 'David', marks: 68, class: 'C' },
    { name: 'Eva', marks: 95, class: 'A' }
];

function newArray(arr){

    const studentWithHighMark = arr.filter((elem)=>elem.marks >=90);
    return studentWithHighMark

}

console.log(newArray(students))