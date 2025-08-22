import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // client থেকে data parse করবো
    const body = await req.json();

    // users collection এ data insert
    const result = await db.collection("users").insertOne(body);

    return new Response(
      JSON.stringify({ success: true, insertedId: result.insertedId }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
