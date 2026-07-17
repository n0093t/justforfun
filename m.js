function getIP() {
  fetch(
    url,
    {
      method: "GET",
    }
  )
  .then(response => console.log('Response:', result))
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error));
}

getIP();
