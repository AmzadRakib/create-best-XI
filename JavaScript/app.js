const playerArray = [];
function addPlayer(addPlayer) {
    const tableBody = document.getElementById('add-player');
    tableBody.innerHTML = '';
    for (let i = 0; i < addPlayer.length; i++) {
        const name = addPlayer[i].playerName;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <tr>
            <th scope="row">${i + 1}.</th>
            <td>${name}</td>
        </tr>
    `
        tableBody.appendChild(tr);
    }

}


function selectPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;

    const playerObj = {
        playerName: playerName,
    };

    playerArray.push(playerObj);

    addPlayer(playerArray);

    element.disabled = true;


}



// calculate section 

// common function 
function getInputElementId(elementId) {
    const usingId = document.getElementById(elementId);
    const getIdString = usingId.value;
    const getInputId = parseInt(getIdString);
    return getInputId;
}
document.getElementById('btn-calculate-expense').addEventListener('click', function () {
    const selectedPlayer = playerArray.length;
    const playerAmount = getInputElementId('Player-cost');
    document.getElementById('Player-cost').value = '';
    if (isNaN(playerAmount)) {
        alert('Please input player expense and select player')
        return;
    }
    const totalPlayerAmount = selectedPlayer * playerAmount;
    const totalPlayerExpense = document.getElementById('player-expense');
    totalPlayerExpense.innerText = totalPlayerAmount;
})

document.getElementById('btn-total-calculate').addEventListener('click', function () {
    const totalPlayerExpenseField = document.getElementById('player-expense');
    const totalPlayerExpenseString = totalPlayerExpenseField.innerText;
    const totalPlayerExpense = parseInt(totalPlayerExpenseString);
    const managerExpense = getInputElementId('manager-cost');
    const coachExpense = getInputElementId('coach-cost');
    if (
        totalPlayerExpense <= 0 ||
        isNaN(managerExpense) ||
        managerExpense < 0 ||
        coachExpense === '' ||
        isNaN(coachExpense) ||
        coachExpense < 0
    ) {
        alert('Please select player and input all value');
        return;
    }
    const totalExpense = totalPlayerExpense + managerExpense + coachExpense;
    document.getElementById('total-expense').innerText = totalExpense;


})

