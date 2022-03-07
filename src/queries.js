// Reproducciones totales de todas las canciones agrupados por cada artista.

db.canciones.aggregate([

    {
        $group:

            {
                _id: "$artista", reproduccionesTotales: {

                    $sum: "$num_reproducciones"

                }
            }
    }

]).pretty()

/*
{ "_id" : "The Beach Boys", "reproduccionesTotales" : 2000000 }
{ "_id" : "Marvin Gaye", "reproduccionesTotales" : 1190000 }
{ "_id" : "Radiohead", "reproduccionesTotales" : 15000000 }
{ "_id" : "The Rolling Stones", "reproduccionesTotales" : 19500000 }
{ "_id" : "Nirvana", "reproduccionesTotales" : 10900000 }
{ "_id" : "Aretha Franklin", "reproduccionesTotales" : 11500000 }
{ "_id" : "Pink Floyd", "reproduccionesTotales" : 5000000 }
{ "_id" : "Coldplay", "reproduccionesTotales" : 7200000 }
{ "_id" : "The Beatles", "reproduccionesTotales" : 16850000 }
{ "_id" : "Stevie Wonder", "reproduccionesTotales" : 8270000 }
*/




// Beneficio total de la discográfica con todas las ventas de todos los discos.
// (Suponemos que la discográfica se lleva un 50% de esas ventas)
                                                                                        
db.lanzamientos.aggregate([

    {
        $group:

            {
                _id: "$artista", beneficioTotal: 

                    {
                        $avg:

                            {
                                $multiply: ["$discos_vendidos", "$precio"]
                            }
                    }
            }
    }

]).pretty()

/*
{ "_id" : "The Beach Boys", "beneficioTotal" : 31980000 }
{ "_id" : "Marvin Gaye", "beneficioTotal" : 4797000 }
{ "_id" : "Radiohead", "beneficioTotal" : 29970000 }
{ "_id" : "The Rolling Stones", "beneficioTotal" : 114949999.99999999 }
{ "_id" : "Nirvana", "beneficioTotal" : 734650000 }
{ "_id" : "Aretha Franklin", "beneficioTotal" : 49980000 }
{ "_id" : "Pink Floyd", "beneficioTotal" : 55980000 }
{ "_id" : "Coldplay", "beneficioTotal" : 18995000 }
{ "_id" : "The Beatles", "beneficioTotal" : 779700000 }
{ "_id" : "Stevie Wonder", "beneficioTotal" : 9897000 }
*/




// Beneficio total de la discográfica con las ventas de los discos de Rock lanzados entre 1980 y 1999.
// (Suponemos que la discográfica se lleva un 50% de esas ventas)

db.lanzamientos.aggregate([

    {
        $match:

            {

                $and: [

                    {
                        genero_disco: "Rock"
                    },

                    {
                        fecha_lanzamiento:

                            {
                                $gte: new Date ("1980-01-01"), $lt: new Date ("1999-12-31")
                            }
                    }

                ]

            }
    },

    {
        $group:

            {
                _id: "$artista",
                    
                beneficioTotal: 

                    {
                        $avg:

                            {
                                $multiply: ["$discos_vendidos", "$precio"]
                            }
                    }
            }
    }

]).pretty()

/*
{ "_id" : "Coldplay", "beneficioTotal" : 18995000 }
*/




// Se precisa saber todas las canciones realizadas con nuestra discográfica de cada uno de los artistas 

db.canciones.aggregate([

    {
        $group:

            {
                _id: 

                    {
                        num_artista: "$id",
                        nombre_artista: "$artista"
                    },

                canciones: 

                    {   
                        $addToSet: "$cancion"
                    }   
            }
    }

]).pretty()

/*
{ "_id" : { "num_artista" : 5, "nombre_artista" : "Radiohead" }, "canciones" : [ "Creep" ] }
{ "_id" : { "num_artista" : 3, "nombre_artista" : "Stevie Wonder" }, "canciones" : [ "Isn't She Lovely", "Ngiculela - Es una Historia - I'm Singing", "Ebony Eyes", "As", "Sir Duke", "Easy Goin' Evening (My Mama's Call)", "Another Star", "Summer Soft", "Black Man", "Village Ghetto Land", "Pastime Paradise", "Knocks Me Off My Feet", "Love's In Need Of Love Today", "All Day Sucker", "Ordinary Pain", "Saturn" ] }
{ "_id" : { "num_artista" : 7, "nombre_artista" : "Coldplay" }, "canciones" : [ "Don't Panic", "See You Soon", "Such A Rush", "High Speed", "Bigger Stronger" ] }
{ "_id" : { "num_artista" : 6, "nombre_artista" : "The Beach Boys" }, "canciones" : [ "Don't Talk (Put Your Head On My Shoulder)", "God Only Knows", "I Know There's An Answer", "Wouldn't It Be Nice" ] }
{ "_id" : { "num_artista" : 8, "nombre_artista" : "The Rolling Stones" }, "canciones" : [ "Tumbling Dice", "Rocks Off", "Rip This Joint", "Sweet Virginia", "Casino Boogie", "Tom & Frayed", "Loving Cup", "Happy", "Ventilator Blues", "Sweet Black Angel", "Shake Your Hips", "Turd On The Run", "I Just Want to See His Face" ] }
{ "_id" : { "num_artista" : 10, "nombre_artista" : "Pink Floyd" }, "canciones" : [ "See Emily Play" ] }
{ "_id" : { "num_artista" : 4, "nombre_artista" : "Nirvana" }, "canciones" : [ "On a Plain", "In Bloom", "Smells Like Teen Spirit", "Come As You Are", "Something In The Way", "Polly", "Lithium", "Lounge Act", "Breed", "Territorial Pissings", "Stay Away", "Drain You" ] }
{ "_id" : { "num_artista" : 9, "nombre_artista" : "Aretha Franklin" }, "canciones" : [ "Dr. Feelgood", "Respect", "Don't Let Me Lose This Dream", "Soul Serenade", "Good Times", "Save Me", "Drown in My Own Tears", "I Never Loved A Man (The Way I Love You)", "Do Right Woman, Do Right Man", "A Change Is Gonna Come", "Baby, Baby, Baby" ] }
{ "_id" : { "num_artista" : 2, "nombre_artista" : "The Beatles" }, "canciones" : [ "Something", "I Want You (She's So Heavy)", "Here Comes the Sun", "Polythene Pam", "Mean Mr Mustard", "Octopus's Garden", "Come Together", "The End", "You Never Give Me Your Money", "Golden Slumbers", "Sun King", "Her Majesty", "She Came In Through The Bathroom Window", "Maxwell's Silver Hammer", "Because", "Carry That Weight", "Oh! Darling (Remastered 2009)" ] }
{ "_id" : { "num_artista" : 1, "nombre_artista" : "Marvin Gaye" }, "canciones" : [ "Flyin' High (in the Friendly Sky)", "Save the Children", "Inner City Blues (Makes Me Wanna Holler)", "Wholy Holy", "God Is Love", "What's Happening Brother", "What's Going On", "Mercy Mercy Me (The Ecology)", "Right On" ] }
*/




// Beneficio total de la discográfica con las reproducciones de cada canción de Pop agrupadas por el nombre y autor de la canción y ordenadas de mayor beneficio a menor.
// (Suponemos que la discográfica se lleva 10 cent netos por cada reproducción a partir de las 300.000 reproducciones)

db.canciones.aggregate([

    {
        $match:

            {
                $and: [

                    {
                        num_reproducciones:
        
                            {
                                $gt: 300000
                            },
                    },

                    {
                        genero_cancion: "Pop"
                    }
                ]
            }
        
    },

    {
        $group:

            {
                _id: 

                    {
                        nombre_cancion: "$cancion",
                        nombre_artista: "$artista"
                    },
                
                beneficioTotal:

                    {
                        $sum:

                            {
                                $multiply:

                                    ["$num_reproducciones", "$porcentaje_visita"]
                            }
                    }
            }

    }
,
    
    {
        $sort:

            {
                beneficioTotal: -1
            }
    }

]).pretty()

/*
{ "_id" : { "nombre_cancion" : "Creep", "nombre_artista" : "Radiohead" }, "beneficioTotal" : 1500000 }
{ "_id" : { "nombre_cancion" : "Something In The Way", "nombre_artista" : "Nirvana" }, "beneficioTotal" : 100000 }
{ "_id" : { "nombre_cancion" : "Drain You", "nombre_artista" : "Nirvana" }, "beneficioTotal" : 80000 }
{ "_id" : { "nombre_cancion" : "Territorial Pissings", "nombre_artista" : "Nirvana" }, "beneficioTotal" : 70000 }
{ "_id" : { "nombre_cancion" : "Octopus's Garden", "nombre_artista" : "The Beatles" }, "beneficioTotal" : 70000 }
{ "_id" : { "nombre_cancion" : "Breed", "nombre_artista" : "Nirvana" }, "beneficioTotal" : 70000 }
{ "_id" : { "nombre_cancion" : "On a Plain", "nombre_artista" : "Nirvana" }, "beneficioTotal" : 60000 }
{ "_id" : { "nombre_cancion" : "Lounge Act", "nombre_artista" : "Nirvana" }, "beneficioTotal" : 50000 }
{ "_id" : { "nombre_cancion" : "Stay Away", "nombre_artista" : "Nirvana" }, "beneficioTotal" : 40000 }
*/




// Se precisa saber toda la información respecto a cada uno de los artistas en cuanto a lanzamientos y canciones con nuestra discográfica en una sola búsqueda y guardar dicha información en una colección aparte.

db.artistas.aggregate([

    {
        $lookup:

            {
                from: "lanzamientos",
                localField: "artista",
                foreignField: "artista",
                as: "discosEnVenta"
            }
    },

    {
        $lookup:

            {
                from: "canciones",
                localField: "artista",
                foreignField: "artista",
                as: "canciones"
            }
    },

    {
        $out: 

            {
                db: "test", 
                coll: "allInfo" 
            }
    }

]).pretty()

// Voy a sacar solo un ejemplo para que se vea como saca el documento.

/*
{
        "_id" : ObjectId("622511dab367cf2f2f22c07f"),
        "artista" : "Aretha Franklin",
        "nacionalidad" : "Estadounidense",
        "fecha_inicio" : ISODate("1960-01-01T00:00:00Z"),
        "num_discos" : 40,
        "genero_musical" : [
                "Soul",
                "Funk",
                "Góspel",
                "Pop",
                "Pop rock",
                "Jazz",
                "R&B"
        ],
        "discosEnVenta" : [
                {
                        "_id" : ObjectId("622511dfb367cf2f2f22c089"),
                        "id" : 9,
                        "nombre" : "I Never Loved a Man the Way I Love You",
                        "fecha_lanzamiento" : ISODate("1967-03-10T00:00:00Z"),
                        "artista" : "Aretha Franklin",
                        "genero_disco" : [
                                "Soul"
                        ],
                        "especificaciones" : {
                                "tipo" : "Álbum",
                                "formato" : "CD"
                        },
                        "precio" : 24.99,
                        "discos_vendidos" : 2000000
                }
        ],
        "canciones" : [
                {
                        "_id" : ObjectId("622511e9b367cf2f2f22c0d8"),
                        "id" : 9,
                        "cancion" : "Respect",
                        "artista" : "Aretha Franklin",
                        "genero_cancion" : [
                                "R&B",
                                "Soul"
                        ],
                        "num_reproducciones" : 3000000,
                        "porcentaje_visita" : 0.1
                },
                {
                        "_id" : ObjectId("622511e9b367cf2f2f22c0d9"),
                        "id" : 9,
                        "cancion" : "Drown in My Own Tears",
                        "artista" : "Aretha Franklin",
                        "genero_cancion" : [
                                "R&B",
                                "Soul"
                        ],
                        "num_reproducciones" : 1000000,
                        "porcentaje_visita" : 0.1
                },
                {
                        "_id" : ObjectId("622511e9b367cf2f2f22c0da"),
                        "id" : 9,
                        "cancion" : "I Never Loved A Man (The Way I Love You)",
                        "artista" : "Aretha Franklin",
                        "genero_cancion" : [
                                "R&B",
                                "Soul"
                        ],
                        "num_reproducciones" : 1000000,
                        "porcentaje_visita" : 0.1
                },
                {
                        "_id" : ObjectId("622511e9b367cf2f2f22c0db"),
                        "id" : 9,
                        "cancion" : "Soul Serenade",
                        "artista" : "Aretha Franklin",
                        "genero_cancion" : [
                                "R&B",
                                "Soul"
                        ],
                        "num_reproducciones" : 1000000,
                        "porcentaje_visita" : 0.1
                },
                {
                        "_id" : ObjectId("622511e9b367cf2f2f22c0dc"),
                        "id" : 9,
                        "cancion" : "Don't Let Me Lose This Dream",
                        "artista" : "Aretha Franklin",
                        "genero_cancion" : [
                                "R&B",
                                "Soul"
                        ],
                        "num_reproducciones" : 800000,
                        "porcentaje_visita" : 0.1
                },
                {
                        "_id" : ObjectId("622511e9b367cf2f2f22c0dd"),
                        "id" : 9,
                        "cancion" : "Baby, Baby, Baby",
                        "artista" : "Aretha Franklin",
                        "genero_cancion" : [
                                "R&B",
                                "Soul"
                        ],
                        "num_reproducciones" : 500000,
                        "porcentaje_visita" : 0.1
                },
                {
                        "_id" : ObjectId("622511e9b367cf2f2f22c0de"),
                        "id" : 9,
                        "cancion" : "Dr. Feelgood",
                        "artista" : "Aretha Franklin",
                        "genero_cancion" : [
                                "R&B",
                                "Soul"
                        ],
                        "num_reproducciones" : 600000,
                        "porcentaje_visita" : 0.1
                },
                {
                        "_id" : ObjectId("622511e9b367cf2f2f22c0df"),
                        "id" : 9,
                        "cancion" : "Good Times",
                        "artista" : "Aretha Franklin",
                        "genero_cancion" : [
                                "R&B",
                                "Soul"
                        ],
                        "num_reproducciones" : 800000,
                        "porcentaje_visita" : 0.1
                },
                {
                        "_id" : ObjectId("622511e9b367cf2f2f22c0e0"),
                        "id" : 9,
                        "cancion" : "Do Right Woman, Do Right Man",
                        "artista" : "Aretha Franklin",
                        "genero_cancion" : [
                                "R&B",
                                "Soul"
                        ],
                        "num_reproducciones" : 1000000,
                        "porcentaje_visita" : 0.1
                },
                {
                        "_id" : ObjectId("622511e9b367cf2f2f22c0e1"),
                        "id" : 9,
                        "cancion" : "Save Me",
                        "artista" : "Aretha Franklin",
                        "genero_cancion" : [
                                "R&B",
                                "Soul"
                        ],
                        "num_reproducciones" : 500000,
                        "porcentaje_visita" : 0.1
                },
                {
                        "_id" : ObjectId("622511e9b367cf2f2f22c0e2"),
                        "id" : 9,
                        "cancion" : "A Change Is Gonna Come",
                        "artista" : "Aretha Franklin",
                        "genero_cancion" : [
                                "R&B",
                                "Soul"
                        ],
                        "num_reproducciones" : 300000,
                        "porcentaje_visita" : 0.1
                }
        ]
}
*/




// Se precisa saber que artista con respecto a sus porcentaje por visita y el número de reproducciones 

db.canciones.aggregate([

    {
       $setWindowFields: {

          partitionBy: "$artista",

          sortBy: 
            { 
                num_reproducciones: -1
            },

          output:

            {
                beneficioVisitas: 
                    {
                        $sum: 

                            {

                                $multiply:

                                    ["$num_reproducciones", "$porcentaje_visita"]

                            },

                        window:

                            {
                                documents: [ "unbounded", "current" ]
                            }
                    }

                }
                
        }
    }

]).pretty()

// https://docs.mongodb.com/manual/reference/operator/aggregation/setWindowFields/

/*
{
        "_id" : ObjectId("622511e9b367cf2f2f22c0d8"),
        "id" : 9,
        "cancion" : "Respect",
        "artista" : "Aretha Franklin",
        "genero_cancion" : [
                "R&B",
                "Soul"
        ],
        "num_reproducciones" : 3000000,
        "porcentaje_visita" : 0.1,
        "beneficioVisitas" : 300000
}
{
        "_id" : ObjectId("622511e9b367cf2f2f22c0da"),
        "id" : 9,
        "cancion" : "I Never Loved A Man (The Way I Love You)",
        "artista" : "Aretha Franklin",
        "genero_cancion" : [
                "R&B",
                "Soul"
        ],
        "num_reproducciones" : 2000000,
        "porcentaje_visita" : 0.1,
        "beneficioVisitas" : 500000
}
{
        "_id" : ObjectId("622511e9b367cf2f2f22c0d9"),
        "id" : 9,
        "cancion" : "Drown in My Own Tears",
        "artista" : "Aretha Franklin",
        "genero_cancion" : [
                "R&B",
                "Soul"
        ],
        "num_reproducciones" : 1000000,
        "porcentaje_visita" : 0.1,
        "beneficioVisitas" : 600000
}
{
        "_id" : ObjectId("622511e9b367cf2f2f22c0db"),
        "id" : 9,
        "cancion" : "Soul Serenade",
        "artista" : "Aretha Franklin",
        "genero_cancion" : [
                "R&B",
                "Soul"
        ],
        "num_reproducciones" : 1000000,
        "porcentaje_visita" : 0.1,
        "beneficioVisitas" : 700000
}
{
        "_id" : ObjectId("622511e9b367cf2f2f22c0e0"),
        "id" : 9,
        "cancion" : "Do Right Woman, Do Right Man",
        "artista" : "Aretha Franklin",
        "genero_cancion" : [
                "R&B",
                "Soul"
        ],
        "num_reproducciones" : 1000000,
        "porcentaje_visita" : 0.1,
        "beneficioVisitas" : 800000
}
{
        "_id" : ObjectId("622511e9b367cf2f2f22c0dc"),
        "id" : 9,
        "cancion" : "Don't Let Me Lose This Dream",
        "artista" : "Aretha Franklin",
        "genero_cancion" : [
                "R&B",
                "Soul"
        ],
        "num_reproducciones" : 800000,
        "porcentaje_visita" : 0.1,
        "beneficioVisitas" : 880000
}
{
        "_id" : ObjectId("622511e9b367cf2f2f22c0df"),
        "id" : 9,
        "cancion" : "Good Times",
        "artista" : "Aretha Franklin",
        "genero_cancion" : [
                "R&B",
                "Soul"
        ],
        "num_reproducciones" : 800000,
        "porcentaje_visita" : 0.1,
        "beneficioVisitas" : 960000
}
{
        "_id" : ObjectId("622511e9b367cf2f2f22c0de"),
        "id" : 9,
        "cancion" : "Dr. Feelgood",
        "artista" : "Aretha Franklin",
        "genero_cancion" : [
                "R&B",
                "Soul"
        ],
        "num_reproducciones" : 600000,
        "porcentaje_visita" : 0.1,
        "beneficioVisitas" : 1020000
}
{
        "_id" : ObjectId("622511e9b367cf2f2f22c0dd"),
        "id" : 9,
        "cancion" : "Baby, Baby, Baby",
        "artista" : "Aretha Franklin",
        "genero_cancion" : [
                "R&B",
                "Soul"
        ],
        "num_reproducciones" : 500000,
        "porcentaje_visita" : 0.1,
        "beneficioVisitas" : 1070000
}
{
        "_id" : ObjectId("622511e9b367cf2f2f22c0e1"),
        "id" : 9,
        "cancion" : "Save Me",
        "artista" : "Aretha Franklin",
        "genero_cancion" : [
                "R&B",
                "Soul"
        ],
        "num_reproducciones" : 500000,
        "porcentaje_visita" : 0.1,
        "beneficioVisitas" : 1120000
}
{
        "_id" : ObjectId("622511e9b367cf2f2f22c0e2"),
        "id" : 9,
        "cancion" : "A Change Is Gonna Come",
        "artista" : "Aretha Franklin",
        "genero_cancion" : [
                "R&B",
                "Soul"
        ],
        "num_reproducciones" : 300000,
        "porcentaje_visita" : 0.1,
        "beneficioVisitas" : 1150000
}
*/


// Se precisa conocer los beneficios generados del primer disco y de todas las canciones por Aretha Franklin desde la colección artistas ordenados de mayor a menor.


db.artistas.aggregate([

    {
        $match:

            {
                artista: "Aretha Franklin"
            }
    },

    {
        $lookup:

            {
                from: "lanzamientos",
                localField: "artista",
                foreignField: "artista",
                as: "lanzamientos"
            }
    },

    {
        $addFields:

            {
                lanzamientos: 

                    {
                        $arrayElemAt: ["$lanzamientos", 0]
                    }
            }
    },

    {
        $lookup:

            {
                from: "canciones",
                localField: "artista",
                foreignField: "artista",
                as: "canciones"
            }
    },

    {
        $unwind: 

            {
                path: "$canciones"
            }
    },

    {   
        $project:

            {
                _id: 0,
                artista: "$artista",
                nombre_disco: "$lanzamientos.nombre",
                nombre_cancion: "$canciones.cancion",
                num_reproducciones: "$canciones.num_reproducciones",
                beneficioVentas: 

                    {
                        $avg:

                            {
                                $multiply:

                                    ["$lanzamientos.discos_vendidos", "$lanzamientos.precio"]
                            }
                    },

                beneficioVisitas:
                    
                    {
                        $sum:

                            {
                                $multiply: 
                                
                                    ["$canciones.num_reproducciones", "$canciones.porcentaje_visita"]
                            }
                    }
            }
    },

    {
        $match:

            {
                num_reproducciones:

                    {
                        $gt: 300000
                    }
            }
    },

    {
        $sort:

            {
                beneficioVisitas: -1
            }
    }

]).pretty()


/*
{
        "artista" : "Aretha Franklin",
        "nombre_disco" : "I Never Loved a Man the Way I Love You",
        "nombre_cancion" : "Respect",
        "num_reproducciones" : 3000000,
        "beneficioVentas" : 49980000,
        "beneficioVisitas" : 300000
}
{
        "artista" : "Aretha Franklin",
        "nombre_disco" : "I Never Loved a Man the Way I Love You",
        "nombre_cancion" : "I Never Loved A Man (The Way I Love You)",
        "num_reproducciones" : 2000000,
        "beneficioVentas" : 49980000,
        "beneficioVisitas" : 200000
}
{
        "artista" : "Aretha Franklin",
        "nombre_disco" : "I Never Loved a Man the Way I Love You",
        "nombre_cancion" : "Drown in My Own Tears",
        "num_reproducciones" : 1000000,
        "beneficioVentas" : 49980000,
        "beneficioVisitas" : 100000
}
{
        "artista" : "Aretha Franklin",
        "nombre_disco" : "I Never Loved a Man the Way I Love You",
        "nombre_cancion" : "Soul Serenade",
        "num_reproducciones" : 1000000,
        "beneficioVentas" : 49980000,
        "beneficioVisitas" : 100000
}
{
        "artista" : "Aretha Franklin",
        "nombre_disco" : "I Never Loved a Man the Way I Love You",
        "nombre_cancion" : "Do Right Woman, Do Right Man",
        "num_reproducciones" : 1000000,
        "beneficioVentas" : 49980000,
        "beneficioVisitas" : 100000
}
{
        "artista" : "Aretha Franklin",
        "nombre_disco" : "I Never Loved a Man the Way I Love You",
        "nombre_cancion" : "Don't Let Me Lose This Dream",
        "num_reproducciones" : 800000,
        "beneficioVentas" : 49980000,
        "beneficioVisitas" : 80000
}
{
        "artista" : "Aretha Franklin",
        "nombre_disco" : "I Never Loved a Man the Way I Love You",
        "nombre_cancion" : "Good Times",
        "num_reproducciones" : 800000,
        "beneficioVentas" : 49980000,
        "beneficioVisitas" : 80000
}
{
        "artista" : "Aretha Franklin",
        "nombre_disco" : "I Never Loved a Man the Way I Love You",
        "nombre_cancion" : "Dr. Feelgood",
        "num_reproducciones" : 600000,
        "beneficioVentas" : 49980000,
        "beneficioVisitas" : 60000
}
{
        "artista" : "Aretha Franklin",
        "nombre_disco" : "I Never Loved a Man the Way I Love You",
        "nombre_cancion" : "Baby, Baby, Baby",
        "num_reproducciones" : 500000,
        "beneficioVentas" : 49980000,
        "beneficioVisitas" : 50000
}
{
        "artista" : "Aretha Franklin",
        "nombre_disco" : "I Never Loved a Man the Way I Love You",
        "nombre_cancion" : "Save Me",
        "num_reproducciones" : 500000,
        "beneficioVentas" : 49980000,
        "beneficioVisitas" : 50000
}
*/























