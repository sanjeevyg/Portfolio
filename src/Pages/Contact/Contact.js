import React from 'react';
import './index.css';
import { useState } from 'react';
import SvgHomeBackground from '../../icons/Components/HomeBackground';
import { IoMdChatbubbles} from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const chatBoxStatus = useSelector(state => state.chatBoxStatus)

    const closeChatBox = () => {
        dispatch({type: "CHATBOXACTIVE"})
    }

    return (
        <div className= {chatBoxStatus ? "contact": "contact openBox"}>
            <div className='btnContainer'>
                <button id="closeBtn" onClick={closeChatBox}>Close <IoClose id="btnIcon" size={17} /></button>
            </div>
            <div className="form-container">
            <div id="letsTalk"><IoMdChatbubbles color='blue' id="chatIcon" size={50}/>Let's talk !</div>
            <div id="messageInstruction">Type your message below or send me an email at <span>yogi.sjv@gmail.com</span>.</div>
            <form className="contact-form" >
                <div className="userInfo">
                    <label htmlFor="formName">Name</label>
                    <input 
                        id="formName" 
                        type="text" 
                        value={name}
                        placeholder="What's your name?"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>


                <div className="userInfo">
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        type="text" 
                        value={email} 
                        placeholder="What's your email?"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className="userInfo messageInfo">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message" 
                        type="text" 
                        value={message} 
                        rows="14"
                         cols="10" 
                         wrap="soft" 
                         maxlength="1000"
                         overflow="hidden"
                        placeholder="Write your message!"
                        onChange={(event) => setMessage(event.target.value)}
                    />
                </div>
                <div className="btnForm">
                    <input type="submit" value="SEND" />
                </div>
            </form>   
            </div>
        </div>

    )
}
