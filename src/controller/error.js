const notFound =(req , res)=>{
    res.status(404).send("<h1>404 page not found</h1>")
}

const serverErr =(err,req ,res,next)=>{
    res.status(500).send("<h1>500 server error</h1>")
}
module.exports={ notFound ,serverErr}