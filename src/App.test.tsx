import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders all 1000 people when page loads", () => {
  render(<App />);
  const people = screen.getAllByLabelText("Person");
  expect(people.length).toEqual(1000);
});

test("filters results when searching for Cullingford", () => {
  render(<App />);
  const searchInput = screen.getByLabelText("Search By Person Name");
  fireEvent.change(searchInput, { target: { value: "Cullingford" } });
  const people = screen.getAllByLabelText("Person");
  const name = screen.getByText("Dyanna Cullingford");
  expect(name).toBeInTheDocument();
  expect(people.length).toEqual(1);
});
