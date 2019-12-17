//overall DOM implementation
const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('id', 'container')
container.style.display = 'none'

//When button is pressed
function show() {
  var x = document.getElementById("container")
  x.style.display = "block"
  app.classList.add("animation")
};

app.appendChild(container)
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
        event.ontouchstart = function press() {
          event.classList.add("secondary");
        }
        event.ontouchend = function lift() {
          event.classList.remove("secondary");
        }
        //create an h1 for title of event
        const h1 = document.createElement('h1')
        h1.textContent = events.name.text
        h1.setAttribute('class', 'title')
        // Create a p with event date
        const p = document.createElement('p')
        events.start.local = events.start.local.substring(0, 10) //cuts off unnecessary time info
        p.textContent = events.start.local
        p.setAttribute('class', 'date')
        //Add a summary
        const sum = document.createElement('p')
        sum.textContent = events.description.text
        sum.setAttribute('class', 'summary')
        //Append the events to the container
        container.appendChild(event)
        event.appendChild(p)
        event.appendChild(h1)
        event.appendChild(sum)



    console.log(events.name.text)
  })
  } else {
    console.log('error')
  }
}

request.send()