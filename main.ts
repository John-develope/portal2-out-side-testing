namespace SpriteKind {
    export const Player_ = SpriteKind.create()
    export const Portal = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile35, function (sprite, location) {
    Chell.vy = 200
    controller.moveSprite(Chell, 20, 0)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile19, function (sprite, location) {
    tiles.placeOnRandomTile(Chell, myTiles.tile24)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile26, function (sprite, location) {
    Chell.y += 126
    tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010000000000000101010101010101010100000000000001010101010101010101000000000000010101010101010101010000000000000101010101000000000000000000000001010101010000000101010101010000010101010100000001010101010100000000000000000000010106010101000000000000000000000101050101010000000000000000000000000000000000000000000000020400030202020202020202020202070000000000000000000000000000000000000000000000000000000101010101010101010100000000000001010101010101010101000000000000010101010101010101010000000000000101010101`, img`
        2 2 2 2 2 . . . . . . 2 2 2 2 2 
        2 2 2 2 2 . . . . . . 2 2 2 2 2 
        2 2 2 2 2 . . . . . . 2 2 2 2 2 
        2 2 2 2 2 . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . 2 2 2 2 2 2 . . 2 2 2 2 2 
        . . . 2 2 2 2 2 2 . . . . . . . 
        . . . 2 2 2 2 2 2 . . . . . . . 
        . . . 2 2 2 2 2 2 . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 . 2 . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        2 2 2 2 2 . . . . . . 2 2 2 2 2 
        2 2 2 2 2 . . . . . . 2 2 2 2 2 
        2 2 2 2 2 . . . . . . 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34], TileScale.Sixteen))
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile36, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`08000a000101010101010101020504070202020201030101010101010103010101010101010301010101010101060101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
        2 2 2 2 2 2 2 2 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile4,myTiles.tile37,myTiles.tile38,myTiles.tile39,myTiles.tile41,myTiles.tile42], TileScale.Sixteen))
    controller.moveSprite(Chell, 100, 100)
    Chell.vy = 0
    Chell.y += -100
    Chell.x += -100
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile34, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010000010101010101010101010101010100000101010101010101010101010101000001010101010101010101010101010000010101010101010101010101010100000000000000000000000000000000000000000101010100000000000000000000000001010101000000000000000000000000010101010000000000000000000000000101010100000000000000000000000000000000020202020202020202020202030400000000000000000000000000000000000001010101000000000000000000000000010101010001010101000000000000000101010100010101010000000000000001010101000101010105050505050505`, img`
        2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 . . . . . . . . 
        . . . . . . . . . . . . 2 2 2 2 
        . . . . . . . . . . . . 2 2 2 2 
        . . . . . . . . . . . . 2 2 2 2 
        . . . . . . . . . . . . 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
        2 2 2 2 . . . . . . . . . . . . 
        2 2 2 2 . 2 2 2 2 . . . . . . . 
        2 2 2 2 . 2 2 2 2 . . . . . . . 
        2 2 2 2 . 2 2 2 2 . . . . . . . 
        `, [myTiles.transparency16,myTiles.tile28,myTiles.tile29,myTiles.tile31,myTiles.tile35,myTiles.tile36], TileScale.Sixteen))
    Chell.x += -100
})
let Chell: Sprite = null
Chell = sprites.create(img`
    . e e e e e e . 
    e e d f d f d . 
    e e d f d f d . 
    e . d d d d d . 
    . . d d f d d . 
    . 4 4 4 4 4 4 4 
    . d 4 4 4 4 4 d 
    . d 4 4 4 4 4 d 
    . d 4 4 4 4 4 d 
    . d 4 4 4 4 4 d 
    . . 4 4 4 4 4 . 
    . . 4 4 . 4 4 . 
    . . 4 4 . 4 4 . 
    . . 4 4 . 4 4 . 
    `, SpriteKind.Player)
Chell.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(Chell)
scene.cameraFollowSprite(Chell)
tiles.setTilemap(tiles.createTilemap(hex`09000b0003030101010c01010104040209020b0202020303010101010a0101040401010101010101030306060606060101050406070606060808010106060606060a0101010606060606010101010101010101010101010a01010a0a0101010101010a01010101`, img`
    2 2 2 2 2 2 2 2 2 
    2 2 . . . . . . . 
    2 2 . . . . . . . 
    2 2 . . . . . . . 
    2 2 2 2 2 2 2 . . 
    2 2 2 . . . 2 2 2 
    . . 2 . . . 2 . . 
    . . 2 2 2 2 2 . . 
    . . . . . . . . . 
    . . . . . . . . . 
    . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile4,myTiles.tile2,myTiles.tile3,myTiles.tile16,myTiles.tile18,myTiles.tile19,myTiles.tile22,myTiles.tile24,myTiles.tile23,myTiles.tile26,myTiles.tile27], TileScale.Sixteen))
Chell.y += 25
