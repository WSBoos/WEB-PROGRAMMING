function getDayName (input) {
    const daysInWeek = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์']
    return daysInWeek[input]
}

function formatDate (input) {
    const allMonth = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
    return getDayName(input.day) + "ที่ " + input.date + " " + allMonth[input.month] + " พ.ศ. " + (input.year + 543)
}

function findTotal (input) {
    let sum = 0
    input.forEach(value => {
        sum += value
    });
    return sum
}

function findMinMax (input) {
    return {
        "min": Math.min(...input),
        "max": Math.max(...input)
      }
    // input.sort(function(a, b){return a - b});
    // return {
    //     "min": input[0],
    //     "max": input[input.length-1]
    //   }
}

function findBMI (input) {
    input.forEach(value =>{
        value.bmi = (value.weight / (Math.pow((value.height/100), 2))).toFixed(2)
    });
    return input
}