import React from 'react'
import GameScreen from '../../GameScreen';
import kaboom from 'kaboom';
import addButton from '../../addObjectFuncs/addButton';

function Trivia() {

    return (
        <GameScreen funcGame={theGame} />
    )
}

const settings = {
    question: 'when WarioWare, Inc.: Mega Microgame$! released',
    answerA: '2000',
    answerB: '2003',
    answerC: '2012',
    answerD: '1956',
    trueAnswer: 'answerB'
}

function theGame(k = kaboom()) {

    const {
        loadSprite, setBackground, vec2, get, center,
        width: screenWidth, height: screenHeight, add,
        pos, rect, outline, anchor, color, text
    } = k

    setBackground(233, 233, 233)

    // const text = () => k.get('*').length

    // const func = (obj) => {
    //     obj.text = 'aya!'
    //     k.wait(1.5, () => { obj.text = obj.originalText })
    // }
    const func = (obj) => {
        if (obj.text === settings[trueAnswer]){
            alert('YOU WIN!')
        } 
        else{
            alert('oi vey..')
        }
    }

    const width = screenWidth()
    const height = screenHeight()


    const{answerA,answerB,answerC,answerD,question: questionText,trueAnswer} = settings

    let texto = 'QUESTION'
    const question = add([
        rect(width * 0.9, height / 3, { radius: 4 }),
        pos(width / 2, height / 4),
        outline(1),
        anchor('center'),
    ])
    question.add([
        'question',
        anchor('center'),
        text(questionText, {
            size: 20,
            width: width * 0.8,
            align: 'left'
        }),
        color('#000000')

    ])

    k.onCharInput((ch) => {
        question.children[0].text += ch
    })

    addButton(k, {
        text: answerA,
        pos: vec2(width / 4, height * 0.6),
        size: { w: width / 2.5, h: height / 6 },
        color: '#da193b',
        onclick: func
    })
    addButton(k, {
        text: answerB,
        pos: vec2(width * 0.75, height * 0.6),
        size: { w: width / 2.5, h: height / 6 },
        color: '#d79c02',
        onclick: func,
    })

    addButton(k, {
        text: answerC,
        pos: vec2(width / 4, height * 0.85),
        size: { w: width / 2.5, h: height / 6 },
        color: '#1363cb',
        onclick: func,
    })
    addButton(k, {
        text: answerD,
        pos: vec2(width * 0.75, height * 0.85),
        size: { w: width / 2.5, h: height / 6 },
        color: '#2a8b0f',
        onclick: func,
    })
}



export default Trivia