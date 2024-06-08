export default function Issue({issue}){
    return (
    <div className="py-8">
        <h1 className="text-4xl">{issue.title}</h1>
        <div className="flex flex-wrap justify-center sm:justify-normal gap-x-36 gap-y-8 mr-10p sm:mr-0 mt-8 mb-8">
            <a href={issue.document.url}>
                <div className="flex items-center sm:ml-24 h-96 w-64 bg-gray-100">
                    <p className="text-3xl text-center">Clickable preview of pdf</p>
                </div>
            </a>
            <div className="grid content-center text-xl">
                {issue.numberOfSubmissions && <p>Number of submissions: {issue.numberOfSubmissions}</p>}
                {issue.subBoardAcceptanceRate && <p>Submission board acceptance rate: {issue.subBoardAcceptanceRate}%</p>}
                {issue.editorialBoardAcceptanceRate && <p>Editorial board acceptance rate: {issue.editorialBoardAcceptanceRate}%</p>}
                {issue.totalAcceptanceRate && <p>Total acceptance rate: {issue.totalAcceptanceRate}%</p>}
                {issue.percentOfPapersReturned && <p>Percentage of papers returned for revisions: {issue.percentOfPapersReturned}%</p>}
            </div>
        </div>
    </div>
    )
}