import { predictions } from "../../constants/predictions";

export function alice(inputString) {
    const words = inputString.match(/[а-я]+/gim);//get words only
    if (words[words.length - 1].length < 3) {
        return predictions[Math.floor(Math.random() * predictions.length)];
    }
    const candidates = [];//array of indexes of prediction matches to words
    for (let index = words.length - 1; index >= 0; index--) {//
        words[index] = words[index].split('').slice(0, -1).join('');
        predictions.forEach((item, i) => {
            if (item.includes(words[index])) candidates.push(i)
        })
    }
    if (candidates.length === 0) {
        return alice(trimIt(words))
    } else {
        return predictions[candidates[0]]
    }
}

function trimIt(words) {
    for (let index = 0; index < words.length; index++) {
        words[index] = words[index].split('').slice(0, -1).join('');
    }
    return words.join(' ');
}