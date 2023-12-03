let totalStickers = parseInt(gets());
let boughtStickers = parseInt(gets());
let arrStickers = []

for (let i = 0; i < boughtStickers; i++) {
  let sticker = parseInt(gets());
  if (!arrStickers.includes(sticker)) {
    arrStickers.push(sticker)
  }
}

print(totalStickers - arrStickers.length)