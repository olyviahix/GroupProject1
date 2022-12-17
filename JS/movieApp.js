

function searchButton() { 
    const string = document.getElementById('inputSearch').value;
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=51d81945b1399ec636bf465b376e18c9&language=en-US&page=1&include_adult=false&query=' + string)
    .then(response =>{
        console.log(response.data.results)
        showData(response.data.results)
        
    })
    
}



function showData(response){
    let movieDiv = document.getElementById('movieNavbar');
    for(let i in response) {
      const movieApi = response[i];
      const newMovieDiv = document.createElement('div');
      const watchedButton = document.createElement('button');
      const mustWatchButton = document.createElement('button');
      const movieImg = document.createElement('img'); 
      movieImg.src = `https://image.tmdb.org/t/p/w500/${response[i].poster_path}`
      watchedButton.innerText = "Add to Watched List";
      mustWatchButton.innerText ="Add to Watch Wishlist";
      newMovieDiv.innerText = movieApi.title;
      movieDiv.appendChild(movieImg);
      movieDiv.appendChild(newMovieDiv);
      movieDiv.appendChild(watchedButton);
      movieDiv.appendChild(mustWatchButton);
      watchedButton.addEventListener('click', e=>{
        const watchedDiv = document.createElement('div');
        const watchedRemove = document.createElement('button');
        watchedRemove.innerText = "Remove";
        watchedRemove.addEventListener('click', e=>{
          watchedDiv.remove();
          watchedRemove.remove();
        })
        watchedDiv.innerText = movieApi.title;
        let watchedList = document.getElementById('addToWatched');
        watchedList.appendChild(watchedDiv)
        watchedList.appendChild(watchedRemove)
      })
      mustWatchButton.addEventListener('click',e=>{
        const mustWatchDiv = document.createElement('div');
        const mustWatchRemove = document.createElement('button');
        mustWatchRemove.innerText="Remove"
        mustWatchRemove.addEventListener('click', e=>{
          mustWatchDiv.remove();
          mustWatchRemove.remove();
        })
        mustWatchDiv.innerText = movieApi.title;
        let mustWatchedList = document.getElementById('addToWant');
        mustWatchedList.appendChild(mustWatchDiv);
        mustWatchedList.appendChild(mustWatchRemove);
      })
  }
}

