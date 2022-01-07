let quotes = [ 
                    { quote: 'Cogito Ergo Sum',
                       author: 'Descartes'},

                    { quote: 'El hombre es el lobo del hombre',
                      author: 'Hobbes'
                      },
                    {
                      quote: 'Think Different',
                      author: 'Steve Jobs'
                    },
                    {
                      quote: "Don't be Evil ",
                      author: 'Google'
                    },
                    {
                      quote: "Connecting People",
                      author: 'Facebook'
                    },
                    {
                      quote: "Yo no soy un hombre, soy dinamita",
                      author: 'Nietzsche'
                    }
                    ]

function get_random_quote(){
  let random_index = Math.floor(Math.random() * quotes.length)
  let random_quote = quotes[random_index]
  return random_quote
}

function get_random_color(){
  let colors = ['lightgray', 'ligthblue', 'gray', 'salmon', 'peru', 'lightpink']

  let index = Math.floor(Math.random()*colors.length)
  let color = colors[index] 

  return color
}

function change_color(color) {
  let body = document.querySelector('body')
  body.style.background = color

  document.querySelector('#new-quote').style.background = color
  document.querySelector('#tweet-quote').style.background = color

}

function change_quote(){
  random_quote = get_random_quote()
  
  document.querySelector("#text").innerText = random_quote.quote
  document.querySelector("#author").innerText = '-' + random_quote.author

  color = get_random_color()
  change_color(color)
}
              
function initial_state(){
  change_quote()
}



initial_state()