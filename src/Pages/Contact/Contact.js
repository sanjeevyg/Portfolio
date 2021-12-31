import React from 'react';
import './index.css';
import { IoMdChatbubbles} from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {

    const form = useRef();
    const dispatch = useDispatch()

    const chatBoxStatus = useSelector(state => state.chatBoxStatus)

    const closeChatBox = () => {
        dispatch({type: "CHATBOXACTIVE"})
    }
    
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_bgrg1ca', 'template_i16nmhs', e.target, "user_yGuqTJoej9gFct6xY7zgD").then(
            res => {
                console.log(res)
            }
        ).catch(err => console.log(err));
        e.target.reset()
    }

    return (
        <div className= {chatBoxStatus ? "contact": "contact openBox"}>
            <div className='btnContainer'>
                <button id="closeBtn" onClick={closeChatBox}>Close <IoClose id="btnIcon" size={17} /></button>
            </div>
            <div className="form-container">
            <div id="letsTalk"><IoMdChatbubbles color='blue' id="chatIcon" size={50}/>Let's talk !</div>
            <div id="messageInstruction">Type your message below or send me an email at <span>syogifse@gmail.com</span>.</div>
            <form className="contact-form" ref={form} onSubmit={sendEmail} >
                <div className="userInfo">
                    <label htmlFor="formName">Name</label>
                    <input 
                        id="formName" 
                        type="text" 
                        name="name"
                        placeholder="What's your name?"
                    />
                </div>

                <div className="userInfo">
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        type="text" 
                        name="email"
                        placeholder="What's your email?"
                    />
                </div>

                <div className="userInfo messageInfo">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message" 
                        type="text" 
                        name="message"
                        rows="14"
                         cols="10" 
                         wrap="soft" 
                         maxlength="1000"
                         overflow="hidden"
                        placeholder="Write your message!"
                    />
                </div>
                <div className="btnForm">
                    <input type="submit" value="SEND"/>
                </div>
            </form>   
            </div>
        </div>

    )
}
