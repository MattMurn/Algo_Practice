

function User(first_name, last_name, age, gender){
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    this.gender = gender;
}

let jerry = new User('matt', 'jerome', 33, 'M');
let user_one = new User('john', 'smith', 26, 'M');
let user_200 = new User('Jilll', 'Robinson', 25, 'F')
console.log(jerry);
console.log(user_200);


