class Village {
    constructor(size=null){
        this.size = size;
        this.families_with_kids = Math.ceil(this.size * .75);
        this.families_without = Math.floor(this.size * .25);
        this.village_boys = 0;
        this.village_girls = 0;
        this.population = {
            with_children: {},
            without_childern: {}
        };
    };
    create_village() {

        for(let i = 0; i <= this.families_with_kids; i++){
            this.population.with_children[i] =  this.create_family();
        };
        for(let i = 0; i <= this.families_without; i++){
            this.population.without_childern[`${i}`] = {}
        };
        return this.population;
    }
    create_family() {

        let determine_child = Math.round(Math.random());
        function create_child() {
            let family = [];
            // recursive function to determine type w conditionals for boys && subsequent children
             (function recurse(type) {
                if(type === 0 || sub_child()){
                    family.push('Boy');
                    return family;
                }
                else if(family.length < 1 || sub_child()){
                    family.push('Girl');
                    return recurse(determine_child);
                }
                else{
                    return;
                }
            })(determine_child);
            return family;
        }
        return create_child();
    }
}
// helper function for subsequent children 
function sub_child() {

    let prob_25 = Math.floor(Math.random()* 4) + 1;
    if(prob_25 === 1){
        return true;
    }
    else {
        return false;
    };
};

let new_chicago = new Village(47);
new_chicago.create_village();
