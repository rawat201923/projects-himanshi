const searchForm =  document.querySelector("form");
const movieContainer = document.querySelector('.movie-container');
// const moviePoster = document.querySelector('.movie-poster');
// const movieDetails = document.querySelector('movie-details');
const inputBox = document.querySelector('.input-box') 


//function to fetch movie  ==>  http://www.omdbapi.com/?apikey=edfdee94
const getMovieInfo = async(movie)=>{
    const apiKey = "edfdee94";
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;

    const response = await fetch(url);
    const data = await response.json();

    showMovieData(data);

    console.log(data);


}

// function to show data on screen
const showMovieData = (data) =>{

    try{
        movieContainer.innerHTML="";
        movieContainer.classList.remove('noBackground');
        //use destructuring assignments to extract properties from data object
    const  {Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster} = data;
    //create div
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-info');
        movieElement.innerHTML = `<h2>${Title}</h2>
        <p><strong>Rating: &#11088;</strong>${imdbRating}</p>`;
    //create class with div
        const movieGenreElement = document.createElement('div');
        movieGenreElement.classList.add('movie-genre');
    
        Genre.split(",").forEach(element => {
            const p = document.createElement( 'p' );
            p.innerText = element;
            movieGenreElement.appendChild(p);
        });
    
        movieElement.appendChild(movieGenreElement);
    
        movieElement.innerHTML += `<p><strong>Released date: </strong>${Released}</p>
                                  <p><strong>Duration: </strong>${Runtime}</p>
                                  <p><strong>Caste: </strong>${Actors}</p>
                                  <p><strong>Plot: </strong>${Plot}</p>`;
    
        //creating a div for movie poster
        const moviePosterElement = document.createElement('div');
        moviePosterElement.classList.add('movie-poster');
        moviePosterElement.innerHTML= `<img src="${Poster}" alt="${Title}">`;
    
        movieContainer.appendChild(moviePosterElement);
        movieContainer.appendChild(movieElement);
    }
    catch(error){
        showErrorMessage("Please enter a correct name of movie to get information!");


    }
  
};

//function to display error msg
const showErrorMessage = (message)=>{
    movieContainer.innerHTML= `<h2>${message} </h2>`;
    movieContainer.classList.add('noBackground');

}

//adding event listenner to search form
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(inputBox.value);
    const movieName = inputBox.value.trim();
    if(movieName !== ''){
        showErrorMessage("Fetching Movie Information......")
        getMovieInfo(movieName);
        // clearInput();
    }else{
        showErrorMessage("Please enter a valid movie name to get information!");

        
    }
});