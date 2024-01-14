from fastapi import WebSocket
import coTest

class ConnectionManager:
    def __init__(self):
        self.active_connections = []
    
    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)
    
    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)
    
    # data received is an array ["element1", "element2"] where each element is a slide's worth of text
    # this function should return 
    async def generateContent(self, pptx_data):
        return coTest.genContent(pptx_data)
    
    async def generate_and_send(self, scraped_content, websocket):
        first_run = scraped_content["slides_content"][:len(scraped_content["slides_content"]) // 2]
        new_reel_content = await self.generateContent(first_run)
        await websocket.send_json({"title": scraped_content["title"], "reel_content": new_reel_content})