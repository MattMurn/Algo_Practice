current = {
    is_communicator: true,
    is_entrepreneurial: true,
    is_quickLearner: true,
    eye_is_caught: false,
    is_workingWithSolstice: null,
    is_consultantTraining: null,
    is_building_java_apps: null,

}

catchEye = hiringManager => {
    if(hiringManager) {
        return true;
    } 
    else {
        catchEye()
    }
}

catchEye = hiringManager => {
    if(hiringManager) {
        interview = true;
        return Interview;
    } 
    else {
        catchEye()
    }
}

let i_have_your_attention = false;
catchEye = hiring_manager => {
    if(hiring_manager){
        i_have_your_attention = true;
        return interview();
    }
    else {
        catchEye();
    }
}

let array = [
{name: "hello", species: "word"},
{name: "world", species: "word"},
{name: "girl", species: "word"},
{name: "boy", species: "animale"},
{name: "array", species: "animale"}

]
let filtered = array.filter( data => data.species === "word" && data.name > 4)



let mapper = array.map(data =>  data.name )

// console.log(mapper);
let orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
]

let reduced = orders.reduce((sum, orders) => sum + orders.amount, 0 )

//console.log(reduced);

let x = "hello  ";
let y = ", this is a closure";


closureEx = () => {
    let z = "World";

    printHW = () => {
        console.log(x, z, y)
    }
    printHW();
}


closureEx();

makeAfter = x => {
    return makeAfterThat = y => {
        console.log(`x: ${x} y: ${y}`);
    }
}

let first = makeAfter(4);
first(8);