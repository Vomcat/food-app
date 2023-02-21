import { rest } from "msw";
import { MOCK_DATA_PRODUCTS, MOCK_DATA_ORDERS } from "mocks/mockedData";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_HOST}/items`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_DATA_PRODUCTS));
  }),

  rest.get(`${process.env.REACT_APP_API_HOST}/order`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_DATA_ORDERS));
  }),
];
