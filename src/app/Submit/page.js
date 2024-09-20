export const metadata = {
    title: "Submit | The Contemplative Cavalier",
    description: "Submit to the Contemplative Cavalier",
  };

export default function Page(){
    return (
        <div className="mx-6 sm:mx-15p" id="Submit">
             <h1 className="text-4xl sm:text-6xl">Submit</h1>
             <h1 className="mt-6 text-2xl sm:text-4xl">Submission Requirements</h1>
             <div className="mt-4 max-w-5xl mb-24">
             <p className="mt-4"><span className="font-bold">Eligibility: </span>Any undergraduate student at UVA is encouraged to submit a paper they&apos;ve written to The Contemplative Cavalier. Any philosophy paper may be submitted.</p>
            <p className="mt-4"><span className="font-bold">Length: </span>There is no word limit for entries; however, submissions will typically range from 1500 to 5000 (3-15 pages).</p>
            <p className="mt-4"><span className="font-bold">Number of submissions: </span>Please don&apos;t submit more than three papers per issue. Resubmissions of the same paper across different issues is allowed if there have been appropriate edits.</p> 
            <p className="mt-4 font-bold">For questions, contact Paco Amorrortu at <a href="mailto: zjz4uk@virginia.edu">zjz4uk@virginia.edu</a></p>
            <a className="block max-w-xl mx-auto" href="https://docs.google.com/forms/d/e/1FAIpQLSd9T_ZSNdGw-ADtq-GzRU3LM36RqNEG4nFTr7G-133N28AFhQ/viewform"><div className="bg-gray-600 hover:bg-gray-500 max-w-xl mt-8 py-4 rounded-lg">
                <h1 className="text-2xl sm:text-3xl text-center text-white">Submit to the Google Form here</h1>
            </div></a>
             <h1 className="mt-12 text-2xl sm:text-4xl">Policies of Copyright</h1>
             <p className="mt-4">This journal reserves the right to republish any works submitted to the journal. Submissions must not have been published elsewhere prior to submission at The Contemplative Cavalier. However, authors may publish their work elsewhere after the issue of The Contemplative Cavelier containing this work has been published. Authors retain all other rights to their work. </p>
            </div>
           
        </div>
       
    )
}