var userNumber = 0
var sum = null
var plus = 0

while (userNumber != -1) {
    plus++
    sum += (userNumber / plus)
    userNumber = Number(prompt('enter your number:...\nif you want the sum number enter \'-1\''))
}
alert(sum)