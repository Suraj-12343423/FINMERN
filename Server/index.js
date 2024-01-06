import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import morgan from "morgan";
import helmet from "helmet";
import { error } from "console";
import kpiRoutes from "./routes/kpi.js"
import KPI from "./models/KPI.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js"
import Product from "./models/Product.js"
import Transaction from "./models/Transaction.js"
import { kpis, products, transactions } from "./data/data.js";


/*CONFIGURATIONS*/

dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet())
app.use(morgan("common"))
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

console.log("Hello");


/* ROUTES */ 

app.use("/kpi",kpiRoutes);
app.use("/product",productRoutes);
app.use("/transaction",transactionRoutes)

/* MONGOOSE SETUP */

//MONGO PASS = sai
//MONGO USERNAME= surajkalla809

const PORT = process.env.PORT || 9000;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });

  //   await mongoose.connection.db.dropDatabase();
  //   KPI.insertMany(kpis);
  //   Product.insertMany(products)
  //   Transaction.insertMany(transactions)
  })
  .catch((error) => {
    console.error(`Failed to connect to MongoDB: ${error}`);
  });

