export const metadata = {
    title: "Issue 1 | The Contemplative Cavalier",
    description: "Read the Contemplative Cavalier",
  };

export default function Page(){
    return (
        <div className="ml-10p sm:ml-15p h-[90vh] sm:h-[75vh]" id="">
            <h1 className="text-4xl sm:text-6xl">First Edition</h1>
            <p className="mt-8 text-3xl">Link to pdf</p>
            <p>Number of submissions: </p>
            <p>Submission board acceptance rate: </p>
            <p>Editorial board acceptance rate: </p>
            <p>Total acceptance rate: </p>
            <p>Percentage of papers returned for revisions: </p>
        </div>
    )
}