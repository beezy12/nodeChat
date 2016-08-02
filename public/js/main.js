;(function () {
    'use strict'

    const ws = io.connect()

    ws.on('connect', () => {
        console.log('socket connected in main.js')
    })


    // so first the form is submitted below with the values being passed into 'sendChat' socket through the server, which then calls the 'receiveChat', THEN the displayChat function is called here...'displayChat' function is below
    ws.on('receiveChat', msg => {
        console.log('msg', msg)
        displayChat(msg.name, msg.convo)  // these are the keys assigned in the ws.emit below
    })



    // grabbing all values from form
    const form = document.querySelector('form')
    const name = document.querySelector('input[name="name"]')
    const convo = document.querySelector('input[name="convo"]')
    const ul = document.querySelector('ul')

    form.addEventListener('submit', () => {
        // so when the form is submitted, get the actual text...
        const [n, c] = [name.value, convo.value]

        // ...and call the sendChat function in server.js, passing the form values over the socket
        ws.emit('sendChat', {
            name: n,
            convo: c
        })

        // after text is sent, the server receives it and calls 'receiveChat' above, so I call this 'displayChat' function inside of it
        displayChat(n, c)

        text.value = ''

        event.preventDefault()

    })

    const displayChat = (name, words) => {
        const li = generateLI(name, words)

        ul.appendChild(li)
    }

    const generateLI = (name, words) => {
        const li = document.createElement('li')
        const textNode = document.createTextNode(`${name}: ${words}`)

        li.appendChild(textNode)

            return li
    }


}())
