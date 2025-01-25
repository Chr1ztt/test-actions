import express, {Request, Response} from "express"

const app = express()

app.use(express.json())

app.get("/ping", (req: Request, res: Response) => {
  res.send({ message: "GET pong" })
})


app.post("/ping", (req: Request, res: Response) => {
  res.send({ message: "POST pong" })
})


app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

