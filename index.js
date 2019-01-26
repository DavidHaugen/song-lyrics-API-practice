'use strict';
/* global $ */

function generateUrl(artist, title){
  const enArtist = encodeURI(artist);
  const enTitle = encodeURI(title);
  const endUrl = `https://api.lyrics.ovh/v1/${enArtist}/${enTitle}`;
  return endUrl;
}


function getLyrics(artist, title) {
  return fetch('https://api.lyrics.ovh/v1/Coldplay/Adventure%20of%20a%20Lifetime')
    .then(response => response.json())
    .then(data => data.lyrics);
}

function generateHtml(data){
  
}

function displayResults(data) {
  $('#results').html;
}

function handleSearch(){
  $('.js-search-form').on('submit', function(event){
    event.preventDefault();
    const artist = $('.js-query-artist').val();
    const title = $('js-query-title').val();

    getLyrics(artist,title);

  });
}

function watchForm() {
  handleSearch();
}

$(watchForm);

