import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // params.id
    const { id } = params;

    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch product" }), {
      status: 500,
    });
  }
}
