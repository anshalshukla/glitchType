import React from 'react'

import classes from './Key.module.css'

const getKeyClassName = (keyType, pressed) => {
    let keyStyleClass = classes.key
    if (pressed) {
        keyStyleClass = [keyStyleClass, classes.pressed].join(' ')
    }

    switch (keyType) {
        case "letter": return [keyStyleClass, classes.letter].join(' ')
        case "leftShift": return [keyStyleClass, classes.leftShift].join(' ')
        case "rightShift": return [keyStyleClass, classes.rightShift].join(' ')
        case "space": return [keyStyleClass, classes.space].join(' ')
        case "enter": return [keyStyleClass, classes.enter].join(' ')
        case "capsLock": return [keyStyleClass, classes.capsLock].join(' ')
        case "backSpace": return [keyStyleClass, classes.backSpace].join(' ')
        case "tab": return [keyStyleClass, classes.tab].join(' ')
        default:
            console.log('Unknown key type!')
            break
    }
}

const key = (props) => {
    
    let keyStyleClass = getKeyClassName(props.keyType, props.pressed)

    if (props.disabled) {
        keyStyleClass = [keyStyleClass, classes.disabled].join(' ')
    }

    let key = props.disabled ? "" : props.keyName

    return (
        <div className={keyStyleClass}>
            {props.upperCase && props.keyType === "letter" ? key.toUpperCase() : key}
        </div>
    )
}

export default key