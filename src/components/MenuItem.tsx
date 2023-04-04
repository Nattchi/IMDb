import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Link from "next/link";

export default function MenuItem({
  title,
  address,
  Icon,
}: {
  title: string;
  address: string;
  Icon: any;
}) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
