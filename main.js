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

