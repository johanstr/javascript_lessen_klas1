/*
 * LES Array's deel 2
 *
 * We gaan de array met leden van een fictieve sportvereniging nu uitbreiden en logischer
 * inrichten.
 * 
 * Van een lid slaan we de volgende zaken op in de array:
 * - Voornaam
 * - Achternaam
 * - Geslacht
 * - Leeftijd
 * - Lid sinds
 * - Lid van team
 */
// let leden = [
//     ['Koos', 'Klaproos', 'M', 19, 25.50, '01-10-1990', 'A'],
//     ['Joop', 'Kopstoot', 'M', 24, 27.50, '11-11-1895', 'B'],
//     ['Karel', 'Paardenkop', 'V', 99, 65.00, '05-05-1946', 'A'],
//     ['Truus', 'Molensteen', 'V', 37, 31.25, '28-02-1970', 'B'],
//     ['Wilhelmina', 'Huppeltrutje', 'V', 59, 45.20, '17-06-2001', 'A'],
// ];

let leden = [
    {
        voornaam: 'Koos',
        achternaam: 'Klaproos',
        geslacht: 'M',
        leeftijd: 19,
        contributie: 25.50,
        lidsinds: '01-10-1990',
        team: 'A'
    },
    {
        voornaam: 'Joop',
        achternaam: 'Kopstoot',
        geslacht: 'M',
        leeftijd: 24,
        contributie: 27.50,
        lidsinds: '11-11-1895',
        team: 'B'
    },
    {
        voornaam: 'Karel',
        achternaam: 'Paardenkop',
        geslacht: 'V',
        leeftijd: 99,
        contributie: 65.00,
        lidsinds: '05-05-1946',
        team: 'A'
    },
    {
        voornaam: 'Truus',
        achternaam: 'Molensteen',
        geslacht: 'V',
        leeftijd: 37,
        contributie: 31.25,
        lidsinds: '28-02-1970',
        team: 'B'
    },
    {
        voornaam: 'Wilhelmina',
        achternaam: 'Huppeltrutje',
        geslacht: 'V',
        leeftijd: 59,
        contributie: 45.20,
        lidsinds: '17-06-2001',
        team: 'A'
    }
];

let ledenlijst = document.querySelector('#leden-lijst');    // tbody element in de pagina

function fillMembersTable(e)
{
    // Voorbeelden van gebruik van de array
    // In een lus lopen we langs alle rijen in de array en 
    // voegen de naam toe aan het element op de pagina
    for (let rij = 0; rij < leden.length; rij++) {
        ledenlijst.innerHTML +=
            '<tr><td>' + leden[rij].voornaam +
            ' ' + leden[rij].achternaam + ' (' +
            leden[rij].team + ')</td></tr>';
    }
}

function fillTeamTable(e)
{
    console.log('Geklikt op team tabel vullen');
}