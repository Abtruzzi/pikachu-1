const string = `
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.skin *::after,
.skin *::before {
    box-sizing: border-box;
}

.skin {
    position: relative;
    background: #ffe600;
    min-height: 100vh;
}

.nose {
    border: 12px solid black;
    /* border-width: 12px;
    border-style: solid; */
    border-color: black transparent transparent;
    /* border-bottom: none; */
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 135px;
    margin-left: -12px;
    border-radius: 11px;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    33% {
        transform: rotate(4deg);
    }

    66% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(-4deg);

    }
}

.nose:hover {
    animation: wave 210ms infinite;
}

.eye {
    border: 3px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}

.eye::before {
    display: block;
    content: '';
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    position: relative;
    left: 6px;
    top: -1px;
}

.eye.left {
    transform: translateX(-115px);
}

.eye.right {
    transform: translateX(115px);
}

.mouth {
    width: 160px;
    height: 160px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -80px;
}

.mouth .up {
    position: relative;
    top: -10px;
    z-index: 1;
}

.mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 80px;
    border-top-color: transparent;
    position: absolute;
    background: #ffe600;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 90%;
    border-right-color: transparent;
    transform: rotate(-25deg);
    left: 50%;
    margin-left: -50%;
}

.mouth .up .lip.right {
    border-radius: 0 0 90% 0;
    border-left-color: transparent;
    transform: rotate(25deg);
    right: 50%;
    margin-right: -50%;
}

.mouth .down {
    height: 155px;
    position: absolute;
    top: 2px;
    width: 100%;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -75px;
    border-radius: 75px/280px;
    overflow: hidden;
    background: #9b000a;
}

.mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 500px;
    position: absolute;
    bottom: -375px;
    left: 50%;
    margin-left: -100px;
    border-radius: 200px/300px;
    background: #ff485f;
}

.face {
    border: 3px solid black;
    width: 88px;
    height: 88px;
    position: absolute;
    top: 200px;
    left: 50%;
    margin-left: -44px;
    border-radius: 50%;
    background: red;
}

.face>img {
    position: absolute;
    left: 50%;
    top: 50%;
}

.face.left {
    transform: translateX(-170px);
}

.face.right {
    transform: translateX(170px);
}

.face.left>img {
    transform: rotate(180deg);
    transform-origin: 0 0;
    display: inline;
}

.face.right>img {
    transform: rotateX(180deg);
    top: -50%;
    display: inline;
}
`
export default string;//导出