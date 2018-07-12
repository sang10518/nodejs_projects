/**
 * 
 * 이름, 나이, 성별, 몸무게, 키가 순서대로 담겨있는 배열이 있습니다. 
 * 이 배열을 reduce 함수를 이용해 아래와 같은 객체로 바꿔보세요.
 * 
 */

const arr = [
    ['Dan', 20, 'Male', 80, 180],
    ['Chris', 22, 'Male', 70, 190],
    ['David', 25, 'Male', 75, 185],
    ['Louie', 27, 'Male', 60, 190]
]

const info = arr.map(user => {
  const name = user[0]
  const age = user[1]
  const gender = user[2]
  const weight = user[3]
  const height = user[4]
  return {name, age, gender, weight, height}  
})

const initialElem = {}
initialElem[info[0].name] = info[0]

console.log("info1:"+JSON.stringify(info[0]))

const resultObj = info.reduce((aggregateInfo, item) => {
    console.log("item name: " + item.name)
    aggregateInfo[item.name] = item
    return aggregateInfo
    }
, initialElem)

console.log("resultObj:" + JSON.stringify(resultObj))

const targetObj = {
    'Dan': {
        name: 'Dan',
        age: 20,
        gender: 'Male',
        weight: 80,
        height: 180
    },
    'Chris': {
        name: 'Chris',
        age: 22,
        gender: 'Male',
        weight: 70,
        height: 190
    },
    'David': {
        name: 'David',
        age: 25,
        gender: 'Male',
        weight: 75,
        height: 185
    },
    'Louie': {
        name: 'Louie',
        age: 27,
        gender: 'Male',
        weight: 60,
        height: 190
    }
}