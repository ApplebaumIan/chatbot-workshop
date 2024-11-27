import os
import asyncio
from src.log import logger  # Assuming you have a logger utility
from discord import app_commands
from src.bclient import DiscordClient

def run_discord_bot():
    # Create an instance of DiscordClient
    discord_client = DiscordClient()

    # A queue to hold registered chatbots
    chatbot_queue = []

    @discord_client.tree.command(name="register", description="Register a chatbot")
    @app_commands.describe(bot_name="Name of the chatbot to register")
    async def register_chatbot(interaction, bot_name: str):
        if bot_name.lower() not in chatbot_queue:
            chatbot_queue.append(bot_name.lower())
            await interaction.response.send_message(f"{bot_name} has been registered.")
        else:
            await interaction.response.send_message(f"{bot_name} is already registered.")

    @discord_client.tree.command(name="start", description="Start chatbot interaction")
    @app_commands.describe(question="The question to ask the first bot")
    async def start_chat(interaction, question: str):
        if not chatbot_queue:
            await interaction.response.send_message("No chatbots are registered in the queue.")
            return

        current_input = question
        await interaction.response.defer(ephemeral=False)  # Acknowledge the command

        for bot_name in chatbot_queue:
            try:
                # Simulate chatbot response
                response = f"{bot_name.capitalize()} '{current_input}'"
                await interaction.followup.send(response)
                current_input = response  # Pass the response to the next bot
            except Exception as e:
                await interaction.followup.send(f"Error interacting with {bot_name}: {e}")
                break

        # await interaction.followup.send("Interaction complete.")

    TOKEN = os.getenv("COORDINATOR_BOT_TOKEN")
    discord_client.run(TOKEN)
