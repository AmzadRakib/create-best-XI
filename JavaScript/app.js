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

