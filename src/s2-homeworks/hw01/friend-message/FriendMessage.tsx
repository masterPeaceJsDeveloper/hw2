import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessageType) => {
    const {id, user, message} = props;
    return (
        <div
            id={'hw1-friend-message-' + id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + user.avatar}
                    // создаёт студент
                    src={user.avatar}
                    alt={'image'}
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + user.name}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        <p>{user.name}</p>
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + message.text}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + message.time}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                <p>{message.time}</p>
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
