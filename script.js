const dummyTransactions = [
    { id: 1, name: 'Bolo de brigadeiro', amount: -20 },
    { id: 2, name: 'Salário', amount: 300 },
    { id: 3, name: 'Torta de Frango', amount: -10 },
    { id: 4, name: 'Violão', amount: 150 }
]

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    console.log(operator)
    
    {/*<li class="minus">
        Salário <span>-$400</span><button class="delete-btn">x</button>
    </li>*/}
}
