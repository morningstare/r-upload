import './menu.css'
export default function Menu() {
    return (
        <nav className='w-80 h-full bg-box'>
            <div>

            </div>
            <ul className="flex justify-center gap-5 items-start flex-col p-5">
                <li className="text gap-2 flex justify-center items-center cursor-pointer">
                    <i className="fi-rr-dashboard text-xl green flex justify-center items-center bg-white w-10 h-10 rounded-lg"></i>
                    <span>Dashboard</span>
                </li>
                <li className="text gap-2 flex justify-center items-center cursor-pointer">
                    <i className="fi-rr-user-gear green text-xl flex justify-center items-center bg-white w-10 h-10 rounded-lg"></i>
                    <span>Profile</span>
                </li>
                <li className="text gap-2 flex justify-center items-center cursor-pointer">
                    <i className="fi-rr-rectangle-list green text-xl flex justify-center items-center bg-white w-10 h-10 rounded-lg"></i>
                    <span>Task List</span>
                </li>
                <li className="text gap-2 flex justify-center items-center cursor-pointer">
                    <i className="fi-rr-lead-management green text-xl flex justify-center items-center bg-white w-10 h-10 rounded-lg"></i>
                    <span>Task Management</span>
                </li>
            </ul>
        </nav>
    )
}