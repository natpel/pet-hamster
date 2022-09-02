input.onButtonPressed(Button.A, function () {
    health += 2
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(health)
})
input.onButtonPressed(Button.B, function () {
    sleep += 4
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # . #
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # . #
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # . #
        . . # # .
        `)
})
let health = 0
health = 10
let sleep = 10
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # # .
        # # # . .
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # # .
        # # # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . # #
        . # # # .
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # . .
        . . # # #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # . . .
        . # # # .
        . # # . .
        `)
    if (health == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . # #
            # # # # #
            `)
        basic.pause(2000)
        basic.showString("game over")
    }
})
basic.forever(function () {
    health += -1
    sleep += -1
    basic.pause(2000)
})
