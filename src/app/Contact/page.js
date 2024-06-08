import Profile from "../components/profile"

export const metadata = {
    title: "Contact | The Contemplative Cavalier",
    description: "Get in touch with the Contemplative Cavalier",
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
                    profileS(orderBy: rank_ASC) {
                        email
                        name
                        title
                        profilePicture {
                            url
                        }
                        rank
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
    if (response && response.data && Array.isArray(response.data.profileS)) {
        const profileS = response.data.profileS;
    return (
        <div className="ml-10p sm:ml-15p h-full sm:h-[75vh]" id="Contact">
            <h1 className="text-4xl sm:text-6xl">Contact</h1>
            <div className="flex flex-wrap mt-8 mb-16 sm:gap-x-8 gap-y-8 sm:gap-y-24">
                {profileS.map(profile=>(
                    <Profile key={profile.email}profile={profile}></Profile>
                ))}
            </div>
        </div>
    )
    }
    else {
        // Handle the case where the response or profileS is not in the expected format
        console.error('Invalid response format:', response);
        return null; // or handle the error gracefully
    }
}