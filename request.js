fetch('https://api.merklemap.com/v1/search?query=example.com', { //url + api to send, change example.com to your thing, or *.example.com, whatever u want.
    headers: {
        'Authorization': 'your-api-key' //api key
    }
})
    .then(response => response.json()) //gets response
    .then(data => console.log(data)) //logs output in console
