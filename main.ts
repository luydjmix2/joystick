basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 831) {
        basic.showString("ari")
    }
    if (pins.analogReadPin(AnalogPin.P0) < 1) {
        basic.showString("aba")
    }
    if (pins.analogReadPin(AnalogPin.P1) < 1) {
        basic.showString("izq")
    }
    if (pins.analogReadPin(AnalogPin.P1) > 831) {
        basic.showString("der")
    }
})
