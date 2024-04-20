const form = document.querySelector('form');
const resultDiv = document.querySelector( '.result' );
const imgDiv = document.querySelector( 'img' );

form.addEventListener("submit", (event) => {
    event.preventDefault();  // stops the page
    getWordInfo(form.elements[0].value);// call function
});


const getWordInfo = async(word) =>{
    try{
        resultDiv.innerHTML= "Loading...";   // show a message while
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data = await response.json();
    
   
    let definitions= data[0].meanings[0].definitions[0];//create a variable for same values which may be use multiple times.
    
    imgDiv.style.display = "none";
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
    <h2><strong>Word: </strong>${data[0].word}</h2>
    <p class="partOfSpeech">${data[0].meanings[0].partOfSpeech}</p>
    <p><strong>Meaning: </strong>${definitions.definition === undefined ? "Not Found" : definitions.definition }</p>
    <p><strong>Example: </strong>${definitions.example === undefined ? "Not Found" : definitions.example }</p>
    <p><strong>Antonyms: </strong></p>
    `; 

    //fetching antonyms
    if(definitions.antonyms.length === 0)
    {
        resultDiv.innerHTML  += `<span>Not Found</span>`;

    }else{
        for(let i=0; i<definitions.antonyms.length; i++){
            resultDiv.innerHTML += `<li>${definitions.antonyms[i]}</li>`
        }

    }
    resultDiv.innerHTML += `<p><strong>Synonyms: </strong></p>`;
     //fetching synonyms
     if(definitions.synonyms.length === 0)
     {
         resultDiv.innerHTML  += `<span>Not Found</span>`;
 
     }else{
         for(let i=0; i<definitions.synonyms.length; i++){
             resultDiv.innerHTML += `<li>${definitions.synonyms[i]}</li>`
         }
 
     }

    //adding Read more buttom
    resultDiv.innerHTML += `<div><a href="${data[0].sourceUrls}" target="_blank">Read More</a></div>`

   
    }
    catch(error){
        resultDiv.innerHTML = "Error! Word not found.";

    }
     console.log(data);
}



//  website for api https://dictionaryapi.dev/