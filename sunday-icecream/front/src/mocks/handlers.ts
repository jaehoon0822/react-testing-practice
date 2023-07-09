import { rest } from "msw";

export const handlers = [
  rest.get('http://localhost:8080/scoops', (req, res, ctx) => {
    return res (
      ctx.json([
        { name: 'Chocolate', imagePath: '/images/chocolate.png' },
        { name: 'Vanilla', imagePath: '/images/vanilla.png' },
      ])
    )
  })
]