interface ButtonOption {
  top: number;
  left: number;
  width: number;
  height: number;
  caption: string;
}
const useUi = (
  container: Phaser.GameObjects.Container
): {
  addButton: (options: ButtonOption[]) => void;
  removeButton: () => void;
} => {
  const addButton = (options: ButtonOption[]): void => {
    console.log(container);
    options.forEach((option) => {
      // ここのボタン用のcontainerを作り、eventに反応するようにする。
      const buttonContainer = container.scene.add.container(
        option.left,
        option.top
      );
      buttonContainer.setSize(option.width, option.height);
      buttonContainer.setInteractive({ useHandCursor: true });
      container.add(buttonContainer);

      // ボタンの見た目を作る。
      const box = container.scene.add.rectangle(
        option.left,
        option.top,
        option.width,
        option.height,
        0xc0c0c0
      );
      buttonContainer.add(box);
      const text = container.scene.add.text(
        option.left,
        option.top,
        option.caption
      );
      buttonContainer.add(text);

      // クリック時の動作を登録したい。
      container.on("pointerdown", () => {
        console.log("buttondown");
      });

      buttonContainer.on("pointerup", () => {
        console.log("buttonup");
      });
      console.log(option.caption);
    });
  };

  const removeButton = (): void => {
    container.getAll().map((v) => v.destroy());
  };

  return { addButton, removeButton };
};

export { useUi };
export type { ButtonOption };
