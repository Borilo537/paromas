const opaque = document.querySelector('.opaque')
const mainBackground = document.querySelector('.mainBackground')
const logoImageContainer = document.querySelector('.logoImageContainer')
const logoImage = document.querySelector('.logoImage')
const welcomeContent = document.querySelector('.welcomeContent')
const countries = document.querySelector('.countries')
const brasil = document.querySelector('#brasil')
const cuba = document.querySelector('#cuba')
const italia = document.querySelector('#italia')
const nicaragua = document.querySelector('#nicaragua')
const republica = document.querySelector('#republica')

setTimeout(() =>{

    opaque.style.opacity = '0.6'
    mainBackground.style.filter = 'blur(5px)'
    logoImageContainer.style.height = '3.2rem'
    logoImageContainer.style.margin = '100px 0vw 40px 0vw '
    logoImage.style.width = '11rem'
    welcomeContent.style.height = '10rem'
    brasil.style.top = '0'
    setTimeout(() =>{
        cuba.style.top = '10%'
        cuba.style.height = '90%'
        setTimeout(() =>{
            italia.style.top = '20%'
            italia.style.height = '80%'
            setTimeout(() =>{
                nicaragua.style.top = '30%'
                nicaragua.style.height = '70%'
                setTimeout(() =>{
                    republica.style.top = '40%'
                republica.style.height = '60%'

                },300)
            },100)
        },100)
    },200)
},200)