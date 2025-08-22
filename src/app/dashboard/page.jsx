import { getSession } from "next-auth/react";

export default async function Dashboard() {
  const session = await getSession();

  if (!session) {
    return <p>Please login first</p>;
  }

  return <p>Welcome, {session.user.name}</p>;
}
