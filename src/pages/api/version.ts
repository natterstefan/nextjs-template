import { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(publicRuntimeConfig.VERSION)
}
