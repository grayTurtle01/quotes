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
                    },
                    {
                      quote: "Un hombre es lo que hace, con lo que hicieron de el",
                      author: 'Sartre'
                    },
                    {
                      quote: "No hay hechos solo interpretaciones",
                      author: 'Nietzsche'
                    },
                    ]

function get_random_quote(){
  let random_index = Math.floor(Math.random() * quotes.length)
  let random_quote = quotes[random_index]
  return random_quote
}

function get_random_color(){
  let colors = ['lightgray', 'ligthblue', 'gray', 'salmon', 'peru', 'lightpink', 'lightcoral']

  let index = Math.floor(Math.random()*colors.length)
  let color = colors[index] 

  return color
}

