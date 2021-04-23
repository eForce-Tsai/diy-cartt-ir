eForce_IR.onPressEvent(RemoteButton.NUM7, function () {
    motor.motorStopAll()
    basic.pause(100)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 500)
})
eForce_IR.onPressEvent(RemoteButton.OK, function () {
    motor.motorStopAll()
    basic.pause(100)
})
eForce_IR.onPressEvent(RemoteButton.NUM5, function () {
    motor.motorStopAll()
    basic.pause(100)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 500)
})
eForce_IR.onPressEvent(RemoteButton.NUM2, function () {
    motor.motorStopAll()
    basic.pause(100)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 500)
})
input.onButtonPressed(Button.A, function () {
    motor.motorStopAll()
    basic.pause(500)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 500)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
eForce_IR.onPressEvent(RemoteButton.NUM4, function () {
    motor.motorStopAll()
    basic.pause(100)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 500)
})
eForce_IR.onPressEvent(RemoteButton.Num3, function () {
    motor.motorStopAll()
    basic.pause(100)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 500)
})
eForce_IR.onPressEvent(RemoteButton.NUM6, function () {
    motor.motorStopAll()
    basic.pause(100)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 500)
})
input.onButtonPressed(Button.B, function () {
    motor.motorStopAll()
    basic.pause(500)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 500)
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
eForce_IR.onPressEvent(RemoteButton.NUM1, function () {
    motor.motorStopAll()
    basic.pause(100)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 500)
})
eForce_IR.onPressEvent(RemoteButton.NUM8, function () {
    motor.motorStopAll()
    basic.pause(100)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 500)
})
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # . # .
    . # . # .
    `)
eForce_IR.init(Pins.P1)
basic.forever(function () {
	
})
