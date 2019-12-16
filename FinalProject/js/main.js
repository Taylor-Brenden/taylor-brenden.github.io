
// API implementation
var request = new XMLHttpRequest()

request.open('GET', 'https://www.eventbriteapi.com/v3/venues/34432657/events/?order_by=start_asc&only_public=on&token=I7C4YH7QYZGXEGKRD2OT', true)

request.onload = function() {

  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    //deciding what to pull from the JSON array
    data.events.forEach(events => {
        //create div for each upcoming event
        const event = document.createElement('div')
        event.setAttribute('class', 'event')
        //create an h1 for title of event
        const h1 = document.createElement('h1')
        h1.textContent = events.name.text
        // Create a p with event date
        const p = document.createElement('p')
        events.start.local = events.start.local.substring(0, 10) //cuts off unnecessary time info
        p.textContent = events.start.local
        //Append the events to the container
        container.appendChild(event)
        event.appendChild(h1)
        event.appendChild(p)



    console.log(events.name.text)
  })
  } else {
    console.log('error')
  }
}

request.send()

//overall DOM implementation
const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = '../img/BasementLogo.jpg'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)
