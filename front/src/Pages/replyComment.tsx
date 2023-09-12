import HeaderComment from "../Components/comments/headerComments";
import MessageReply from "../Components/comments/messageReply";
import ReplyTweet from "../Components/comments/replyTweet";

export default function replyComment(){
    return <main className="p-4">
    <HeaderComment />
    <ReplyTweet />
    <MessageReply />
    </main>
}