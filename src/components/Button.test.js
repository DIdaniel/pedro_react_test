import { fireEvent, render, act } from "@testing-library/react";
// import { act } from "react-dom/test-utils";
import Button from "./Buttons";

describe("INPUT COMPONENT", () => {
  it("render Button", () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId("button");
    expect(button).toBeTruthy();
  });

  it("render 1 button before click", () => {
    const { getAllByTestId } = render(<Button />);
    const buttonList = getAllByTestId("button");
    expect(buttonList).toHaveLength(1); // 버튼이 하나만 있는가 체크
  });

  it("render 2 button after click", async () => {
    await act(async () => {
      const { getAllByTestId } = render(<Button />);
      const buttonList = getAllByTestId("button");
      // fireEvent를 하면 state가 변화하기 떄문에 async, await을 사용해줘야한다
      await fireEvent.click(buttonList[0]);
      // buttonList를 사용하게 되면 변화하기 전의 button을 사용하는 것이므로 직접 다시 넣어야한다
      expect(getAllByTestId("button")).toHaveLength(2); // 버튼이 하나만 있는가 체크
    });
  });
});
