// This function loads pokemon data from the Pokemon API
function fetchChucknorrisJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const chucknorris = 1;
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
      .then(function(response) {
        return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
      })
      .then(function(chucknorris) {
        console.log('data decoded from JSON:', chucknorris);
  
        // Build a block of HTML
        const chucknorrisHtml =  
          `<img src="${chucknorris.icon_url}" />
          <p><strong>${chucknorris.value}</strong></p>`
        ;
        document.querySelector('#chuck-norris').innerHTML = chucknorrisHtml;
      });
  }
  
  fetchChucknorrisJSON();