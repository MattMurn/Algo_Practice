/*
make a scheduling tool with the following rules:
take in x weeks. black out dates for each player.
each player plays the same # of days.
if possible, different foursome each week.

player objects. 
{
    name: string,
    blackout_days: string
    number_of_session: integer
}

*/

let sessions = [];

const create_session = () => {
    return {
        date: null,
        players: [],
        blacked_out_payers: []
    }
}

const create_season = (num) => {
    
}


