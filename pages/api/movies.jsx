import connectToDatabase from "../../lib/mongodb";

/*
export default async function (req, res) {
    const db = await connectToDatabase();

    if (req.method == "GET") {
        const movies = await db.collection("movies")
            .find({year: 2010}) // essas coisas da pra tratar na outra página
            .sort({ title: 1 })
            .toArray();

        res.json(movies);
    }
}
*/
export default async function handler(req, res) {
    
    const db = await connectToDatabase();
    switch (req.method) {
        
      case "POST":
        let bodyObject = JSON.parse(req.body);
        let newPost = await db.collection("movies").insertOne(bodyObject);
        res.json(newPost);//.ops[0]);
        console.log("BodyObject", bodyObject)
        console.log("está no post2", req.body)
        console.log("newPost",newPost)
        break;

      case "GET":
        const movies = await db.collection("movies")
            .find({year: 2010}) // essas coisas da pra tratar na outra página
            .sort({ title: 1 })
            .toArray();

        res.json(movies);
       // const posts = await db.collection("posts").find({}).toArray();
       // res.json({ status: 200, data: posts });
        break;

       // case "DELETE":
        
    }
  }