export default function handler(req, res) {
    const {
      method,
    } = req
    switch (method) {
      case 'GET':
        // Get data from your database
        res.status(200).json({ name: `User` })
        break
      case 'POST':
        // log data in body json
        const data = req.body
        console.log(data)
        res.status(200).json({ name: `User` })
        break
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }
  