import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SeachInput from "./SearchInput";

const Sidebar = () => {
    return (
        <div className="border-r border-slate-500 p-4 flex flex-col">
            <SeachInput />
            <div className="divider px-3"></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default Sidebar;