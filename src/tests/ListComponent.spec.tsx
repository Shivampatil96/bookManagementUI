import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it } from "vitest";
import store from "../store/store";
import { ListComponent } from "../ListComponent";


describe("MuiSimpleButton Tests", () => {
    it("should display button with text", async () => {
      render(<Provider store={store}>
                    <ListComponent />
              </Provider>);
  screen.debug();
    //   expect(
    //     await screen.findByRole("button", { name: "Edit" }),
    //   ).toBeInTheDocument();
    });
});
