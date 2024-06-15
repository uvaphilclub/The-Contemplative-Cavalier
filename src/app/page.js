import Image from "next/image";

export const metadata = {
  title: "The Contemplative Cavalier",
  description: "The website of the Contemplative Cavalier",
};


export default function Home() {
  return (
    <div id="About" className="ml-10p sm:ml-15p relative mr-10p">
      <div className="max-w-5xl">
      <h1 className="text-4xl sm:text-6xl">About</h1>
      <p className="mt-4">The Contemplative Cavalier is an undergraduate philosophy journal run by students at the University of Virginia.</p>
      <p>Our inaugural issue is accepting submissions from August 27th through September 15th. Find submission guidelines under the submit tab</p>
      <p className="mt-4">Follow us on instagram! @<a className="underline" href="https://www.instagram.com/thecontemplativecav/?hl=en">thecontemplativecav</a></p>
      <h1 className="text-4xl sm:text-5xl mt-24">Also visit</h1>
      <h2 className="text-2xl sm:text-3xl mt-4">The Corcoran Department of Philosophy</h2>
      <p className="mt-2">Learn about UVA&apos;s philosophy department at <span><a className="underline" href="https://philosophy.virginia.edu/">https://philosophy.virginia.edu/</a></span></p>
      <h2 className="text-2xl sm:text-3xl mt-8">The Philosophy Club at UVA</h2>
      <p className="mt-2">UVA&apos;s premier gathering of undergraduates both casually and formally interested in philsophy.</p>
      <p>Learn more at <a className="underline" href="https://uvaphilclub.github.io">https://uvaphilclub.github.io</a></p>
      <p className="text-xs mt-24 mb-8">Although this organization has members who are University of Virginia students and may have University employees associated or engaged in its activities and affairs, 
          the organization is not a part of or an agency of the University. It is a separate and independent organization which is responsible for and manages its own activities and affairs. 
          The University does not direct, supervise or control the organization and is not responsible for the organization&apos;s contracts, acts or omissions.</p>   
      </div>
    </div>
    
  );
}
