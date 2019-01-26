'use strict';
/* global $ */

function generateURI(artist, title){
  const enArtist = encodeURI(artist);
  const enTitle = encodeURI(title);
  const endUrl = `https://api.lyrics.ovh/v1/${enArtist}/${enTitle}`;
  return endUrl;
}

const errMessage =
  '<p> Uh-oh. It looks like we couldn\'t find any results matching your search. Sorry about that. La la la la laaa</p>';


function getLyrics(artist, title) {
  const finalUrl = generateURI(artist, title);
  return fetch(finalUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(data => displayResults(data.lyrics))
    .catch( () => {
      $('#results').html(errMessage);
    });
}

function generateHtml(data){
  return `<p>${data}</p>`;
}

function displayResults(data) {
  $('#results').html(generateHtml(data));
}

function handleSearch(){
  $('.js-search-form').on('submit', function(event){
    event.preventDefault();
    const artist = $('.js-query-artist').val();
    const title = $('.js-query-title').val();
    getLyrics(artist,title);
  });
}

function watchForm() {
  handleSearch();
}

$(watchForm);