const express = require("express");
const dotenv = require("dotenv");
const SwaggerConfig = require("./src/config/swagger.config");
const mainRouter = require("./src/app.routes");
const notFoundHandller = require("./src/common/exception/notfound.handller");
const AllExceptionHandller = require("./src/common/exception/all.exception.handller");
dotenv.config();
async function main() {
    const app = express();
    const port = process.env.Port
    require("./src/config/mongodb.config")
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    SwaggerConfig(app);
    notFoundHandller(app);
    AllExceptionHandller(app)
    app.listen(port, () => {
        console.log(`server is running http://localhost:${port}`);
        
    })
}

main();
