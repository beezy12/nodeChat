;(function () {
    'use strict'

    const ws = io.connect()

    ws.on('connect', () => {
        console.log('socket connected in main.js')
    })


    const form = document.querySelector('form')
    const name = document.querySelector('input[name="name"]')
    const convo = document.querySelector('input[name="convo"]')
    const ul = document.querySelector('ul')

})
