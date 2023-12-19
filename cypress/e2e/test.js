let example1 = 'zasdklsdfmjbksdmcksdlmc23213131sdkfkskscmkldsmc';
console.log('before sort: ', example1)
let chList = example1.split('')
chList.sort()
example1 = chList.join('')
console.log('after sort', example1)



const map1 = new Map();
const ch = example1.split('')
for(let i=0; i<example1.length;i++){
    if(map1.has(ch[i])){
        map1.set(ch[i], map1.get(ch[i])+1)
    }
    else{
        map1.set(ch[i], 1)
    }
}

console.log('after foundout repeat')
console.log(map1)

const set1 = new Set();
const ch2 = example1.split('')
for(let i =0; i <example1.length; i++){
    set1.add(ch2[i])
}
let resultString = ''

 console.log(set1)
 for(let value of set1){
    resultString =  resultString+value
 }

 console.log(resultString)

 let example2 = 'kudret zayir';

 const ch3 = example2.split('')
 let afterReverse ='';
 for(let i=example2.length-1; i>=0; i--){
    afterReverse = afterReverse+ch3[i];
 }

 console.log('after reversing: ', afterReverse)