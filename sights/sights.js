document.getElementById('sights_container').onclick = (event) => {
    const elem = event.target;
    if (elem.classList.contains('copyText')) {
        navigator.clipboard.writeText(elem.innerHTML)
            .then(() => {
                alert('Прицел скопирован!')
                document.querySelector('.out').innerHTML += 'copy<br>';
            })
            .catch(err => {
                console.log(err);
            });
    }
}