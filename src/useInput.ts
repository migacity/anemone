interface UseInput {
  zone: Phaser.GameObjects.Zone;
  setEventHandler: (handler: Function) => void;
  removeEventHandler: (handler: Function) => void;
}

export const useInput = (scene: Phaser.Scene): UseInput => {
  const self = scene;
  const { width, height } = self.game.canvas;
  const zone = self.add.zone(width / 2, height / 2, width, height);
  zone.setInteractive({
    useHandCursor: true,
  });
  const space = scene.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.SPACE
  );

  const setEventHandler = (handler: Function): void => {
    zone.on("pointerdown", handler, self);
    space.on("down", handler, self);
  };

  const removeEventHandler = (handler: Function): void => {
    zone.off("pointerdown", handler, self);
    space.off("down", handler, self);
  };

  return {
    zone,
    setEventHandler,
    removeEventHandler,
  };
};
