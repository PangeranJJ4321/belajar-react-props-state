import Deskripsi from "./Deskripsi"
import Header from "./Header"

const UserProfile = ({user}) => {
    return (
        <>
            <Header size={`text-xl dark:text-gray-200`} title={`Profile Pengguna`} />
            <div className="flex dark:text-gray-200 text-gray-800 items-center">
                <img src={user.avatar} alt={`Avatar untuk ${user.nama}`}
                
                className="w-16 h-16 rounded-full mr-4"/>

                <div>
                    <p className="font-bold dark:text-gray-200 text-gray-800">{user.nama}</p>
                    <p>{user.job}</p>
                    <p className="text-sm dark:text-gray-200 text-gray-800">Bergabung sejak {user.joinAt}</p>
                </div>

            </div>

            <Deskripsi text={`Harum ea cum culpa voluptates, distinctio nisi natus suscipit modi laborum ad, eaque cumque voluptate alias at dicta eum quas, iste error.`} />
        </>
    )
}

export default UserProfile