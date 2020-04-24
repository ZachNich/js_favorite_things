document.querySelector('#save').addEventListener('click', event => {
    document.querySelector('#sentence').textContent = `I can purchase ${document.querySelector('#item').value} at ${document.querySelector('#store').value}`;
})