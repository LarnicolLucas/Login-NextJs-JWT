export default function salt(){

    const size = 10;
    const chars= "abcdef0123456789";
    const random = (max) => Math.floor(Math.random() * max);

    const createRandom = (index, size, char, fn, res) => { 
        if(index >= size) return res;
        const randomCharIndex = fn(char.length - 1);
        const newRes= res+char[randomCharIndex];
        return createRandom(index+1, size, char, fn, newRes)
    };

    return createRandom(0, size, chars, random, '')

}