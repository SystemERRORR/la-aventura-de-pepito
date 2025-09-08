namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const vida = SpriteKind.create()
    export const npc01223 = SpriteKind.create()
    export const npcfin = SpriteKind.create()
    export const npcfinn = SpriteKind.create()
    export const npcnnn3 = SpriteKind.create()
    export const npcnnn4 = SpriteKind.create()
    export const npcfinn5 = SpriteKind.create()
    export const hechicera = SpriteKind.create()
    export const npc3485 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile77`, function (sprite, location) {
    sprites.destroy(enemi3)
    sprites.destroy(enemigo)
    sprites.destroy(enemigo2)
    sprites.destroy(enemi4)
    tiles.setCurrentTilemap(tilemap`level14`)
    tiles.placeOnTile(pablito, tiles.getTileLocation(4, 9))
    prince = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.npc01223)
    tiles.placeOnTile(prince, tiles.getTileLocation(4, 4))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hechicera, function (sprite, otherSprite) {
    game.showLongText("Buen trabajo Pablito", DialogLayout.Bottom)
    game.setGameOverMessage(true, "Gracias por jugar ")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc3485, function (sprite, otherSprite) {
    game.showLongText("¡Ayúdanos! la princesa fue secuestrada", DialogLayout.Bottom)
    pause(500)
    game.showLongText("ten cuidado hay fantasma en el laberinto", DialogLayout.Bottom)
    pause(500)
    game.showLongText("los fantasma no son inteligente pero si muy peligroso", DialogLayout.Bottom)
    pause(500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npcfinn, function (sprite, otherSprite) {
    game.showLongText("eres muy insano", DialogLayout.Bottom)
    pause(1000)
})
function proyectil2 (col: number, row: number, vx: number) {
    projectile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(projectile, tiles.getTileLocation(col, row))
    projectile.setBounceOnWall(true)
    projectile.setVelocity(0, vx)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    pablito,
    [img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 5 5 8 8 8 . . . . 
        . . . 8 8 8 5 5 5 5 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 5 5 5 5 5 5 5 5 8 8 . . 
        . . 8 5 5 8 8 8 8 8 8 5 5 8 . . 
        . . 8 8 8 8 5 5 5 5 8 8 8 8 . . 
        . . 8 8 8 b f 8 8 f b 8 8 8 . . 
        . . 5 5 5 1 f d d f 1 5 5 5 . . 
        . . 8 8 8 d d d d d d 8 8 8 . . 
        . . . 8 8 8 8 5 5 8 8 8 8 . . . 
        . . 4 4 8 8 8 8 8 8 8 8 4 4 . . 
        . . 4 4 8 5 5 8 8 5 5 8 4 4 . . 
        . . 4 4 8 8 8 8 8 8 8 8 4 4 . . 
        . . . . . 8 5 8 8 5 8 . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 5 5 8 8 8 . . . . 
        . . . 8 8 8 5 5 5 5 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 5 5 5 5 5 5 5 5 8 8 . . 
        . 8 8 5 5 8 8 8 8 8 8 5 5 8 8 . 
        . 8 8 8 8 8 5 5 5 5 8 8 8 8 8 . 
        . . 5 8 8 b f 8 8 f b 8 8 5 . . 
        . . 5 5 5 1 f d d f 1 5 5 5 . . 
        . . . 8 8 d d d d d d 8 8 8 . . 
        . . 8 8 8 8 8 5 5 8 8 4 4 8 . . 
        . . 8 4 8 8 8 8 8 8 8 4 4 . . . 
        . . . . 8 5 5 8 8 5 5 8 . . . . 
        . . . . 8 8 8 5 8 8 8 . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 5 5 8 8 8 . . . . 
        . . . 8 8 8 5 5 5 5 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 5 5 5 5 5 5 5 5 8 8 . . 
        . . 8 5 5 8 8 8 8 8 8 5 5 8 . . 
        . . 8 8 8 8 5 5 5 5 8 8 8 8 . . 
        . . 8 8 8 b f 8 8 f b 8 8 8 . . 
        . . 5 5 5 1 f d d f 1 5 5 5 . . 
        . . 8 8 8 d d d d d d 8 8 8 . . 
        . . . 8 8 8 8 5 5 8 8 8 8 . . . 
        . . 4 4 8 8 8 8 8 8 8 8 4 4 . . 
        . . 4 4 8 5 5 8 8 5 5 8 4 4 . . 
        . . 4 4 8 8 8 8 8 8 8 8 4 4 . . 
        . . . . . 8 8 5 5 8 8 . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 5 5 8 8 8 . . . . 
        . . . 8 8 8 5 5 5 5 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 5 5 5 5 5 5 5 5 8 8 . . 
        . 8 8 5 5 8 8 8 8 8 8 5 5 8 8 . 
        . 8 8 8 8 8 5 5 5 5 8 8 8 8 8 . 
        . . 5 8 8 b f 8 8 f b 8 8 5 . . 
        . . 5 5 5 1 f d d f 1 5 5 5 . . 
        . . 8 8 8 d d d d d d 8 8 . . . 
        . . 4 4 8 8 8 5 5 8 8 8 8 8 . . 
        . . 4 4 8 8 8 8 8 8 8 8 4 8 . . 
        . . . . 8 5 5 8 8 5 5 8 . . . . 
        . . . . . 8 8 8 5 8 8 8 . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npcfinn5, function (sprite, otherSprite) {
    game.showLongText("Gracias por salvarme, la hechizera quiere hablar contigo está en el lago.", DialogLayout.Bottom)
    pause(1000)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    pablito,
    [img`
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . 8 8 5 8 8 8 8 5 8 . . . 
        . . . 8 5 5 8 8 8 8 5 5 5 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 5 5 5 5 5 5 8 8 . 
        . . . 8 8 8 5 5 8 8 8 8 5 5 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . 5 8 8 5 8 b f 4 4 8 8 8 . 
        . . . 8 8 8 5 5 1 f d d 8 8 . . 
        . . . 8 8 8 8 8 d d d d 8 . . . 
        . . . . 8 8 8 8 8 8 8 8 5 . . . 
        . . . . . 5 5 8 8 8 8 8 8 . . . 
        . . . . . 8 5 8 8 8 5 5 8 . . . 
        . . . . . 5 8 4 4 8 8 8 8 . . . 
        . . . . . . 5 8 8 8 8 5 . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . 8 8 5 8 8 8 8 5 8 . . . 
        . . . 8 5 5 8 8 8 8 5 5 5 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 5 5 5 5 5 5 8 8 . 
        . . . 8 8 8 5 5 8 8 8 8 5 5 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . 5 8 8 5 8 b f 4 4 8 8 8 . 
        . . . 8 8 8 5 5 1 f d d 8 8 . . 
        . . . 8 8 8 8 8 8 d d d 8 . . . 
        . . . . . 8 8 8 8 8 8 8 5 . . . 
        . . . . . 8 8 4 4 8 8 8 8 . . . 
        . . . . 5 8 8 8 8 8 5 5 8 8 . . 
        . . . . 5 5 8 5 8 8 8 8 8 5 . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . 8 8 5 8 8 8 8 5 8 . . . 
        . . . 8 5 5 8 8 8 8 5 5 5 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 5 5 5 5 5 5 8 8 . 
        . . . 8 8 8 8 5 8 8 8 8 5 5 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . 5 8 8 5 8 b f 4 4 8 8 8 . 
        . . . 8 8 8 5 5 1 f d d 8 8 . . 
        . . . 8 8 8 8 8 d d d d 8 . . . 
        . . . . 8 8 8 8 8 8 8 8 5 . . . 
        . . . . . 8 4 8 8 8 8 8 8 . . . 
        . . . . . 8 4 4 8 5 5 5 8 . . . 
        . . . . . 5 8 8 8 8 8 8 5 . . . 
        . . . . . . 5 8 8 5 8 5 . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 5 8 . . . 
        . . . 8 8 8 5 8 8 8 5 5 5 8 . . 
        . . . 8 5 5 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 5 5 5 5 5 5 8 8 . 
        . . . 8 8 8 5 5 8 8 8 8 5 5 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . 5 8 5 8 8 b f 4 4 8 8 8 . 
        . . . 8 8 5 5 8 1 f d d 8 8 . . 
        . . . . 8 8 8 8 d d d d 8 . . . 
        . . . . . 8 5 5 5 8 8 8 5 . . . 
        . . . . 8 . . 8 8 8 8 8 8 . . . 
        . . . . 5 8 8 8 4 4 5 8 8 5 . . 
        . . . . 5 5 8 8 8 8 8 8 5 5 . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    pablito,
    [img`
        . . . . 8 8 8 8 8 8 . . . . . . 
        . . . 8 8 8 5 5 8 8 8 8 . . . . 
        . . 8 8 5 5 5 5 5 5 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 5 5 5 5 5 5 5 5 8 8 . . . 
        . 8 5 5 8 8 8 8 8 8 5 5 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 4 4 f b 8 5 8 5 5 . . . 
        . . 8 8 d d f 1 5 5 8 8 8 . . . 
        . . . 8 d d d 8 8 8 8 5 5 . . . 
        . . . 8 8 8 8 8 8 8 8 5 . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 5 5 5 8 8 4 4 8 . . . . . 
        . . . 5 8 8 8 8 8 8 5 . . . . . 
        . . . . 8 8 8 8 8 5 . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 8 . . . . . . 
        . . . 8 8 8 5 5 8 8 8 8 . . . . 
        . . 8 8 5 5 5 5 5 5 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 5 5 5 5 5 5 5 5 8 8 . . . 
        . 8 5 5 8 8 8 8 8 8 5 5 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 4 4 f b 8 5 8 8 5 . . . 
        . . 8 8 d d f 1 5 5 8 8 8 . . . 
        . . . 8 d d d 8 8 8 8 8 8 . . . 
        . . . 5 5 8 8 8 8 4 8 . . . . . 
        . . . 8 8 8 8 8 4 4 8 . . . . . 
        . . 8 8 5 5 8 8 8 8 8 8 . . . . 
        . . 8 8 8 8 8 5 8 8 8 5 . . . . 
        . . . f f f . . . f 5 . . . . . 
        `,img`
        . . . . 8 8 8 8 8 8 . . . . . . 
        . . . 8 5 8 8 8 8 8 8 8 . . . . 
        . . 8 5 5 5 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 5 5 5 5 5 5 8 8 8 8 . . . 
        . 8 5 5 8 8 8 8 5 5 8 8 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 4 4 f b 8 5 8 8 5 . . . 
        . . 8 8 d d f 1 5 5 8 8 8 . . . 
        . . . 8 d d d d 8 8 8 8 8 . . . 
        . . . 5 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 4 4 8 . . . . . 
        . . . 8 5 5 8 8 8 8 5 . . . . . 
        . . . . 8 8 5 8 8 5 . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 8 . . . . . . 
        . . . 8 5 8 8 8 8 8 8 8 . . . . 
        . . 8 5 5 5 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 5 5 5 . . . 
        . 8 8 5 5 5 5 5 5 8 8 8 8 . . . 
        . 8 5 5 8 8 8 8 5 5 8 8 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 4 4 f b 8 5 8 8 5 . . . 
        . . 8 8 d d f 1 5 5 8 8 8 . . . 
        . . . 8 d d d d 8 8 8 8 8 . . . 
        . . . 5 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 4 4 8 5 8 . . . . 
        . . 5 5 8 5 8 8 8 8 8 5 . . . . 
        . . 8 8 8 8 5 5 8 8 5 5 . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc01223, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    game.showLongText("Omaga papu", DialogLayout.Bottom)
    pause(1000)
    sprites.destroyAllSpritesOfKind(SpriteKind.npc01223)
    tiles.setCurrentTilemap(tilemap`level25`)
    NPC1 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.npcfin)
    npc2 = sprites.create(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.npcfinn)
    npc3 = sprites.create(img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `, SpriteKind.npcnnn3)
    npc4 = sprites.create(img`
        . . . . f f f f f . . . 
        . . f f e e e e e f . . 
        . f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f f 
        . f 4 d 4 d d d d f f . 
        . f f f 4 d d b b f . . 
        . . f e e 4 4 4 e f . . 
        . . 4 d d e 1 1 1 f . . 
        . . e d d e 1 1 1 f . . 
        . . f e e f 6 6 6 f . . 
        . . . f f f f f f . . . 
        . . . . f f f . . . . . 
        `, SpriteKind.npcnnn4)
    npc5 = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 6 2 5 5 6 f . . . . . 
        . . . f 6 6 6 6 1 6 6 f . . . . 
        . . . f 6 6 6 6 6 1 6 f . . . . 
        . . . f d f d 6 6 6 1 f . . . . 
        . . . f d f d 6 6 6 6 f f . . . 
        . . . f d 3 d d 6 6 6 f 6 f . . 
        . . . . f d d d f f 6 f f . . . 
        . . . . . f f 5 3 f 6 6 6 f . . 
        . . . . f 5 3 3 f f f f f . . . 
        . . . . f 3 3 f d f . . . . . . 
        . . . . . f 3 f d f . . . . . . 
        . . . . f 3 5 3 f d f . . . . . 
        . . . . f f 3 3 f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `, SpriteKind.npcfinn5)
    loca9e88 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f e e b b b b f . . . . 
        . . . f e b b e e e f . . . . . 
        . . . . e b b e b b 5 f . . . . 
        . . . . f e e 5 5 5 5 c . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.hechicera)
    tiles.placeOnTile(NPC1, tiles.getTileLocation(17, 9))
    tiles.placeOnTile(npc3, tiles.getTileLocation(15, 11))
    tiles.placeOnTile(npc2, tiles.getTileLocation(17, 9))
    tiles.placeOnTile(npc4, tiles.getTileLocation(6, 13))
    tiles.placeOnTile(npc5, tiles.getTileLocation(18, 12))
    tiles.placeOnTile(loca9e88, tiles.getTileLocation(7, 22))
    tiles.placeOnRandomTile(pablito, assets.tile`myTile88`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npcnnn3, function (sprite, otherSprite) {
    game.showLongText("ja, que patetico", DialogLayout.Bottom)
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npcnnn4, function (sprite, otherSprite) {
    game.showLongText("señor, eres mi idolo ", DialogLayout.Bottom)
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
    game.showLongText("Buscate mano bot", DialogLayout.Bottom)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile50`, function (sprite, location) {
    sprites.destroy(NPC1)
    sprites.destroy(enemigo)
    sprites.destroy(enemigo2)
    tiles.setCurrentTilemap(tilemap`level24`)
    tiles.placeOnRandomTile(pablito, assets.tile`myTile2`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundEast, function (sprite, location) {
    sprites.destroy(enemigo)
    sprites.destroy(enemigo2)
    tiles.setCurrentTilemap(tilemap`level2`)
    game.showLongText("¡No dejes que los láseres te toquen! Uwu", DialogLayout.Bottom)
    tiles.placeOnRandomTile(pablito, sprites.castle.tileDarkGrass2)
    enemigo = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......ffc111111cff......
        ......f1cd1111dc1f......
        ......fb1b1111bdbf......
        ......fff2f11f2fff......
        ......fcf111111fcf......
        .......fcbdb1b1cf.......
        ........ffbfbfdff.......
        .........ff.f.f.........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Projectile)
    enemigo2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......ffc111111cff......
        ......f1cd1111dc1f......
        ......fb1b1111bdbf......
        ......fff2f11f2fff......
        ......fcf111111fcf......
        .......fcbdb1b1cf.......
        ........ffbfbfdff.......
        .........ff.f.f.........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Projectile)
    tiles.placeOnRandomTile(enemigo2, assets.tile`myTile85`)
    tiles.placeOnRandomTile(enemigo, assets.tile`myTile84`)
    enemigo.follow(pablito)
    enemigo2.follow(pablito)
    proyectil(18, 14, -100)
    proyectil(18, 10, -100)
    proyectil(18, 16, -100)
    proyectil(15, 12, -100)
    proyectil(15, 8, -100)
    proyectil(23, 8, -100)
    proyectil(23, 12, -100)
    proyectil(20, 6, -100)
    proyectil(20, 10, -100)
    proyectil(20, 4, -100)
    proyectil(27, 12, -100)
    proyectil(27, 8, -100)
    proyectil(25, 14, -100)
    proyectil(25, 10, -100)
    proyectil(25, 4, -100)
    proyectil(27, 6, -100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    pablito,
    [img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 5 5 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 5 5 5 5 5 5 5 5 8 8 . . 
        . . 8 5 5 8 8 8 8 8 8 5 5 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 5 5 5 5 5 5 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . e 4 8 8 5 5 5 5 8 8 4 e . . 
        . . 4 d 8 8 8 8 8 8 8 8 d 4 . . 
        . . 4 4 8 8 5 8 8 5 8 8 4 4 . . 
        . . . . . 8 8 5 5 8 8 . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 5 5 8 8 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 5 5 5 5 5 5 5 5 8 8 . . 
        . . 8 5 5 8 8 8 8 8 8 5 5 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 5 5 5 5 5 5 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 5 5 5 5 8 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 4 . . . 
        . . . 4 8 8 5 8 8 5 8 d d 4 . . 
        . . . 8 8 8 8 5 5 8 8 8 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 5 5 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 5 5 5 5 5 5 5 5 8 8 . . 
        . . 8 5 5 8 8 8 8 8 8 5 5 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 5 5 5 5 5 5 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 5 5 5 5 8 8 8 . . . 
        . . e 4 8 8 8 8 8 8 8 8 4 e . . 
        . . 4 d 8 8 8 8 8 8 8 8 d 4 . . 
        . . 4 4 8 8 5 8 8 5 8 8 4 4 . . 
        . . . . . 8 8 5 5 8 8 . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 5 5 8 8 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 5 5 5 5 5 5 5 5 8 8 . . 
        . . 8 5 5 8 8 8 8 8 8 5 5 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 5 5 5 5 5 5 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 5 5 5 5 8 8 8 . . . 
        . . . 4 8 8 8 8 8 8 8 8 8 . . . 
        . . 4 d d 8 5 8 8 5 8 8 4 . . . 
        . . . 4 8 8 8 5 5 8 8 8 8 . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile87`, function (sprite, location) {
    sprites.destroy(NPC1)
    sprites.destroy(enemigo)
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(pablito, assets.tile`myTile86`)
    enemigo = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......ffc111111cff......
        ......f1cd1111dc1f......
        ......fb1b1111bdbf......
        ......fff2f11f2fff......
        ......fcf111111fcf......
        .......fcbdb1b1cf.......
        ........ffbfbfdff.......
        .........ff.f.f.........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Projectile)
    enemigo.follow(pablito)
    tiles.placeOnRandomTile(enemigo, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npcfin, function (sprite, otherSprite) {
    game.showLongText("¡ERES GRANDIOSO!", DialogLayout.Bottom)
    pause(1000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    tiles.setCurrentTilemap(tilemap`level16`)
    tiles.placeOnRandomTile(pablito, assets.tile`myTile83`)
    enemigo = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......ffc111111cff......
        ......f1cd1111dc1f......
        ......fb1b1111bdbf......
        ......fff2f11f2fff......
        ......fcf111111fcf......
        .......fcbdb1b1cf.......
        ........ffbfbfdff.......
        .........ff.f.f.........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Projectile)
    enemigo2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......ffc111111cff......
        ......f1cd1111dc1f......
        ......fb1b1111bdbf......
        ......fff2f11f2fff......
        ......fcf111111fcf......
        .......fcbdb1b1cf.......
        ........ffbfbfdff.......
        .........ff.f.f.........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Projectile)
    enemi3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......ffc111111cff......
        ......f1cd1111dc1f......
        ......fb1b1111bdbf......
        ......fff2f11f2fff......
        ......fcf111111fcf......
        .......fcbdb1b1cf.......
        ........ffbfbfdff.......
        .........ff.f.f.........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Projectile)
    enemi4 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......ffc111111cff......
        ......f1cd1111dc1f......
        ......fb1b1111bdbf......
        ......fff2f11f2fff......
        ......fcf111111fcf......
        .......fcbdb1b1cf.......
        ........ffbfbfdff.......
        .........ff.f.f.........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Projectile)
    enemigo2.follow(pablito, 85)
    enemigo.follow(pablito, 85)
    enemi3.follow(pablito, 85)
    enemi4.follow(pablito, 85)
    tiles.placeOnRandomTile(enemigo, assets.tile`myTile78`)
    tiles.placeOnRandomTile(enemigo2, assets.tile`myTile79`)
    tiles.placeOnRandomTile(enemi3, assets.tile`myTile80`)
    tiles.placeOnRandomTile(enemi4, assets.tile`myTile81`)
})
function proyectil (col: number, row: number, vx: number) {
    projectile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(projectile, tiles.getTileLocation(col, row))
    projectile.setBounceOnWall(true)
    projectile.setVelocity(vx, 0)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile56`, function (sprite, location) {
    sprites.destroy(NPC1)
    sprites.destroy(enemigo)
    sprites.destroy(enemigo2)
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(pablito, assets.tile`myTile57`)
    proyectil2(4, 42, -200)
    proyectil2(8, 42, -200)
    proyectil2(12, 42, -200)
    proyectil2(10, 58, -200)
    proyectil2(6, 58, -200)
    proyectil(1, 57, -200)
    proyectil(1, 49, -200)
    proyectil(1, 53, -200)
    proyectil(1, 45, -200)
    proyectil(14, 43, -200)
    proyectil(14, 47, -200)
    proyectil(14, 51, -200)
    proyectil(14, 55, -200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
    game.gameOver(false)
})
let moving = false
let loca9e88: Sprite = null
let npc5: Sprite = null
let npc4: Sprite = null
let npc3: Sprite = null
let npc2: Sprite = null
let NPC1: Sprite = null
let projectile: Sprite = null
let prince: Sprite = null
let enemi4: Sprite = null
let enemigo2: Sprite = null
let enemigo: Sprite = null
let enemi3: Sprite = null
let pablito: Sprite = null
game.setDialogCursor(img`
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . 8 8 8 5 5 8 8 8 . . . . 
    . . . 8 8 8 5 5 5 5 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . 8 8 8 5 5 5 5 5 5 8 8 8 . . 
    . . 8 8 5 8 8 8 8 8 8 5 8 8 . . 
    . . 8 8 8 8 5 5 5 5 8 8 8 8 . . 
    . . 8 8 8 b f 8 8 f b 8 8 8 . . 
    . . 5 5 5 1 f d d f 1 5 5 5 . . 
    . . 8 8 8 d d d d d d 8 8 8 . . 
    . . . 8 8 8 8 5 5 8 8 8 8 . . . 
    . . e 4 8 8 8 8 8 8 8 8 4 e . . 
    . . 4 d 8 5 5 8 8 5 5 8 d 4 . . 
    . . 4 4 8 8 8 8 8 8 8 8 4 4 . . 
    . . . . . 8 5 8 8 5 8 . . . . . 
    . . . . . f f . . f f . . . . . 
    `)
game.setDialogTextColor(15)
game.setDialogFrame(img`
    ..................................................................
    ............fff........fff.............fff..............ffff......
    ...........fddbf......fbdbf...........fbdbf............fbddf......
    ...........fddbbf.....fdddffff........fdddffff...fff..ffddbff.....
    ...........fddddffffffbdddbddbffffffffbdddbddbffffddffddddddf.....
    ...fff....fdddddfddddddddbbddddddddddddddbbddddddfdddddbccddf.....
    .fffddf..fddffffddddddddddbbddddddddddddddbbdddddffbddbbddff......
    .fdbddfffddfffdddfffffbdddbddbffffffffbdddbddbfffefddccbddf.......
    .fdddcddddffeffffeeeeefbdbfddfeeeeeeeefbdbfddfeeeefffcddddf.......
    .fbddcddddfeeeeeeeeeeeefffffffeeeeeeeeefffffffeeeeeeefdddddf......
    ..ffdbbbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffddf.....
    ...fddbcddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddfff..
    ....fddccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddf.
    ....fdddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddddf.
    ...fddbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbbf.
    ...fddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbf..
    ...ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddfff...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
    ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
    .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
    .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
    .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
    ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
    ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
    .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
    .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
    .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
    ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fffddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff...
    ..fbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddf...
    .fbbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdbddf...
    .fddddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddf....
    .fddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccddf....
    ..fffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddcbddf...
    .....fddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbbbdff..
    ......fdddddfeeeeeeefffffffeeeeeeeeefffffffeeeeeeeeeeeefddddcddbf.
    .......fddddcfffeeeefddfbdbfeeeeeeeefddfbdbfeeeeeffffeffddddcdddf.
    .......fddbccddfefffbddbdddbffffffffbddbdddbfffffdddfffddfffddbdf.
    ......ffddbbddbffdddddbbddddddddddddddbbddddddddddffffddf..fddfff.
    .....fddccbdddddfddddddbbddddddddddddddbbddddddddfdddddf....fff...
    .....fddddddffddffffbddbdddbffffffffbddbdddbffffffddddf...........
    .....ffbddff..fff...ffffdddf........ffffdddf.....fbbddf...........
    ......fddbf............fbdbf...........fbdbf......fbddf...........
    ......ffff..............fff.............fff........fff............
    ..................................................................
    `)
game.showLongText("Los botones para poder jugar son W para caminar hacia arriba, S para hacia abajo, A para caminar hacia la izquierda y D para caminar hacia la derecha.", DialogLayout.Full)
tiles.setCurrentTilemap(tilemap`level6`)
pablito = sprites.create(img`
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . 8 8 8 5 5 8 8 8 . . . . 
    . . . 8 8 8 5 5 5 5 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . 8 8 8 5 5 5 5 5 5 8 8 8 . . 
    . . 8 8 5 8 8 8 8 8 8 5 8 8 . . 
    . . 8 8 8 8 5 5 5 5 8 8 8 8 . . 
    . . 8 8 8 b f 8 8 f b 8 8 8 . . 
    . . 5 5 5 1 f d d f 1 5 5 5 . . 
    . . 8 8 8 d d d d d d 8 8 8 . . 
    . . . 8 8 8 8 5 5 8 8 8 8 . . . 
    . . e 4 8 8 8 8 8 8 8 8 4 e . . 
    . . 4 d 8 5 5 8 8 5 5 8 d 4 . . 
    . . 4 4 8 8 8 8 8 8 8 8 4 4 . . 
    . . . . . 8 5 8 8 5 8 . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(pablito, 115, 115)
tiles.placeOnTile(pablito, tiles.getTileLocation(1, 11))
scene.cameraFollowSprite(pablito)
game.showLongText("bienvenido a la aventura de Pablito", DialogLayout.Bottom)
game.setDialogFrame(img`
    ..................................................................
    .....888..888........................................888..888.....
    ...68777887778.66666.........6666666.........666666.87778877786...
    ..68777777777786999666.....66699999666.....666999968777777777786..
    ..687887777887899999966...6699999999966...6699999998788777788786..
    ..66788777788769999999666669999999999966666999999996788777788766..
    ..67777777777776999999999999999999999999999999999967777777777776..
    ..633777777773366999999999999999999999999999999996633777777773366.
    .6733776666773376999999999999999999999999999999996733776666773376.
    .677776dddd67777699999999999999999999999999999999677776dddd677776.
    .6d666dddddd666d6999999999999999999999999999999996d666dddddd666d6.
    .6dddddddddddddd6999999999999999999999999999999996dddddddddddddd6.
    ..6dddddddddddd699999999999999999999999999999999996dddddddddddd6..
    ...666666666666999999999999999999999999999999999999666666666666...
    ...699999999999999999999999999999999999999999999999999999999996...
    ..66999999999999999999999999999999999999999999999999999999999966..
    ..69999999999999999999999999999999999999999999999999999999999996..
    ..69999999999999999999999999999999999999999999999999999999999996..
    ..69999999999999999999999999999999999999999999999999999999999996..
    ..69999999999999999999999999999999999999999999999999999999999966..
    ..6699999999999999999999999999999999999999999999999999999999996...
    ...699999999999999999999999999999999999999999999999999999999966...
    ...66999999999999999999999999999999999999999999999999999999966....
    ....669999999999999999999999999999999999999999999999999999996.....
    .....69999999999999999999999999999999999999999999999999999996.....
    .....69999999999999999999999999999999999999999999999999999996.....
    .....699999999999999999999999999999999999999999999999999999966....
    ....66999999999999999999999999999999999999999999999999999999966...
    ...669999999999999999999999999999999999999999999999999999999996...
    ...6999999999999999999999999999999999999999999999999999999999966..
    ..66999999999999999999999999999999999999999999999999999999999996..
    ..69999999999999999999999999999999999999999999999999999999999996..
    ..69999999999999999999999999999999999999999999999999999999999996..
    ..69999999999999999999999999999999999999999999999999999999999996..
    ..69999999999999999999999999999999999999999999999999999999999996..
    ..69999999999999999999999999999999999999999999999999999999999966..
    ..6699999999999999999999999999999999999999999999999999999999996...
    ...699999999999999999999999999999999999999999999999999999999966...
    ...66999999999999999999999999999999999999999999999999999999966....
    ....669999999999999999999999999999999999999999999999999999996.....
    .....69999999999999999999999999999999999999999999999999999996.....
    .....69999999999999999999999999999999999999999999999999999996.....
    .....699999999999999999999999999999999999999999999999999999966....
    ....66999999999999999999999999999999999999999999999999999999966...
    ...669999999999999999999999999999999999999999999999999999999996...
    ...6999999999999999999999999999999999999999999999999999999999966..
    ..66999999999999999999999999999999999999999999999999999999999996..
    ..69999999999999999999999999999999999999999999999999999999999996..
    ..69999999999999999999999999999999999999999999999999999999999996..
    ..69999999999999999999999999999999999999999999999999999999999996..
    ..66999999999999999999999999999999999999999999999999999999999966..
    ...699999999999999999999999999999999999999999999999999999999996...
    ...668889988899999999999999999999999999999999999999998889988866...
    ....8777887778999999999999999999999999999999999999998777887778....
    ...877777777778999999999999999999999999999999999999877777777778...
    ...878877778878999999999999999999999999999999999999878877778878...
    ...678877778876999999999999999999999999999999999999678877778876...
    ..67777777777776999999999999999999999999999999999967777777777776..
    ..633777777773366999999999999999999999999999999996633777777773366.
    .6733776666773376999999999999999999999999999999996733776666773376.
    .677776dddd67777699999966666999999999996666699999677776dddd677776.
    .6d666dddddd666d69999966...6699999999966...6699996d666dddddd666d6.
    .6dddddddddddddd6999666.....66699999666.....666996dddddddddddddd6.
    ..6dddddddddddd666666.........6666666.........66666dddddddddddd6..
    ...666666666666....................................666666666666...
    ..................................................................
    `)
let npc99029394823984 = sprites.create(img`
    . . . . . . c c c . . . . . . . 
    . . . . . . c 5 b c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c c c 5 5 5 5 c b c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . c 5 5 5 b b b b 5 5 5 f . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b f b 5 b b 5 b c b e . . 
    . . e e f 5 5 5 5 5 5 f e e . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.npc3485)
tiles.placeOnTile(npc99029394823984, tiles.getTileLocation(28, 1))
music.play(music.createSong(assets.song`MINECRAFT`), music.PlaybackMode.LoopingInBackground)
game.onUpdate(function () {
    moving = controller.up.isPressed() || (controller.down.isPressed() || (controller.right.isPressed() || controller.left.isPressed()))
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, pablito)
    }
})
