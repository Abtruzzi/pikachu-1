import string from './css.js' //导入

const player = {
    n: 1,
    time: 100,
    id: undefined,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2'),
        face: document.querySelectorAll('.face')

    },

    events: { //哈希表 key : value
        '#btnPause': 'pause',
        '#btnPlay': 'transmit',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: () => {
        player.ui.demo.innerText = string.substring(0, player.n)//写入string 的 子字符串
        player.ui.demo2.innerHTML = string.substring(0, player.n)
        player.play()
        player.bindEvents()
        player.addFlash()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) { //防止取到继承属性 Object.prototype.x = 1
                const value = player.events[key] //pause / slow / normal...
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substring(0, player.n)
        player.ui.demo2.innerHTML = string.substring(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: () => {
        return player.id = setInterval(player.run, player.time)
    },
    transmit: () => {
        player.pause()
        player.play()
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    },
    addFlash: () => {
        for (let i = 0; i < player.ui.face.length; i++) {
            const flash = document.createElement('img')
            flash.setAttribute('src', 'https://img1.imgtp.com/2023/07/09/33aptmbK.gif')
            player.ui.face[i].appendChild(flash)
        }
    }
}

player.init()