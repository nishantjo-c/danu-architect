import botcss from "./bot.module.scss";
import { useEffect, useReducer, useState } from 'react';
import chatreducer from "./chat-state/chatreducer";

function Bot(){
    const initialChat = ["first message"]

    const [messages, dispatch] = useReducer(chatreducer, initialChat)
    const [input, setInput] = useState("");

    function newMessage(){

        if(!input.trim()) return;

        dispatch({
            type: 'add',
            text: input
        })

        setInput("")

        fetch('http://127.0.0.1:8000/user_prompt',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "message": input
            }),
        })
        .then(async response => {
            if(!response)
                throw new Error("Something went wrong!")
            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let botMessage = "";
            while (true) {
                const { done, value } = await reader.read();

                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                botMessage += chunk;

                dispatch({
                    type: 'add',
                    text: botMessage
                });
            }
            console.log(response);
            return response;
        })
        .catch(error => {
            console.error('Fetch error:', error);
        })
    }
    

    return (
        <div className={botcss.bot}>

            <div className={botcss.bot__message}>{messages.map((msg,ind) => (
                <div key={ind}>{msg}</div>
            ))}</div>

            <div className={botcss.bot__inputWrapper}>
                <textarea 
                    className={botcss.bot__input} 
                    placeholder="Ask anything..." 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    />
                <button className={botcss.bot__send} onClick={newMessage}>➤</button>
            </div>
        </div>
    );
}

export default Bot;