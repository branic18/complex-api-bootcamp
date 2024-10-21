/*

DBZ API- https://web.dragonball-api.com/documentation?ref=freepublicapis.com

Insult Generator API- https://evilinsult.com/api/?ref=freepublicapis.com

*/

// import { createClient } from 'pexels';

// const client = createClient('u8HDqms9ApHnexT6t4wluCKeCsivi75zi2hFCKj8s0AB1S39H5SoS0jQ');
// const query = 'Nature';

// client.photos.search({ query, per_page: 1 }).then(photos => {...});


import { apikey } from './apikey.js';

document.querySelector('button').addEventListener('click', changeVillainAndInsult)

function changeVillainAndInsult() {

    const url = `https://dragonball-api.com/api/characters?affiliation=Villain`

    // Variable that holds API

    fetch(url) // connect to API
    .then(res => res.json()) // parse resopnse as JSON. res name doesn't matter. Taking response and formatting it in JSON object
    .then(data => { // Outputting a series of things
        console.log(data)

        randomVillain = Math.floor(Math.random() * data.length)
        console.log(randomVillain)

        // Gives me a number
        // The number is an object w/in the array that I have to target
        // console.log(data.name) //undefined
        console.log(data[randomVillain]) // Generates random villain
        console.log(data[randomVillain].name)

        document.getElementById('name').innerText = data[randomVillain].name
        document.getElementById('race').innerText = data[randomVillain].race
        document.getElementById('ki').innerText = data[randomVillain].ki
        document.getElementById('max-ki').innerText = data[randomVillain].maxKi

        let villainName = data[randomVillain].name

        // const url2 = `https://api.pexels.com/v1/search?query=${villainName}`

        // let apiKey = ``

        fetch(`https://api.pexels.com/v1/search?query=${villainName}`,{
            
            headers: {
              Authorization: "apikey"
            }
          })
             .then(resp => {
               return resp.json()
             })
             .then(data => {
               console.log(data.photos)
               console.log(data.photos[0].url)

               document.querySelector('img').src = data.photos[0].url
               document.getElementById('image-url').innerText = data.photos[0].url
               document.querySelector('a').href = data.photos[0].url
             })
            
        // fetch(url2,
        //     {
        //             mode: 'no-cors',
        //             headers: {
        //                 'Access-Control-Allow-Origin':'*',
        //                 'Content-Type':'application/json',
        //                 'Authorization' : '',
        //             },
        //          }
        // ) // connect to API
        // .then(res => res.json()) // parse resopnse as JSON. res name doesn't matter. Taking response and formatting it in JSON object
        // .then(data => { 
        //     console.log(data)
        // })

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}