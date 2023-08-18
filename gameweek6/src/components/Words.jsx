import React from 'react'
import wordBank from '../wordle-bank.txt'

//helper to set useState default to empty board
const boardDefault = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
];

//Read wordle-bank file and transform into Set
const generateWordSet = async () => {
    let wordSet
    await fetch(wordBank)
    //for each response, turn it into text 
    .then((response) => response.text())
    //make each result an element of an array and split at each newline
    .then((result) => {
        const wordArr = result.split('\n')
    //make a Set from the array
        wordSet = new Set(wordArr)
    })
    return { wordSet }
}


export {boardDefault, generateWordSet}


