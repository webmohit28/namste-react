import useOnlineStatus from "../utills/useOnlineStatus";

const ChatComponent = () => {
  const status = useOnlineStatus();
  console.log(status);

  return (
    <div className={status === true ? 'Online chat-item' : 'Offline chat-item'}>

    </div>
  )
}
export default ChatComponent;