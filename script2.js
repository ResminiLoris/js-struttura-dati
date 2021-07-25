const fullDeck = [
    //carta 1
    {
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
        
    },
    //carta 2
    {
        id : 2,
        name: 'Planes Giant',
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
    },
    //carta 3
    {
        id : 3,
        name: 'Mountain Giant',
        launchCost: ['R', 'R'],
        combinedManaCost: 8,
        cardType: 'creatura',
        subType: 'giant',
        expansion: {
            reprintId: 9,
            name: 'espansione 4',
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
    }
];


//FUNCTIONS

const createCardTemplate = (card) => {
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
    
    const cardTemplate = `
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
    return cardTemplate;
};


const renderDeck = (deck, targetElement) => {
    
    let deckTemplate = '';
    for(let i = 0; i < deck.length; i++){
        const currentCard = deck[i];
        const currentCardTemplate = createCardTemplate(currentCard);
        deckTemplate += currentCardTemplate;
    }
    
    targetElement.innerHTML = deckTemplate;
};

//STAMPA
const cardsSection = document.getElementById('cards');
renderDeck(fullDeck, cardsSection);


//FILTER

const inputField = document.getElementById('search');
const selectField = document.getElementById('filter');
const button = document.getElementById('button');

selectField.addEventListener('change', ()=> {
    const currentValue = selectField.value;

    if(currentValue !== 'all'){
        inputField.classList.remove('hidden');
    } else {
        inputField.classList.add('hidden');
    }
});

button.addEventListener('click', () => {
    const inputValue = inputField.value;
    const selectValue = selectField.value;
    if(selectValue === 'all'){
        renderDeck(fullDeck, cardsSection);
        return;
    }

    const filteredDeck = [];
    for(let i = 0; i < fullDeck.length; i++){
        const currentCard = fullDeck[i];
        if(currentCard[selectValue] ==
             inputValue){
            filteredDeck.push(currentCard);
        }
    }
    renderDeck(filteredDeck, cardsSection);
});


