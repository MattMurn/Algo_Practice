(function(){
    let throw_types = ['r', 'p', 's'];
    let wins = 0;
    let losses = 0;
    let ties = 0;

    function doc_get(id){
        return document.getElementById(id);
    }
    document.onkeyup = function(event){
        console.log(event.key)
        let opponent_throw = throw_types[Math.floor(Math.random()* 3)];
        let user_text = doc_get('user_text')
        let opp_text = doc_get('opp_text');
        let wins_text = doc_get('wins');
        let losses_text = doc_get('losses');
        let ties_text = doc_get('ties')

        user_text.textContent = `user guess: ${event.key}`
        opp_text.textContent = `opponent guess: ${opponent_throw}`
        switch(true){
            case event.key === 'r' && opponent_throw === 'p':
                losses ++;
                break;
            case event.key === 'r' && opponent_throw === 's':
                wins ++;
                break;
            case event.key === 'p' && opponent_throw === 'r':
                wins ++;
                break;
            case event.key === 'p' && opponent_throw === 's':
                losses ++;
                break;
            case event.key === 's' && opponent_throw === 'p':
                wins ++;
                break;
            case event.key === 's' && opponent_throw === 'r':
                losses ++;
                break;
            case event.key === opponent_throw:
                ties ++;
                break;
            default:
                alert('Please hit r, p, s')
                break;
        }
        wins_text.textContent = `wins: ${wins}`
        losses_text.textContent = `losses: ${losses}`
        ties_text.textContent = `ties: ${ties}`
    }
})()


