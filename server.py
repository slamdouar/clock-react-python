import asyncio
import websockets
# import aiohttp
# import aiohttp.server
from datetime import datetime

async def time(websocket, path):
    while True:
        await websocket.send(datetime.now().strftime("%H:%M:%S"))
        await asyncio.sleep(1)

start_server = websockets.serve(time, '127.0.0.1', 8080)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
