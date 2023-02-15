import { rest } from "msw";
import { MOCK_DATA } from "mocks/mockedData";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_HOST}/items`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_DATA));
  }),
];
