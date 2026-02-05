import TourDates from "@/components/tour-dates";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 pt-5">
      <Link className="w-[128px] md:w-[256px] h-auto" href="/">
        <Image
          className="w-full h-full"
          src={`/logo.png`}
          alt="Lip Critic Bay"
          width={961}
          height={1160}
        />
      </Link>
      <div className="flex gap-2 text-sm">
        <Link
          className="text-black font-bold border-b-1 border-dotted"
          href="/"
        >
          Shows
        </Link>
        <div>|</div>
        <Link
          className="text-navy border-b-1 border-transparent hover:border-navy"
          href="/about"
        >
          About
        </Link>
        <div>|</div>
        <Link
          className="text-navy border-b-1 border-transparent hover:border-navy"
          href="/files"
        >
          Files
        </Link>
      </div>
      <div className="md:w-[640px] px-5 md:px-0 pb-2">
        <TourDates />
      </div>
      <div className="text-xs text-navy">
        BitCoin:{" "}
        <Link
          className="font-bold"
          href="bitcoin:12WmEMVUBQm7U6FuERLLHf1iKkx7LnkkLG"
        >
          12WmEMVUBQm7U6FuERLLHf1iKkx7LnkkLGn
        </Link>
      </div>
      <div className="pb-5 text-[11px] font-bold text-muted">
        &copy; 2026 Lip Critic
      </div>
    </div>
  );
}
