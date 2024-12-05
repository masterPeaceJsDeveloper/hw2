import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";
type FriendMessagePropsType = {
    friendMessage: MessageType
}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsType) => {
    const {friendMessage} = props;
    return (
        <div
            id={'hw1-friend-message-' + friendMessage.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + friendMessage.id}
                    // создаёт студент
                    src={friendMessage.user.avatar}
                    alt={'image'}
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + friendMessage.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        <p>{friendMessage.user.name}</p>
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + friendMessage.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {friendMessage.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + friendMessage.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                <p>{friendMessage.message.time}</p>
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
