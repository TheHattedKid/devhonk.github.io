//I use that for invites, do whatever you want with it but its not my problem if something goes wrong
//also mention me for the code
const DISCORD_URL = "https://discord.com/api/v9/invites/";
const DISCORD_ICONS = "https://cdn.discordapp.com/icons/";
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
	fetch(`${DISCORD_URL}${code}?with_counts=true`).then((response) => {
		try {
            response.text().then((r) => {
                let obj = JSON.parse(r)
                let name = obj.guild.name;
    		    let url = `${DISCORD_ICONS}${obj.guild.id}/${obj.guild.icon}.png`;

        		let embed = document.getElementById(`discord-${code}`);
        		embed.innerHTML = `
                <strong>You are invited to join a server</strong><br>
                <strong><img src="${url}" style=" margin-left:2%;float:left;border-radius:15% " width="64" height="64"/><div><a href="https://discord.com/invite/${code}">${name}</a><br>
                <span class="online"></span>${obj.approximate_presence_count} online <span class="members"></span>${obj.approximate_member_count} members</div>`;
            })
        } catch(e) {
            console.error(e)
        }
	});
}