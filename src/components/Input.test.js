import { fireEvent, render, act } from "@testing-library/react";
// import { act } from "react-dom/test-utils";
import Input from "./Input";

describe("INPUT COMPONENT", () => {
  it("render input", () => {
    const { getByTestId } = render(<Input showDiv={false} />);
    const input = getByTestId("search_bar");

    expect(input).toBeTruthy();
  });

  it("render div", () => {
    const { getByTestId } = render(<Input showDiv={true} />);
    const div = getByTestId("divWeWantToShow");

    expect(div).toBeTruthy();
  });

  it("dont' render div", () => {
    const { queryByTestId } = render(<Input showDiv={false} />);
    const div = queryByTestId("divWeWantToShow");

    expect(div).toBeFalsy();
  });

  // Fire Input - Error
  // it("change on input causes change on header", async () => {
  //   try {
  //     await act(async () => {
  //       try {
  //         const { getByTestId } = render(<Input showDiv={true} />);
  //         const input = getByTestId("search_bar");
  //         const header = getByTestId("displaySearch");
  //         const inputWord = "Patrick";

  //         await fireEvent.change(input, { target: { value: inputWord } });
  //         expect(header.innerHTML).toBe(inputWord);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });
});
