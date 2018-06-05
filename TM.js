const API_KEY = "S8P66L8bOZUZaq7TME2QoF5NTK2AoAVp"
const concertURL = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=300&startDateTime=2018-06-05T00:00:00Z&endDateTime=2018-06-12T00:00:00Z&size=120&apikey='

let movieList=$("#movieList")

fetch(concertURL+API_KEY)
    .then(function(response){return response.json()})
    .then(function(json)
    {   
        for (event in json["_embedded"])
            {
                console.log(event)
                console.log(json["_embedded"][event])
                return json["_embedded"][event]
                    
            }
        })
    .then(function(event){
        for (i in event)
                    {
                    let eventTitle=event[i].name
                    let venue=event[i]._embedded.venues[0].name
                    let eventDate=event[i].dates.start.localDate
                    console.log(eventDate)
                    let li = $("<li>").addClass("displayList").attr("id","accordion");
                    let itemTitle= $("<title>").addClass("textForm")
                    li.append(eventTitle)
                    li.append(" at the "+venue)
                    li.append(" on "+eventDate)
                    movieList.append(li)
                    }
        })


 