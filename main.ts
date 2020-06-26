input.onButtonPressed(Button.A, function () {
    anim = 0
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    claw_close_fun()
    claw_open_fun()
})
function claw_close_fun () {
    while (claw_open >= claw_min) {
        claw_open += -5
        robotbit.Servo(robotbit.Servos.S1, claw_open)
        basic.pause(50)
    }
    openning = 1
}
function claw_open_fun () {
    while (claw_open < clawmax) {
        claw_open += 5
        robotbit.Servo(robotbit.Servos.S1, claw_open)
        basic.pause(50)
    }
    openning = 0
}
input.onButtonPressed(Button.AB, function () {
    if (anim) {
        anim = 0
    } else {
        anim = 1
    }
})
input.onButtonPressed(Button.B, function () {
    anim = 0
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # .
        `)
    lift_up()
    lift_down()
})
function lift_down () {
    while (lift >= lift_min) {
        lift += -5
        robotbit.Servo(robotbit.Servos.S2, lift)
        basic.pause(50)
    }
    lifting = 1
}
function lift_up () {
    while (lift < lift_max) {
        lift += 5
        robotbit.Servo(robotbit.Servos.S2, lift)
        basic.pause(50)
    }
    lifting = 0
}
let lifting = 0
let openning = 0
let anim = 0
let lift = 0
let lift_max = 0
let lift_min = 0
let claw_open = 0
let claw_min = 0
let clawmax = 0
clawmax = 140
claw_min = 30
claw_open = claw_min
lift_min = 30
lift_max = 140
lift = claw_min
anim = 1
basic.forever(function () {
    if (anim) {
        lift_down()
        claw_open_fun()
        lift_up()
        claw_close_fun()
    }
})
control.inBackground(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(200)
})
