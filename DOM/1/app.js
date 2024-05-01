document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();

    const rows = Number(document.querySelector('#rows').value);
    const columns = Number(document.querySelector('#columns').value);
    const gridContainer = document.querySelector('.gridContainer');

    gridContainer.innerHTML = '';

    for (let i = 0; i < rows; i+=1){
        for (let j = 0; j < columns; j+=1){
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridContainer.appendChild(gridItem);
        }
        gridContainer.appendChild(document.createElement('div'));
    }
})