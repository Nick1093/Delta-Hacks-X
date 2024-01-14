from fastapi import WebSocket

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
        print(pptx_data)