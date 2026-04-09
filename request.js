fetch('https://api.merklemap.com/v1/search?query=example.com', {
    headers: {
        'Authorization': 'merklemap_sk_7DNjumgnQgUDDZsPSFtkANRupc5LxDcJ'
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
