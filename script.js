const card = {
    id : 1,
    name: 'Hill Giant',
    launchCost: ['6', 'R', 'R'],
    combinedManaCost: 8,
    cardType: 'creatura',
    subType: 'giant',
    expansion: {
        reprintId: 9,
        name: 'espansione 1',
        rarity: 'rara',
        collectionNr: 7,
        totalCards: 123,
    },
    flavourText:{
        quote: 'lorem.....',
        author: 'Alan Lee',
    },
    abilities: [
        {
            launchCost: ['R','U'],
            description: 'lorem.....',
        },
        {
            launchCost: ['Y','R'],
            description: 'lorem.....', 
        },
    ],
   constitution: 11,
   strenght: 14,
   borderColor: '#000',

   illustration:{
       author: {
           id:1,
           name: 'Jean Baptiste Monge',
       },
       source: '...img/---',
   },

   background:{
       color: 'red',
       source: '...img/---',
   },
};

console.log(card);




//STAMPA
const cardSection = document.getElementById('cards');

const subType = card.subType ? `- ${card.subType}` : '';
let abilitiesContent = '<em> Nessuna abilità </em>';
if (card.abilities.length){
    abilitiesContent = '<ul>';
    for (let i = 0; i < card.abilities.length; i++){
        const currentAbility = card.abilities[i];
        abilitiesContent += '----------';
        abilitiesContent += `<li>Descrizione: ${currentAbility.description}</li> `;
        abilitiesContent += `<li>Costo di lancio: ${currentAbility.launchCost.join( ', ')}</li> `;
    }
    abilitiesContent += '</ul>';
}

let cardTemplate = `
<ul class = "card">
    <li><strong>Id</strong>: ${card.id}</li>
    <li><strong>Nome</strong>: ${card.name}</li>
    <li><strong>Costo di lancio</strong>: ${card.launchCost.join(', ' )}</li>
    <li><strong>Costo Mana Convertito</strong>: ${card.combinedManaCost}</li>
    <li><strong>Tipo Carta</strong>: ${card.cardType} ${subType} </li>
    <li><strong>Espansione</strong>:
        <ul>
            <li>Ristampa: ${card.expansion.reprintId}</li>
            <li>Nome: ${card.expansion.name}</li>
            <li>Rarità: ${card.expansion.rarity}</li>
            <li>Numero Collezione: ${card.expansion.collectionNr}/${card.expansion.totalCards}</li>

        </ul>
    </li>
    <li><strong>Testo di colore</strong>: ${card.flavourText.quote} - ${abilitiesContent}</li>
    <li><strong>Abilità</strong> ${abilitiesContent}</li>
    <li><strong>Costituzione</strong>: ${card.constitution}</li>
    <li><strong>Forza</strong>: ${card.strenght}</li>
    <li><strong>Illustrazione</strong>:
        <ul>
            <li>Autore: ${card.illustration.author.name} (id: ${card.illustration.author.id})</li>
            <li>Link Illustrazione: ${card.illustration.source}</li>
        </ul>
    </li>
</ul>
`;

cardSection.innerHTML = cardTemplate;
