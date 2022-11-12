export const useInput = (scene: Phaser.Scene) => {
    const self = scene
    const { width, height } = self.game.canvas;
    const zone = self.add.zone(width / 2, height / 2, width, height)
    zone.setInteractive({
        useHandCursor: true,
    })

    const setEventHandler = (handler: Function) => {
        zone.on('pointerdown', handler, self)
    }

    const removeEventHandler = (handler: Function) => {
        zone.on('pointerdown', handler, self)
    }

    return {
        zone,
        setEventHandler,
        removeEventHandler,
    }
}