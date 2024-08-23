import { useAuthContext } from '../../context/AuthContext';
import useConversations from '../../store/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversations();

    const messageFromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = messageFromMe ? "chat-end" : "chat-start";
    const profilePic = messageFromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const messageBgColor = messageFromMe ? "bg-blue-500" : "";

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="User avatar"
                        src={profilePic}
                    />
                </div>
            </div>
            <div className={`chat-bubble text-white pb-2 ${messageBgColor}`}>
                {message.message}
            </div>
            <div className="chat-footer opacity-70 text-xs flex gap-1 items-center text-white">
                {formattedTime}
            </div>
        </div>
    )
}

export default Message;