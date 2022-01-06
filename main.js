let quotes = [ { quote: 'Cogito Ergo Sum',
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
                    }
                    ]

function get_random_quote(){
  let random_index = Math.floor(Math.random() * quotes.length)
  let random_quote = quotes[random_index]
  return random_quote
}

function change_quote(){
  random_quote = get_random_quote()
  
  document.querySelector("#text").innerText = random_quote.quote
  document.querySelector("#author").innerText = random_quote.author
}
              
function initial_state(){
  change_quote()
}

initial_state()