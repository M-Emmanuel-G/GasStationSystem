import express from 'express'
import cors from 'cors'
import { userRouter } from './router/userRouter';
import { productsRouter } from './router/productsRouter';
import { purchaseRouter } from './router/purchaseRouter';
import { accountRouter } from './router/AccountRouter';
import { carsRouter } from './router/carsRouter';

const app = express()

app.use(express.json())
app.use(cors())

app.use("/Clients",userRouter)
app.use("/products", productsRouter)
app.use("/purchases", purchaseRouter)
app.use("/accounts", accountRouter)
app.use("/cars", carsRouter)

app.listen(3003, ()=>{ console.log(`SERVER IS RUNNING IN PORT 3003`);
})