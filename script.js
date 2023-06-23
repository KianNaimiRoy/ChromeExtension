fetch (`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}`)
.then((res) => res.json()) // Converts response to JSON
.then((data) => { 
  const imageElement = document.getElementById('randomImage');
  imageElement.src = data.urls.regular; // Sets src element to random image from Unsplash
})
.catch((error) => {
  console.log('Error:', error);
});