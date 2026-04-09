fetch('https://api.merklemap.com/v1/search?query=example.com', { //url + api to send
    headers: {
        'Authorization': 'merklemap_sk_7DNjumgnQgUDDZsPSFtkANRupc5LxDcJ' //api key
    }
})
    .then(response => response.json()) //gets response
    .then(data => console.log(data)) //logs output in console
