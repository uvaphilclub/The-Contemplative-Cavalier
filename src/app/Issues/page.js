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
                cover {
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
        <div className="ml-10p sm:mx-15p" id="Issues">
            <div>
                <h1 className="text-4xl sm:text-6xl">Issues</h1>
                {issues.map((issue,index) => (
                <Issue key={index} issue={issue}/>
                ))}
            </div>
            
            
        </div>
    )
}