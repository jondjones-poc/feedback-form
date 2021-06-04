const send = document.getElementById('send');
const panel = document.getElementById('panel');
const ratingsContainer = document.getElementById('ratings-container');
const ratings = document.querySelectorAll('.rating');

let selected = 'Satisfied';

const removeActive = () => {
    ratings.forEach((rating) => rating.classList.remove('active'))
};

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selected = e.target.nextElementSibling.innerHTML;
    }
})

send.addEventListener('click', () => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <br>
    <strong>Thanks!</strong>
    <br><br>
    <strong>Feedback: ${selected}</strong>
    <p>We'll use your feedback to improve out custom services`;
})