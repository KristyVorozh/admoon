import "./App.css";
import { Button, Space } from "antd";
import { BoxList, boxModel } from "./entities/box";
import useAppDispatch from "./shared/utils/useAppDispatch.ts";

function App() {
  const boxList = boxModel.useBoxList();
  const dispatch = useAppDispatch();

  const addBox = () => {
    const newColor = Math.floor(Math.random() * 16777215).toString(16);
    dispatch(boxModel.setBoxList([newColor, ...boxList]));
  };

  const deleteBox = () => {
    dispatch(boxModel.setBoxList(boxList.slice(0, -1)));
  };

  return (
    <Space direction="vertical">
      <Space>
        <Button onClick={deleteBox}>Удалить</Button>
        <Button type="primary" onClick={addBox}>
          Добавить
        </Button>
      </Space>
      <BoxList />
    </Space>
  );
}

export default App;
