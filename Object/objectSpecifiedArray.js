// Can you write a JavaScript function to group an array of objects by a specified property?

function groupByProperty(arr, property){
    return arr.reduce(
        (grouped, obj) => 
        ({ ...grouped, [obj[property]]: [...(grouped[obj[property]] || []), obj] }), {});   
}

const people = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Alice', age: 28 },
  ];

  const result = groupByProperty(people, 'name');
  console.log(result)