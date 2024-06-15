export const metadata = {
    title: "Submit | The Contemplative Cavalier",
    description: "Submit to the Contemplative Cavalier",
  };

export default function Page(){
    return (
        <div className="ml-10p sm:ml-15p mr-5p sm:mr-15p" id="Submit">
             <h1 className="text-4xl sm:text-6xl">Submit</h1>
             <h1 className="mt-6 text-2xl sm:text-4xl">Submission Requirements</h1>
             <div className="mt-4 max-w-5xl mb-24">
             <p className="mt-4"><span className="font-bold">Eligibility: </span>Any currently enrolled undergraduate student at UVA is encouraged to submit a manuscript for the forthcoming publication of The Contemplative Cavalier. Any philosophy paper may be submitted.</p>
            <p className="mt-4"><span className="font-bold">Length: </span>There is no word limit for entries; however, submissions will typically range from 1500 to 5000 (5-15 pages). Conciseness is looked upon favorably.</p>
            <p className="mt-4"><span className="font-bold">Format: </span>Submissions should include an abstract not exceeding 250 words. Submissions should be formatted in 12pt, Times New Roman font, and double spaced. The Contemplative Cavalier only accepts papers written in English. Chicago Manual of Style is the preferred formatting guide for bibliography information and annotations but is not mandatory.</p> 
            <p className="mt-4"><span className="font-bold">Number of submissions: </span>Not more than three submissions per person per issue of The Contemplative Cavalier is permitted. Resubmissions of the same paper across different issues is allowed provided that there have been appropriate edits.</p> 
            <p className="mt-4"><span className="font-bold">Submission method: </span>Anonymous submissions are to be submitted to The Contemplative Cavalier google form. Authors must remove their names from the document and file name. Authors should include their UVA computing ID so that we can contact the appropriate author with our decision. If your piece is accepted, you will receive information on the revision timeline when you are notified of acceptance.</p> 
            <p className="mt-4 font-bold">For questions, contact Paco Amorrortu at <a href="mailto: zjz4uk@virginia.edu">zjz4uk@virginia.edu</a></p>
            <a className="block max-w-xl mx-auto" href="https://docs.google.com/forms/d/e/1FAIpQLSd9T_ZSNdGw-ADtq-GzRU3LM36RqNEG4nFTr7G-133N28AFhQ/viewform"><div className="bg-gray-600 hover:bg-gray-500 max-w-xl mt-8 py-4 rounded-lg">
                <h1 className="text-2xl sm:text-3xl text-center text-white">Submit to the Google Form here</h1>
            </div></a>
             <h1 className="mt-12 text-2xl sm:text-4xl">Policies of Copy Right</h1>
             <p className="mt-4">This journal reserves the right to republish any works submitted to the journal. Submissions must not have been published elsewhere prior to submission at The Contemplative Cavalier. However, authors may publish their work elsewhere after the issue of The Contemplative Cavelier containing this work has been published. Authors retain all other rights to their work. </p>
            </div>
           
        </div>
       
    )
}