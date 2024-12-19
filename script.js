const card = document.getElementById('card')
const form = document.getElementById('form')
const emailInput = document.getElementById('email')
const subcontainer = document.getElementById('subcontainer')
const mailText = document.getElementById('mailText')

//validerer om epostadresse er fylt ut
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailInput.value.trim() !== '') {
        console.log(emailInput.value)
        mailText.textContent = emailInput.value
        subcontainer.classList.remove('hidden');
        card.classList.add('hidden')
    } else {
        alert('Valid email required')
    }
})


