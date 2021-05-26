const scriptURL = 'https://script.google.com/macros/s/AKfycbyrpXQ3Aac3Pb5AxGu5NsXzxcZ4mmBl9aDfWNpNlpZnf-qAA5CRO9tNv-9Qp0Z0KcjSuA/exec'
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {
            //This is where you write your code




            //Do not alter below this line
        })
        .catch(error => console.error('Error!', error.message))
})