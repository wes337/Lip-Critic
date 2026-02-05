import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="">
        <Image src={`/band.jpg`} alt="" width={1280} height={1600} />
      </div>
      <div className="p-5 bg-accent">
        <p className="text-justify text-sm">
          NYC-based electronic punk band{" "}
          <span className="font-bold">Lip Critic</span> announce their new album{" "}
          <span className="font-bold">&apos;Theft World&apos;</span> today, out
          May 1st via Partisan Records. To mark the announcement, the band have
          shared lead single and video{" "}
          <Link
            className="text-navy font-bold hover:underline"
            href="https://lipcritic.lnk.to/legsinasnare"
            target="_blank"
          >
            “Legs In A Snare”
          </Link>
          , a live-wire rush of burbling, overheated drums, jagged guitar, and
          frontman Bret Kaser&apos;s snapping vocal bursts that lurch between
          groove and chaos, intimacy and menace. A love song twisted into a
          horror story, the track channels obsession, distractibility, and
          addiction into a volatile relationship — fixation rendered as a living
          thing that both seduces and destroys. Sweaty, confrontational, and
          wired with unrelenting urgency, “Legs In A Snare” captures the
          unstable energy at the heart of Theft World, an album that blurs the
          line between the real and the absurd while interrogating not just art
          itself, but how it comes into being. At its core, Theft World is an
          album about stealing. Everything comes from somewhere, and whether you
          call it inspiration, reference, or outright theft depends on how
          honest you&apos;re willing to be.
        </p>
      </div>
    </div>
  );
}
