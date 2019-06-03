// ali 14.6 2.6 
// meituan 16 4
// 51信用卡 17 5
//s 5
//a 3
//b 2
//c 1
//d 
let stratigies = {
    'S' : function(salary) {
        return salary * 5;
    },
    'A' : function(salary) {
        return salary * 3;
    },
    'B' : function(salary) {
        return salary * 2;
    },
    'C' : function(salary) {
        return salary * 1;
    },
    'D' : function(salary) {
        return 0;
    },
}
function calculate(level, salary) {
    return  stratigies[level](salary);
    // var sum;
    // switch(level){
    //     case 'S': sum = 17 * salary; break;
    //     case 'A': sum = 15 * salary; break;
    //     case 'B': sum = 14 * salary; break;
    //     case 'C': sum = 13 * salary; break;
    //     case 'D': sum = 12 * salary; break;
    // }
    // return ( -'D') * salary;
//    return sum;     
}
console.log(calculate('S', 10000));