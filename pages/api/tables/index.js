import dbConnect from "../../../util/mongo";
import Mesa from "../../../models/Mesas";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const mesas = await Mesa.find();
      res.status(200).json(mesas);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }
    try {
      const mesa = await Mesa.create(req.body);
      res.status(201).json(mesa);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }
    try {
      const mesa = await Mesa.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(mesa);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
