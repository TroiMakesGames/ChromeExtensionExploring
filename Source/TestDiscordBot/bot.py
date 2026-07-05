import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.message_content = True

bot = commands.Bot(command_prefix="!", intents=intents)

# 🔢 counter stored in memory
counter = 0


class MyView(discord.ui.View):
    @discord.ui.button(label="Jagode???", style=discord.ButtonStyle.primary)
    async def button_callback(self, interaction: discord.Interaction, button: discord.ui.Button):
        global counter
        counter += 1

        await interaction.response.send_message(
            f"Button clicked! Counter is now: {counter}"
        )


@bot.event
async def on_message(message):
    if message.author.bot:
        return

    if "hello bot" in message.content.lower():
        await message.channel.send("Press the button:", view=MyView())

    await bot.process_commands(message)


bot.run("YOUR_TOKEN_HERE")