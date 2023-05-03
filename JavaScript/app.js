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
