import { Button } from "./Button";
import { FiUser } from "react-icons/fi";

export function Header() {
  return (
    <header className="sticky top-0 w-full bg-secondary backdrop-blur supports-backdrop-fileter:bg-background/60">
      <div className="flex h-12 sm:h-14 items-center justify-between px-3 sm:px-4.5">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button className="">
            <p>RU / KZ</p>
          </Button>
        </div>
        <div>
          <Button className="w-full gap-2 h-7 ">
            <FiUser className="" />
          </Button>
        </div>
      </div>
    </header>
  );
}
