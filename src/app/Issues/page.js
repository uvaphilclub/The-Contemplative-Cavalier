import Issue from "../components/issue";

export const metadata = {
    title: "Issues | The Contemplative Cavalier",
    description: "Read the Contemplative Cavalier",
  };

async function getData(){
const res = await fetch('https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clwsef82n01n507w6yu53osh2/master',{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        // Add any required headers, such as authorization headers if needed
    },
    body: JSON.stringify({
        query: `
        {
            issues(orderBy: editionNumber_DESC) {
                document {
                    url
                }
                subBoardAcceptanceRate
                totalAcceptanceRate
                percentOfPapersReturned
                numberOfSubmissions
                editorialBoardAcceptanceRate
                editionNumber
                title
            }
        }
        `
    }),
    cache: 'no-store'
    })

    return res.json()
}  

export default async function Page(){
    const response = await getData();
    const issues = response.data.issues;
    return (
        <div className="ml-10p sm:ml-15p" id="Issues">
            <div>
                <h1 className="text-4xl sm:text-6xl">Issues</h1>
                <div className="py-8">
                    <h1 className="text-4xl">First Issue</h1>
                    <div className="flex flex-wrap justify-center sm:justify-normal gap-x-36 gap-y-8 mr-10p sm:mr-0 mt-8 mb-8">
                        <div className="flex items-center sm:ml-24 h-96 w-64 bg-gray-100">
                            <p className="text-3xl text-center">This is the hard coded example</p>
                        </div>
                        <div className="grid content-center text-xl">
                            <p>Number of submissions: </p>
                            <p>Submission board acceptance rate: </p>
                            <p>Editorial board acceptance rate: </p>
                            <p>Total acceptance rate: </p>
                            <p>Percentage of papers returned for revisions: </p>
                        </div>
                    </div>
                </div>
                {issues.map((issue,index) => (
                <Issue key={index} issue={issue}/>
                ))}
            </div>
            
            
        </div>
    )
}