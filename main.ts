basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, randint(18, 22))
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, randint(18, 22))
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 200)
        basic.pause(500)
    }
})
