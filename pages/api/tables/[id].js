import dbConnect from "../../../util/mongo";
import Mesa from "../../../models/Mesas";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies
  } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const mesa = await Mesa.findById(id);
      res.status(200).json(mesa);
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

  if (method === "DELETE") {
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }
    try {
      await Mesa.findByIdAndDelete(id);
      res.status(200).json("The table has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
