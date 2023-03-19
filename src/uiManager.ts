interface CommonButtonOption {
  top: number;
  left: number;
  width: number;
  height: number;
  onClick: Function;
  param?: any;
}

interface TextButtonOption {
  type: "textButton";
  caption: string;
}

interface ContainerButtonOption {
  type: "containerButton";
  caption: Phaser.GameObjects.Container;
}

type ButtonOption = CommonButtonOption &
  (TextButtonOption | ContainerButtonOption);

const useUi = (
  container: Phaser.GameObjects.Container
): {
  addButton: (options: ButtonOption[]) => void;
  removeButton: () => void;
} => {
  const addButton = (options: ButtonOption[]): void => {
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
        0,
        0,
        option.width,
        option.height,
        0x000000,
        0.75
      );
      buttonContainer.add(box);

      const buttonTextStyle: Phaser.Types.GameObjects.Text.TextStyle = {
        fontSize: "18px",
        padding: { top: 4 },
      };

      switch (option.type) {
        case "textButton": {
          const text = container.scene.add.text(
            0,
            0,
            option.caption,
            buttonTextStyle
          );
          text.setOrigin(0.5, 0.5);
          buttonContainer.add(text);
          break;
        }
        case "containerButton": {
          buttonContainer.add(option.caption);
          break;
        }
      }

      // クリック時の動作を登録したい。
      buttonContainer.on("pointerup", () => {
        option.onClick(option.param);
      });
    });
  };

  const removeButton = (): void => {
    container.getAll().map((v) => v.destroy());
  };

  return { addButton, removeButton };
};

export { useUi };
export type { ButtonOption };
