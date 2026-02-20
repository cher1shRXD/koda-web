import { Link } from "@cher1shrxd/loading";
import { getServerSession } from "next-auth";
import Image from "next/image";

const User = async () => {
  const user = await getServerSession();
  
  if (!user) {
    return (
      <Link
        href="/login"
        className="text-sm font-bold bg-text text-background px-5 py-2 rounded-md hover:opacity-90 transition-opacity">
        Sign In
      </Link>
    );
  }

  return (
    <Image
      src={user.user?.image || ""}
      alt="User Avatar"
      width={32}
      height={32}
      className="rounded-full"
    />
  );
};

export default User;
