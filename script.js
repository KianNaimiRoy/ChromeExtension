fetch (`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}`)
.then((res) => res.json()) // Converts response to JSON
.then((data) => { 
  const imageElement = document.getElementById('randomImage');
  const linkElement = document.getElementById('imageLink');
  imageElement.src = data.urls.regular; // Sets src element to random image from Unsplash
  linkElement.href = data.links.html; // Sets the href of the link to the image URL
})
.catch((error) => {
  console.log('Error:', error);
});