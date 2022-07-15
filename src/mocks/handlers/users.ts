import { rest } from "msw";

import { PATH } from "../../core/api/common/constants";

export const usersHandler = [
  rest.get(`${process.env.REACT_APP_BASE_URL}${PATH.USERS}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          name: "example name",
          nickname: "example nickname",
          email: "example email",
          profile_image_url: "example profile_image",
        },
      }),
    );
  }),
];
