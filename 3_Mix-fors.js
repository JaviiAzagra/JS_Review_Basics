/* Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido 
agregado por los usuarios a favorito. 
Para ello recorre la lista de usuarios y usa forin para recoger el 
nombre de los sonidos que el usuario tenga como favoritos. */

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let favorites = {};

for (const user of users) {
  for (key in user.favoritesSounds) {
    if (key in favorites) {
     favorites[key]++;
    } else {
     favorites[key] = 1;
    }
  }
}

console.log(favorites);