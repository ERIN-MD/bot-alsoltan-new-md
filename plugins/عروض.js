let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let venom127 = `
Welcome :- 
هذه عروض بوت السلطان
─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ───
اذا كنت تريد ادخال البوت الي مجموعتك
مطور البوت هو يوسف السلطان هذا رقمه " wa.me/201277272498 " 🔮⭐

─── ･ ｡ﾟ☆: *الـشروط*.☽ . :☆ﾟ. ───
دخل 50 عضو في القناة بالاثبات و سيتم ضم البوت لمجموعتك 
⟣⟤ القناة : *https://whatsapp.com/channel/0029VaL2bnW0rGiPZq8B5S2M*
─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ───
جيب رقم وهمي للمطور
⟣⟤ عندها سيتم ضم البوت لمجموعتك
─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ───
`;

        const venomURL87 = 'https://telegra.ph/file/d4d5265d43b9e75b5cea8.jpg';

        await conn.sendMessage(m.chat, { image: { url: venomURL87 }, caption: venom127 });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^العروض|عروض$/i;

export default handler;
