basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(200)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 200)
        basic.pause(500)
    }
})
