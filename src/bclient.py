import os
import discord
import asyncio
from discord import app_commands
from dotenv import load_dotenv

load_dotenv()

class DiscordClient(discord.Client):
    def __init__(self):
        intents = discord.Intents.default()
        intents.message_content = True
        super().__init__(intents=intents)
        self.tree = app_commands.CommandTree(self)
        self.message_queue = asyncio.Queue()
        self.current_channel = None
        self.activity = discord.Activity(
            type=discord.ActivityType.listening,
            name="/start | /register | /help"
        )

    async def on_ready(self):
        await self.tree.sync()
        print(f"{self.user} is now running!")

    async def process_messages(self):
        while True:
            if self.current_channel is not None:
                while not self.message_queue.empty():
                    async with self.current_channel.typing():
                        message, user_message = await self.message_queue.get()
                        try:
                            # Simulate processing the message
                            await self.send_message(message, user_message)
                        except Exception as e:
                            print(f"Error while processing message: {e}")
                        finally:
                            self.message_queue.task_done()
            await asyncio.sleep(1)

    async def enqueue_message(self, message, user_message):
        await self.message_queue.put((message, user_message))

    async def send_message(self, message, user_message):
        try:
            # Simulate chatbot response
            response = f"Chatbot response to: {user_message}"
            await message.channel.send(response)
        except Exception as e:
            print(f"Error while sending message: {e}")
