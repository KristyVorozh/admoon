import { boxModel } from "../index.ts";
import { Space } from "antd";
import { animated, useTransition } from "@react-spring/web";
const BoxList = () => {
  const boxList = boxModel.useBoxList();
  const transitions = useTransition(boxList, {
    from: { x: 0, config: { duration: 500 } },
    enter: { x: 100, config: { duration: 500 } },
    leave: { x: 200, config: { duration: 500 } },
  });

  return (
    <Space
      style={{
        width: "90vw",
        overflow: "auto",
      }}
    >
      {transitions((style, item) => (
        <animated.div
          style={{
            width: "20vw",
            height: "20vw",
            background: `#${item}`,
            borderRadius: 8,
            ...style,
          }}
        />
      ))}
    </Space>
  );
};

export { BoxList };
