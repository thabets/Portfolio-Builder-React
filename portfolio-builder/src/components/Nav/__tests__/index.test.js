import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";
const categories = [
  { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe("Nav component renders", () => {
  //baseline test
  it("renders", () => {
    render(<Nav />);
  });
  //snapshot test
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<Nav />);
    //value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    //Arrange
    const { getByLabelText } = render(<Nav />);
    //Assert
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

describe("links are visible", () => {
  it("inserts text into links", () => {
    //Arrange
    const { getByTestId } = render(<Nav />);
    //Assert
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});
