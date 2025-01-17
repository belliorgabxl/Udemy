
import { auth, signOut } from "@/auth";
import { Button } from "@nextui-org/button";
import Link from "next/link";
export default async function Home() {
  const session = await auth();



  return (
 <div>
  <h1 className="text-3xl">Hello App!</h1>
  <h3 className="text-2xl font-semibold">User Session Data :</h3>
  {session? (
    <div>
      <pre>{JSON.stringify(session,null , 2)}</pre>
      <form action={async ()=>{
        "use server";
        await signOut();
      }}>
        <Button
        type="submit"
          color="primary"
          variant="bordered"
        >
        Sign Out
        </Button>
      </form>
    </div>
  ):
  <div>
    Not signed in
  </div>}
 </div>
  );
}
