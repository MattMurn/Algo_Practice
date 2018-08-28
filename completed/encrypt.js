  const apps = {

    encrypt: (text, n) => {
        let spot = 0;
        let holder = text.split('');
        let newer = [];
         holder.map((element, i)=> {
            if(spot === i){
                holder.splice(spot, 1)
                newer.push(element)
                spot += (n-1);
            } 
        });
        return holder.concat(newer).join('');
    },

    decrypt: (encryptedText, n) => {
        spot = 0;
        let holder = encryptedText.split('').reverse();
        let newer = [];
        // console.log(holder);
        holder.map((element, i) => {
            if(spot === i){
                holder.splice(spot,1)
                newer.push(element)
                spot += (n-1)
            }
        })

        console.log(holder.concat(newer).join(''))
        
    }

}
module.exports = apps;


apps.encrypt("Hello World!", 2);

apps.decrypt(apps.encrypt("Hello World!", 2), 2);