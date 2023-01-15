
function increment () {
    document.getElementById('inputNumber').stepUp();
 }
function decrement() {
    document.getElementById('inputNumber').stepDown();
 }
 
    
    
const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
function onAddPlayer(event){
    event.preventDefault();
    const addPlayer = document.getElementById("addPlayer").value;
    tbodyEl.innerHTML += `
        <tr>
            <td>${addPlayer}</td>
            <td><button class="deleteBtn">Delete</button></td>
        </tr> 
    `;

 }
function onDeletePlayer(event){
    if (!event.target.classList.contains("deleteBtn")) {
        return;

    }

    const button = e.target;
    button.closest("tr").remove();
 }
 formEl.addEventListener('submit', onAddPlayer);
 tableEl.addEventListener('click', onDeletePlayer);
