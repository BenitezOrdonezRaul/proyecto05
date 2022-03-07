/*
    Colección Lanzamientos
                            */

db.lanzamientos.insertMany([

    {
        id: 1,
        nombre: "What's Going On",
        fecha_lanzamiento: new Date ("1971-05-21"),
        artista: "Marvin Gaye",
        genero_disco: ["Soul", "Pop", "Rhythm & Blues", "Funk"],
        especificaciones: 
            {
                tipo: "Álbum",
                formato: "CD"
            },
        precio: 15.99,
        discos_vendidos: 300000
    },

    { id: 2, nombre: "Abbey Road", fecha_lanzamiento: new Date ("1969-09-26"), artista: "The Beatles", genero_disco: "Rock", especificaciones: { tipo: "Álbum", formato: "CD" }, precio: 25.99, discos_vendidos: 30000000 },
    { id: 3, nombre: "Songs in the Key of Life", fecha_lanzamiento: new Date ("1976-09-28"), artista: "Stevie Wonder", genero_disco: ["Pop", "Soul"], especificaciones: { tipo: "Álbum", formato: "Vinilo" }, precio: 32.99, discos_vendidos: 300000 },
    { id: 4, nombre: "Nevermind", fecha_lanzamiento: new Date ("1991-09-24"), artista: "Nirvana", genero_disco: ["Grunge", "Rock alternativo"], especificaciones: { tipo: "Álbum", formato: "CD" }, precio: 20.99, discos_vendidos: 35000000 },
    { id: 5, nombre: "Creep", fecha_lanzamiento: new Date ("1992-09-21"), artista: "Radiohead", genero_disco: ["Rock alternativo", "Pop"], especificaciones: { tipo: "Single", formato: "CD" }, precio: 9.99, discos_vendidos: 3000000 },
    { id: 6, nombre: "Wouldn's It Be Nice", fecha_lanzamiento: new Date ("1966-01-22"), artista: "The Beach Boys", genero_disco: ["Rock", "Pop rock", "Surf"], especificaciones: { tipo: "EP", formato: "CD" }, precio: 15.99, discos_vendidos: 2000000 },
    { id: 7, nombre: "The Blue Room EP", fecha_lanzamiento: new Date ("1999-10-11"), artista: "Coldplay", genero_disco: ["Rock", "Rock alternativo", "Indie rock", "Rock progresivo"], especificaciones: { tipo: "EP", formato: "Vinilo" }, precio: 37.99, discos_vendidos: 500000 },
    { id: 8, nombre: "Exile On Main Street", fecha_lanzamiento: new Date ("1972-05-12"), artista: "The Rolling Stones", genero_disco: ["Rock", "Blues", "Rock and roll", "R&B"], especificaciones: { tipo: "Álbum", formato: "CD" }, precio: 22.99, discos_vendidos: 5000000 },
    { id: 9, nombre: "I Never Loved a Man the Way I Love You", fecha_lanzamiento: new Date ("1967-03-10"), artista: "Aretha Franklin", genero_disco: ["Soul"], especificaciones: { tipo: "Álbum", formato: "CD" }, precio: 24.99, discos_vendidos: 2000000 },
    { id: 10, nombre: "See Emily Play", fecha_lanzamiento: new Date ("1967-05-21"), artista: "Pink Floyd", genero_disco: ["Rock psicodélico"], especificaciones: { tipo: "Single", formato: "Vinilo" }, precio: 27.99, discos_vendidos: 2000000 }
    
])