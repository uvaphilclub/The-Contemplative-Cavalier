import Image from "next/image";

export const metadata = {
  title: "The Contemplative Cavalier",
  description: "The website of the Contemplative Cavalier",
};


export default function Home() {
  return (
    <div id="About" className="ml-10p sm:ml-15p relative mr-10p h-[90vh] sm:h-[75vh]">
      <h1 className="text-6xl">About</h1>
      <p className="mt-4">The Contemplative Cavalier is an undergraduate philosophy journal run by students at the University of Virginia</p>
      <p className="max-w-5xl text-xs mb-8 absolute bottom-0">Although this organization has members who are University of Virginia students and may have University employees associated or engaged in its activities and affairs, 
          the organization is not a part of or an agency of the University. It is a separate and independent organization which is responsible for and manages its own activities and affairs. 
          The University does not direct, supervise or control the organization and is not responsible for the organization&apos;s contracts, acts or omissions.</p>   
      
    </div>
    
  );
}
