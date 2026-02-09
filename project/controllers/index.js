async function handlerFunction(req, res) { 
    // const body = req.body; 
    // const body = req.body;

//   if (!body) return res.status(400).json({ error: "response is not valid " });
   return await res.json({ status: "OK" })
//    return res.json("OK")
; 
}
module.exports = handlerFunction ; 