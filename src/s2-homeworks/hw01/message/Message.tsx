import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any

// нужно отобразить приходящие данные
const Message = (props: MessageType) => {
    const {id, user, message} = props
    return (
        <div id={'hw1-message-' + id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + user.avatar}
                    // создаёт студент
                    src={user.avatar}
                    alt={'image'}
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + user.name} className={s.name}>
                        {/*создаёт студент*/}
                        {user.name}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + message.text} className={s.messageText}>
                        {/*создаёт студент*/}
                        {message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + message.time} className={s.time}>
                {/*создаёт студент*/}
                {message.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message
