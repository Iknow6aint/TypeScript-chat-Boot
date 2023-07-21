import { FullConversationType } from "@/app/types";

interface ConversationListProps {
    initialItems: FullConversationType[];
    // users: User[];
    // title?: string;
}
const ConversationList: React.FC<ConversationListProps> = ({
    initialItems,

}) => {
    return (
        <div>conversations</div>
    )
}

export default ConversationList;