// return masked string
function maskify(cc) {

let holdArray = []
    if (cc.length > 4) {
        for (let i = 0; i < cc.length; i++) {
            if(i < (cc.length -4)){
                cc[i] = "#";
            }
        }
        console.log(cc);
    }
    else {
        console.log(cc);
    return cc;
    }
}

maskify("16dfsjklkdjh");
maskify("155");
maskify("dfaksdjfskaldjfhskdjfhskdjfskjdfhkshfe1111")