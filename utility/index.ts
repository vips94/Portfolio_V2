//check if the number is even
export function isEven (number:number) {
    return (number & 1) === 0;
}

export function getMidPoint(length:number){
    return isEven(length) ? length / 2  : (length - 1) / 2;
}