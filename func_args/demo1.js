function information( user ) {
    return `${user.name} ${ user.sex} ${ user.money} ${ user.birthday} ${ user.color} ${ user.likes} ${ user.follow} ${ user.age}`
}

let user = {
    name: '李丹',
    sex: '女',
    money: '1个亿',
    birthday: '5-22',
    color: '绿',
    likes: ['看剧'],
    follow: '周杰伦',
    age: 16
}

information( user )