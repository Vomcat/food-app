import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState, Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";

import cartSlice from "store/cartSlice";
import type { RootState } from "store/store";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions
  extends Omit<RenderOptions, "wrapper" | "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: Store;
}

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = { items: [], totalAmount: 0, totalQuantity: 0 },
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: { cartReducers: cartSlice },
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export { renderWithProviders as render };
export * from "@testing-library/react";
export * from '@testing-library/jest-dom';

