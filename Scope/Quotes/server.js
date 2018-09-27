// const axios = require('axios');
$(document).ready(()=> {
    let domElements = {
        author: document.getElementById('author'),
        quote: document.getElementById('quote'),
        jumbotron: document.getElementById('jumbotron'),
    }
    getQ = () => {
        $.ajax({
            url: 'https://quotes.rest/qod',
            success: result => {
                let sub = result.contents.quotes[0]
                domElements.author.innerHTML = sub.author;
                domElements.quote.innerHTML = sub.quote;
                console.log(sub);
            }
        })
        $('.jumbotron').append(`<a class="twitter-share-button"
        href="https://twitter.com/intent/tweet?text=${domElements.quote}">
      Tweet^Two</a>`)

    }
    $('.quoteButton').on('click', ()=> {
        // console.log("YOOOOOOOOO")
        getQ();
    })
    $('.tweetButton').on('click', () => {
        sendTweet();
    })
    sendTweet = () => {
        console.log("this is going to send to a tweet");
    }
})
// app.listen(PORT, ()=> console.log(`app is listen on port: ${PORT}`))

