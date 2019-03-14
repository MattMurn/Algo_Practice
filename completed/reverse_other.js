function reverse(str){
    // let array_split = str.split(' ');
    let array_split = str.split(' ').forEach(function(element, i){
        if(i % 2 !== 0){
            array_split[i] = element.split('').reverse().join('');
        }
    });
    return array_split.join(' ').trim();
}
console.log(reverse("Reverse this string, please!"));
