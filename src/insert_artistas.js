/*
    Colección Artistas
                        */

db.artistas.insertMany([

    {
        artista: "Marvin Gaye",
        nacionalidad: "Estadounidense",
        fecha_inicio: new Date ("1962-01-01"),
        num_discos: 27,
        genero_musical: ["Soul", "Pop", "R&B"]
    },

    { artista: "The Beatles", nacionalidad: "Británicos", fecha_inicio: new Date ("1960-01-01"), num_discos: 17, genero_musical: ["Rock", "Art Rock", "Balada", "Rock psicodélico", "Pop barroco", "Música experimental"] },
    { artista: "Stevie Wonder", nacionalidad: "Estadounidense", fecha_inicio: new Date ("1963-01-01"), num_discos: 31, genero_musical: ["Soul", "R&B", "Funk", "Jazz", "Pop"] },
    { artista: "Nirvana", nacionalidad: "Estadounidenses", fecha_inicio: new Date ("1987-01-01"), num_discos: 15, genero_musical: ["Grunge", "Rock alternativo"] },
    { artista: "Radiohead", nacionalidad: "Británico", fecha_inicio: new Date ("1985-01-01"), num_discos: 18, genero_musical: ["Art rock", "Rock alternativo", "Electrónica", "Rock experimental", "Art pop"] },
    { artista: "The Beach Boys", nacionalidad: "Estadounidenses", fecha_inicio: new Date ("1961-01-01"), num_discos: 29, genero_musical: ["Pop", "Rock", "Surf", "Psicodelia"] },
    { artista: "Coldplay", nacionalidad: "Británicos", fecha_inicio: new Date ("1966-01-01"), num_discos: 21, genero_musical: ["Pop rock", "Rock alternativo", "Britpop", "Pop"] },
    { artista: "The Rolling Stones", nacionalidad: "Británicos", fecha_inicio: new Date ("1961-01-01"), num_discos: 33, genero_musical: ["Rock and roll", "Blues", "R&B", "Pop rock", "Pop/Rock psicodélico", "Soul rock"] },
    { artista: "Aretha Franklin", nacionalidad: "Estadounidense", fecha_inicio: new Date ("1960-01-01"), num_discos: 40, genero_musical: ["Soul", "Funk", "Góspel", "Pop", "Pop rock", "Jazz", "R&B"] },
    { artista: "Pink Floyd", nacionalidad: "Británico", fecha_inicio: new Date ("1964-01-01"), num_discos: 22, genero_musical: ["Rock progresivo", "Art rock", "Rock psicodélico", "Rock experimental", "Rock sinfónico"] }

])