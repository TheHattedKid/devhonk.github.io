//I use that for invites, do whatever you want with it but its not my problem if something goes wrong

const DISCORD_URL = "https://discord.com/api/invites/";
const DISCORD_ICONS = "https://cdn.discordapp.com/icons/"
function httpGetAsync(theUrl, callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}
function addDiscordInviteEmbed(code) {
	httpGetAsync(`${DISCORD_URL}${code}?with_counts=true`, (response) => {
		let obj = JSON.parse(response)
		let name = obj.guild.name
		let url = `${DISCORD_ICONS}${obj.guild.id}/${obj.guild.icon}.png`

		let embed = document.getElementById(`discord-${code}`)
		embed.innerHTML = `<strong>You are invited to join a server</strong><br><strong><a href="https://discord.com/${code}">${name}</a><br>${obj.approximate_presence_count} online  ${obj.approximate_member_count} members`
	});
}