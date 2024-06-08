import Image from "next/image"

export default function Profile({profile}){
    return (
        <div className="flex w-fit sm:w-[450px]">
            <div className="relative rounded-full w-24 h-24 sm:w-36 sm:h-36 overflow-hidden">
                <Image src={profile.profilePicture.url} fill={true} alt={'Picture of ' + profile.name}/> 
            </div>
            <div className="ml-6 sm:mr-4">
                <h1 className="text-xl sm:text-2xl mt-2 sm:mt-6 whitespace-nowrap">{profile.title}</h1>
                <p className="mt-1 text-sm">{profile.name}</p>
                <a className="text-sm" href={"mailto: " + profile.email}>{profile.email}</a>
            </div>
        </div>
    )
}