class DataStore {
    constructor() {
        this.announces = [
            {
                id: 1,
                title: 'Club Bravo Club Caribe Playa',
                image_url: 'https://i.imgur.com/sUczA2J.jpeg',
                features: 'Tout inclus • Vol inclus • Transferts inclus • Clubs',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur et ipsam omnis repellat ullam. A accusantium architecto assumenda deleniti dolor, dolores ea eos hic incidunt maiores nesciunt possimus provident voluptas.',
                the_bests: [
                    {content: 'Lorem ipsum dolor sit amet'},
                    {content: 'Consectetur adipisicing elit'},
                    {content: 'Ipsam omnis repellat ullam'},
                    {content: 'A accusantium architecto assumenda'},
                ],
                price: 1149,
                stars: 4.5,
                place: 'République Dominicaine - Juan Dollo'
            },
            {
                id: 2,
                title: 'Club Jumbo Catalonia Punta Del Rey',
                image_url: 'https://static.service-voyages.com/photos/vacances-canaries/tenerife/piscine-jumbo-catalonia-punta-del-rey-_579291_panohd.jpg',
                features: 'Formule tout inclus • Vol inclus • Transferts inclus',
                description: 'Tenerife bénéficie d\'un climat agréable toute l\'année avec une moyenne annuelle de 22°, c\'est la destination du printemps éternel. Plus grande île de l\'archipel des Canaries dans l\'océan Atlantique, elle est aussi la plus haute. En effet, le sommet du Teide culmine à 3718 m. Le Parc National du Teide, inscrit au patrimoine mondial de l\'UNESCO est le plus bel exemple de l\'origine volcanique de l\'archipel et l\'un des plus visités en Europe. La capitale Santa Cruz est riche d\'activités culturelles. C\'est également une ville très vivante qui organise de nombreux concerts et festivals. Elle est connue pour son incroyable Carnaval : rythme, couleurs et luxe sans retenue, placé sous le signe du Brésil. C\'est le deuxième plus grand carnaval du monde après Rio. Ce spectacle haut en couleur promet d\'être inoubliable ! Autre ville importante : San Cristobal de la Laguna, ville canarienne typique, chargée de l\'histoire coloniale de l\'île ; vous y verrez des monuments religieux ainsi que de remarquables maisons seigneuriales des XVIIème et XVIIIème siècles.\n' +
                    '\n' +
                    'A seulement deux kilomètres au nord de Candelaria, Las Caletillas est situé au nord-est de Tenerife. L\'endroit est apprécié pour sa plage de sable noir Punta Larga et sa promenade maritime. Il est possible de se baigner dans des criques ou des piscines naturelles, de prendre le soleil et se détendre en toute quiétude sur l\'une des petites îles en bois, aménagées en solarium. Hormis les plaisirs du farniente, vous y trouverez quelques bars et restaurants, avec vue sur sur l\'océan, concentrés sur l\'avenida marítima pour faire une pause.\n' +
                    '\n' +
                    'Réservez votre séjour au Club Jumbo Catalonia Punta del Rey 4*.\n' +
                    '\n' +
                    'Le Club Jumbo Catalonia Punta del Rey 4 * se situe sur la côte nord-est à 2 km de Candelaria et de sa fameuse basilique, dans le quartier calme de Las Caletillas. Profitez de deux piscines et solarium avec vue imprenable sur l\'océan, d\'un snack-bar piscine avec terrasse pour vos collations et rafraîchissements.\n' +
                    'L\'hôtel dispose de chambres de confort simple (vue piscine ou mer latérale en option) ainsi que d\'un large choix d\'activités et animations adaptées à tous.\n' +
                    '\n' +
                    'Profitez d\'une formule tout compris pour des vacances décontractées et colorées. Du sport à la détente, de la culture au farniente… faites vos jeux ! Votre équipe d\'animation Club Jumbo francophone rythme votre séjour à travers des activités sportives, ludiques et authentiques.\n' +
                    'Une ambiance festive, pour le plus grand bonheur des petits et des grands !\n' +
                    '\n' +
                    'L\'aéroport de Ténérife nord se situe à 25 km, celui de Ténérife sud à 45 km.\n' +
                    'La capitale Santa Cruz est à 15 km.',
                the_bests: [
                    {content: 'Vues imprenables sur l\'océan'},
                    {content: 'Plages de galets à 300 m, de sable gris à 800 m'},
                    {content: 'Criques et piscines naturelles à proximité'},
                ],
                price: 371,
                stars: 40,
                place: 'Canaries - Tenerife (Candelaria)'
            },
            {
                id: 3,
                title: 'Hôtel Drago Park - Canaries - Fuerteventura',
                image_url: 'https://photos.thalassoto.com/DRAGO-PARK-01.jpg',
                features: 'Tout inclus • Vol inclus',
                description: 'Costa Calma se situe au sud-est de Fuerteventura, connue pour ses nombreuses plages paradisiaques de sable blanc et fin, bordées par une mer claire et peu profonde. Protégée du vent, ses eaux sont calmes, elle est parfaite pour se baigner tranquillement et profiter du soleil. C\'est dans ce cadre que la Drago Park vous accueille pour vous permettre de passer des vacances de rêve en famille en profitant de chaque instant grâce à ses installations de qualités et sa formule « tout compris ».',
                the_bests: [
                    {content: 'Infrastructures et services de bon standing'},
                    {content: 'La belle piscine'},
                    {content: 'Chambres confortables et spacieuses'},
                ],
                price: 296,
                stars: 3.5,
                place: 'Canaries - Fuerteventura - Espagne'
            },
        ]
    }
}

module.exports = new DataStore()
