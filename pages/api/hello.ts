import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}

// .js
// export default (req, res) => {
//   res.status(200).json({text: 'Hello'})
// }
