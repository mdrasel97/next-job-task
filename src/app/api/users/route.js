import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // client থেকে data parse
    const body = await req.json();

    // Required ফিল্ড চেক করো (যাতে খালি না যায়)
    if (!body.email) {
      return new Response(
        JSON.stringify({ success: false, message: "Email is required" }),
        { status: 400 }
      );
    }

    // আগে থেকে user আছে কিনা চেক করো
    const existingUser = await db
      .collection("users")
      .findOne({ email: body.email });

    if (existingUser) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "User already exists",
          user: existingUser,
        }),
        { status: 200 }
      );
    }

    // users collection এ নতুন data insert
    const result = await db.collection("users").insertOne({
      name: body.name || "",
      email: body.email,
      imageURL: body.imageURL || null,
      provider: body.provider || "credentials",
      createdAt: new Date(),
    });

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
