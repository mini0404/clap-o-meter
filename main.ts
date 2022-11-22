input.onSound(DetectedSound.Loud, function () {
    start = input.runningTime()
    if (input.runningTime() >= 3000) {
        music.setVolume(127)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
input.onSound(DetectedSound.Quiet, function () {
    if (start > 0) {
        time = input.runningTime() - start
        start = 0
        basic.clearScreen()
        basic.pause(3000)
        basic.showNumber(time / 1000)
        music.stopAllSounds()
    }
})
let time = 0
let start = 0
input.setSoundThreshold(SoundThreshold.Loud, 150)
start = 0
