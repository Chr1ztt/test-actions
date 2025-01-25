import express, {Request, Response} from "express"

const app = express()

app.use(express.json())

app.get("/ping", (req: Request, res: Response) => {
  res.send({ message: "GET pong" })
})

app.post("/ping", (req: Request, res: Response) => {
  res.send({ message: "POST pong" })
})

const port = 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

