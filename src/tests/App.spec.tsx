import React from "react";
import { render ,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe,it } from "vitest";
import store from "../store/store";
import App from "../App";
import { DisplayBook } from "../DisplayBook";



describe('Render App Component', () => {
    it('load app component ', () => {
        render(
             <Provider store={store}>
                <DisplayBook/>
             </Provider>
        );
       screen.debug();
    })
})