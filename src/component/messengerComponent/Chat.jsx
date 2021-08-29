import React, {useEffect,useState} from 'react'
import "./Chat.css"
import socketIO from "socket.io-client"
import ReactScrollToBottom from "react-scroll-to-bottom";
import Message from "./Msg";
import wassup from "../images/wassup.png";
import {username} from "../Navbar"


let socket;
const Endpoint="http://localhost:4500/";

function Chat() {
	const [id, setid] = useState("");
    const [messages, setMessages] = useState([])

    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, id });
        document.getElementById('chatInput').value = "";
    }
	// console.log(messages);
	
    const socket=socketIO(Endpoint,{transports:['websocket']});

	useEffect(() => {
		socket.on('connect', () => {
            alert('Connected');
            setid(socket.id);

        })
        socket.emit('joined', {username})

        socket.on('welcome', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message);
        })

        socket.on('userJoined', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message);
        })

        socket.on('leave', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message);
        })

        return () => {
            socket.emit('Disconnect');
            socket.off();
        }
	}, [])
	useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message, data.id);
        })
        return () => {
            // so that the array don't log again and again
            socket.off();
        }
    }, [messages])
	

	return (
		<div className="chatPage">
			<div className="chatContainer">
        		<div className="brand header">
            		<img height="40" className="wassup-img" src={wassup} alt="404 Not Found"/> 
            		<h1>Wassup</h1>
        		</div>
        		<div className="message__area chatBox"></div>
				<ReactScrollToBottom className="chatBox">
                    {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                </ReactScrollToBottom>
                <div className="inputBox ">
                    <input onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
                </div>
    		</div>
		</div>	
	)
}

export default Chat;
