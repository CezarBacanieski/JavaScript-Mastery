const student = {
    name: 'John Jones',
    age: 17,
    id: '345675879778',
    class: 'JavaScript'
}

function showInfoStudent(objStudent, infoStudent) {
    return objStudent[infoStudent]
}

const showThatUp = showInfoStudent(student, 'age')
console.log(showThatUp)