// console.log("hello")

const quoteContainer=document.getElementById('quote-container');
const quotetext=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitter=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');


let apiQuotes=[];


function newQuotes(){
    const quote=apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
    console.log(quote);
    //check Author fielsd is blank replace it Unknown 
    if(!quote.author){
        authorText.textContent='UnKnown';
    } else{
        authorText.textContent=quote.author.split(',')[0].trim();
    }

    if(quote.text.length>120){
        quotetext.classList.add('long-quote');
    }else{
        quotetext.classList.remove('long-quote')
    }
    quotetext.textContent=quote.text;
}

async function getQuotes(){
    const apiUrl='https://type.fit/api/quotes';
    try{
        const res=await fetch(apiUrl);
        apiQuotes=await res.json();
       console.log(apiQuotes)

       newQuotes();
    }catch(err){

    }
}

function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quotetext.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'__blank');
}

newQuoteBtn.addEventListener('click',newQuotes);

twitter.addEventListener('click',tweetQuote);
getQuotes()