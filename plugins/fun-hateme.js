let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = m.sender
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`*😔 اللي بيكرهوك 😔*
1- ${toM(b)}
2- ${toM(b)} 
3- ${toM(b)}
4- ${toM(b)}
5- ${toM(b)}
6- ${toM(b)}
7- ${toM(b)}
8- ${toM(b)}
9- ${toM(b)}
10- ${toM(b)}

*تبا لكم 😔*`, null, {
        mentions: [a, b]
    })
}
handler.help = ['hateme']
handler.tags = ['fun']
handler.command = ['بيكرهوني']

handler.group = true

export default handler  
