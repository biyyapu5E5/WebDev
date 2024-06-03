// async function fun(country) {
//     const data = await fetch(`https://jsonmock.hackerrank.com/api/countries?name=${country}`)
//     const rq = await data.json()
//     if(rq.data.length==0) {
//         // return -1;
//         console.log(-1)
//     }
//     else {
//         // return rq.data[0].capital;
//         console.log(rq.data[0].capital);
//     }
// }
// fun('Afghanistan');
scores = [2,2,3,4,5]
k = 4 
s = scores.sort((a,b) => b-a)
d = []
res = []

for(let i=0;i<s.length;i++){
    if(d.includes(s[i])){
        res[i] = res[i-1]
    }
    else {
        res[i] = i+1
        d.push(s[i])
    }
}

console.log(res)
localStorage.setItem('valid', JSON.stringify(['hello','hei']))
const ds = localStorage.getItem('valid')
console.log(ds)
const data = JSON.parse(localStorage.getItem('validData'))
localStorage.setItem('validData',JSON.stringify([...data,'wel','doc']))
const ds2 = localStorage.getItem('valid')
console.log(ds2)
