namespace SpriteKind {
    export const Teller = SpriteKind.create()
}
function setBurgerStart () {
    Burger = sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . . 
. . . . . . . . c c c 4 4 4 4 4 4 4 4 4 4 6 6 6 . . . . . . . . 
. . . . . . c c 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 6 6 . . . . . . 
. . . . . c b 4 4 4 4 b b 4 4 4 4 b 5 b 4 4 4 4 4 4 b . . . . . 
. . . . e b 4 4 4 4 b 5 b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 b . . . . 
. . . e b b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 6 . . . 
. . e b 6 b b 4 4 4 4 4 4 4 4 4 b b 4 4 4 b 5 b 4 4 4 4 4 6 . . 
. . e 6 b b 5 b 4 4 4 4 4 4 4 4 b 5 b 4 4 4 b 4 4 b b 4 4 e . . 
. e 6 6 b 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 4 4 b 5 b 4 4 e . 
. e 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 e . 
e b 6 6 b 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e 
e b 6 6 b b 4 4 4 b 5 b 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 b e 
f b 6 6 6 b 4 4 4 b b 4 4 4 4 4 4 4 4 4 b 5 b 4 4 4 4 4 4 4 b f 
f c b 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 b c f 
. f b b 6 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f . 
. e f b b 6 6 6 6 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f e . 
. 8 6 f c b b 6 6 6 6 6 b b b 4 4 4 4 4 4 4 4 4 4 4 b c c 6 8 8 
8 7 7 2 e f f c b b b b b b b b b b b b b b b b c f c 2 2 7 7 8 
8 7 7 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 7 8 
f 8 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 6 6 8 6 f 
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f 
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f 
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f 
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e 
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 4 6 e 
. c 6 6 d d d 4 e f f f f f f e e e e e f f f f 4 d d b 4 6 e . 
. f c 6 b 4 d d d d d d d d d d d d d d d d d d d b 4 4 4 e e . 
. . f f 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . 
. . . . f f b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . . . 
. . . . . . f f e b b b b b b 4 4 4 4 4 4 4 4 e e e . . . . . . 
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
    Burger.setPosition(Math.randomRange(20, 160), 0)
    Burger.setVelocity(0, 50)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Teller, function (sprite, otherSprite) {
    if (Burger.y >= Teller.y - 8) {
        game.over(true, effects.smiles)
    }
})
let Burger: Sprite = null
let Teller: Sprite = null
Teller = sprites.create(img`
. . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . 
. . . . . . . . . . . b b b b d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d b b b b . . . . . . . . . . . 
. . . . . . . . b b b d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d b b b . . . . . . . . 
. . . . . . b b d 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 d b b . . . . . . 
. . . . b b d 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 d b b . . . . 
. . . b d 1 1 1 1 1 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 d b . . . 
. . b d 1 1 1 1 1 d d d 1 1 1 d d d d d d d d d d d d d d d d d d d 1 1 1 d d d 1 1 1 1 1 d b . . 
. b d 1 1 1 1 1 d d 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 d d 1 1 1 1 1 d b . 
. b 1 1 1 1 1 d 1 1 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 1 1 d 1 1 1 1 1 b . 
b d 1 1 1 1 1 d 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 1 d b 
b 1 1 1 1 1 d 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 d 1 1 1 1 1 b 
b 1 1 1 1 1 d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d 1 1 1 1 1 b 
b 1 1 1 1 1 d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b d 1 1 1 1 1 b 
b 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b 1 1 1 1 1 1 b 
b d 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b d 1 1 1 1 1 d b 
. b 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b d 1 1 1 1 1 1 b . 
. b d 1 1 1 1 1 1 1 d b b d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b b d 1 1 1 1 1 1 d b . 
. . b d 1 1 1 1 1 1 1 1 d b b d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b b d 1 1 1 1 1 1 1 d b . . 
. . . b d 1 1 1 1 1 1 1 1 1 d b b b b b b d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 d b . . . 
. . . . b b d 1 1 1 1 1 1 1 1 1 1 1 d b b b b b b b b b d d d 1 1 1 1 1 1 1 1 1 1 1 d b b . . . . 
. . . . . . b b d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d b b . . . . . . 
. . . . . . . . b b b d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d b b b . . . . . . . . 
. . . . . . . . . . . b b b b b d d d 1 1 1 1 1 1 1 1 1 1 1 d d d b b b b b . . . . . . . . . . . 
. . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . 
`, SpriteKind.Teller)
Teller.setPosition(80, 105)
scene.setBackgroundColor(6)
controller.moveSprite(Teller, 40, 0)
setBurgerStart()
forever(function () {
    if (Burger.y > 120) {
        setBurgerStart()
    }
})
