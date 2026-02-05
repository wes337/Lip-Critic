import Papa from "papaparse";
import Image from "next/image";
import Link from "next/link";
import FilesList from "@/components/files";

async function getFiles() {
  const SHEET_ID = "1-qj5OIBbLEN56FnSvw6QKKNaQbwNnE_uuonbgxkyPio";
  const SHEET_GID = "2073990181";

  const response = await fetch(
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${SHEET_GID}`,
  );

  const csv = await response.text();
  const { data } = Papa.parse(csv);
  return data;
}

export default async function Files() {
  const files = await getFiles();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 pt-5">
      <Link className="w-[256px] md:w-[320px] h-auto" href="/">
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
          className="text-navy border-b-1 border-transparent hover:border-navy"
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
          className="text-black font-bold border-b-1 border-dotted"
          href="/files"
        >
          Files
        </Link>
        <div>|</div>
        <Link
          className="text-navy border-b-1 border-transparent hover:border-navy"
          href="/videos"
        >
          Videos
        </Link>
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
      <div className="md:w-[640px] pb-2">
        <FilesList files={files} />
      </div>
      <div className="pb-5 text-[11px] font-bold text-muted">
        &copy; 2026 Lip Critic
      </div>
    </div>
  );
}
