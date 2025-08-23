import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const body = await req.json();

    const result = await db.collection("products").insertOne(body);

    return Response.json({ success: true, product: result }, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return Response.json(
      { success: false, error: "Failed to create product" },
      { status: 500 }
    );
  }
}

// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db(process.env.MONGODB_DB);

//     const products = await db.collection("products").find({}).toArray();

//     return Response.json({ success: true, products });
//   } catch (error) {
//     return Response.json(
//       { success: false, error: "Failed to fetch products" },
//       { status: 500 }
//     );
//   }
// }

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const productsCollection = db.collection("products");

    // URL থেকে query parameter নাও (যেমন: ?limit=6)
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit")) || 0; // limit না দিলে সব আনবে

    let products;
    if (limit > 0) {
      products = await productsCollection.find({}).limit(limit).toArray();
    } else {
      products = await productsCollection.find({}).toArray();
    }

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching products", error }),
      { status: 500 }
    );
  }
}
