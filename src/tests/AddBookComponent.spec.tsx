import React from "react";
import { fireEvent, render ,screen,waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe,expect,it , vi } from "vitest";
import store from "../store/store";
import { AddBookComponent } from "../AddBookComponent";
import userEvent from "@testing-library/user-event";

describe('Render Add Book Component', () => {
    it('load Add Book component ', async() => {
        render(
             <Provider store={store}>
                <AddBookComponent/>
             </Provider>
        );
       screen.debug();

    const input = await screen.findByPlaceholderText('Title');
    await userEvent.type(input, "Wings Of Fire");
    expect(input).toHaveValue("Wings Of Fire");

    const authorInput = await screen.findByPlaceholderText('Author');
    await userEvent.type(authorInput, "Dr Kalam");
    expect(authorInput).toHaveValue("Dr Kalam");

    const genreInput = await screen.findByPlaceholderText('Genre');
    await userEvent.type(genreInput, "Dr Kalam");
    expect(genreInput).toHaveValue("Dr Kalam");

    const btn = await screen.findByRole("button", { name: "Add" })
    await fireEvent.click(btn);

    const mockOnClickHandler = vi.fn();
fireEvent.submit(btn)
vi.spyOn(console, 'warn');

    // await waitFor(() => {
    //     expect(mockOnClickHandler).toBeCalled();
    //   });

    });

    
})