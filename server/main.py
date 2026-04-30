from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware

from utility.agent import get_agent

app = FastAPI()
agent = get_agent()

origins = ['http://localhost:5173']
app.add_middleware(
    CORSMiddleware, 
    allow_origins=origins, 
    allow_methods=["*"], 
    allow_headers=["*"])

class ChatRequest(BaseModel):
    message: str

@app.post("/user_prompt")
async def prompt_input(req: ChatRequest):
    print(f"user send:>> {req.message}")
    

    def stream():
        yield {"placeholder":True, "message":"🔍 Searching...\n"}

        for event in agent.stream(
            {"messages": [{"role": "user", "content": req.message}]},
            stream_mode="values",
        ): 
            msg = event["messages"][-1]
            if msg.type == "ai" and msg.content:
                yield {"placeholder":False, "message":msg.content}

    return StreamingResponse(stream(), media_type="text/plain")

