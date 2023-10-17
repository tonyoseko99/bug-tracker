import Link from "next/link";
import { Button } from "@radix-ui/themes";

const Issues = () => {
  return (
    <div className="flex justify-center gap-4 items-center">
      <span>Issues</span>
      <Button>
        <Link href="/issues/new">Add Issue</Link>
      </Button>
    </div>
  );
};

export default Issues;
