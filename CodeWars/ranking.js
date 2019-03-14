/*
In some ranking people collects points.
 The challenge is sort by points and calulate position for every person. 
 But remember if two or more persons have same number of points,
  they should have same position number and sorted by name (name is unique).
*/
let test = [
    {
      name: "John",
      points: 100,
    },
    {
      name: "Bob",
      points: 130,
    },
    {
      name: "Mary",
      points: 120,
    },
    {
      name: "Kate",
      points: 120,
    },
  ]

function ranking(people) {
    let position = 1;
    people.sort((a,b) => b.points - a.points || b.name < a.name).map((el,i) => {
    let previous = people[i-1];
    if(previous && previous.points === el.points){
        position++;
        return el.position = previous.position;
    } 
    else {
        el.position = position;
        position++;
    } 
   });
   return people;
}

console.log(ranking(test));