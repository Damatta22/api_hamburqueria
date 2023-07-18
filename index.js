


const { lookup } = require("dns")
const express = require("express")
const uuid = require("uuid")

const port = 3001
const app = express()
app.use(express.json())

const Lookorders = []

const VerifyId = (request, response, next) => {
    const { id } = request.params

    const index = Lookorders.findIndex(element => element.id === id)

    if (index < 0) {
        return response.status(404).json({ error: "Not Found" })
    }

    request.orderIndex = index
    request.orderId = id

    next()
}

const LookRequest = (request, response, next) => {
    const method = request.method

    const url = request.url

    console.log(`[${method}] - ${url} `)

    next()
}



app.get("/order", LookRequest, (request, response) => {
    return response.json(Lookorders)
})

app.post("/order", LookRequest, (request, response) => {
    const { order, clientName, price, orderStatus } = request.body

    const createOrder = { id: uuid.v4(), order, clientName, price, orderStatus }

    Lookorders.push(createOrder)

    return response.status(201).json(createOrder)
})

app.put("/order/:id", VerifyId, LookRequest, (request, response) => {
    const { order, clientName, price, orderStatus } = request.body
    const index = request.orderIndex
    const id = request.orderId

    const updateOrder = { id, order, clientName, price, orderStatus }

    Lookorders[index] = updateOrder

    return response.json(updateOrder)
})

app.delete("/order/:id", VerifyId, LookRequest, (request, response) => {
    const index = request.orderIndex

    Lookorders.splice(index, 1)

    return response.status(204).json()
})

app.get("/order/:id", VerifyId, LookRequest, (request, response) => {
    const index = request.orderIndex

    const specificOrder = Lookorders[index] 

    return response.json(specificOrder)
})

app.patch("/order/:id", VerifyId, LookRequest, (request, response) => {
    const index = request.orderIndex

    Lookorders[index].orderStatus = "Pronto"
    
    return response.json(Lookorders[index])
})

app.listen(port, () => {
    console.log(`Server started on port ${port}🚀 🚀 🚀 `)
})
