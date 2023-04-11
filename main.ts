namespace SpriteKind {
    export const Start = SpriteKind.create()
    export const Player_Start = SpriteKind.create()
    export const seeing = SpriteKind.create()
    export const corpse = SpriteKind.create()
    export const Player_Start_Imposter = SpriteKind.create()
    export const button = SpriteKind.create()
    export const hat = SpriteKind.create()
}
namespace StatusBarKind {
    export const Tasks = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (me_walk_lock == 0) {
        animation.runImageAnimation(
        me,
        [img`
            . . . . . f f f f f . . . . . 
            . . . . f 2 2 2 2 2 f f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 f f f f f f f . 
            f f f 2 2 2 f 8 6 6 9 9 9 6 f 
            f 2 f 2 2 2 f 8 8 6 6 6 6 6 f 
            f e f e 2 2 f 8 8 8 8 6 6 6 f 
            f e f e 2 2 2 f f f f f f f . 
            f e f e e 2 2 2 2 2 2 2 f . . 
            f f f e e e 2 2 2 2 2 2 f . . 
            . . f e e e e e 2 2 2 e f . . 
            . . f e e e e e e e e e f f f 
            . f e e e e f f f e e e e e f 
            . f e e e e f . f e e e e e f 
            . f e e e e f . f e e e e f . 
            . . f f f f f . f f f f f . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . 
            . . . . f 2 2 2 2 2 f f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 f f f f f f f . 
            f f f 2 2 2 f 8 6 6 9 9 9 6 f 
            f 2 f 2 2 2 f 8 8 6 6 6 6 6 f 
            f e f e 2 2 f 8 8 8 8 6 6 6 f 
            f e f e 2 2 2 f f f f f f f . 
            f e f e e 2 2 2 2 2 2 2 f . . 
            f f f e e e 2 2 2 2 2 2 f . . 
            . . f e e e e e 2 2 2 e f . . 
            . . f e e e e e e e e e f . . 
            . . f e e e f f f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f f f f f . f f f f f . . 
            `,img`
            . . . . . f f f f f . . . . . 
            . . . . f 2 2 2 2 2 f f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 f f f f f f f . 
            f f f 2 2 2 f 8 6 6 9 9 9 6 f 
            f 2 f 2 2 2 f 8 8 6 6 6 6 6 f 
            f e f e 2 2 f 8 8 8 8 6 6 6 f 
            f e f e 2 2 2 f f f f f f f . 
            f e f e e 2 2 2 2 2 2 2 f . . 
            f f f e e e 2 2 2 2 2 2 f . . 
            . . f e e e e e 2 2 2 e f . . 
            f f f e e e e e e e e e f . . 
            f e e e e e f f f e e e e f . 
            f e e e e e f . f e e e e f . 
            . f e e e e f . f e e e e f . 
            . . f f f f f . f f f f f . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . 
            . . . . f 2 2 2 2 2 f f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 f f f f f f f . 
            f f f 2 2 2 f 8 6 6 9 9 9 6 f 
            f 2 f 2 2 2 f 8 8 6 6 6 6 6 f 
            f e f e 2 2 f 8 8 8 8 6 6 6 f 
            f e f e 2 2 2 f f f f f f f . 
            f e f e e 2 2 2 2 2 2 2 f . . 
            f f f e e e 2 2 2 2 2 2 f . . 
            . . f e e e e e 2 2 2 e f . . 
            . . f e e e e e e e e e f . . 
            . . f e e e f f f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f f f f f . f f f f f . . 
            `],
        400,
        true
        )
    }
})
function USE (x: number, y: number) {
    USE_SET = true
    mySprite2 = sprites.create(img`
        ....................
        .111111111111111111.
        .1ffffffffffffffff1.
        ..1f111111111111f1..
        .dddd111dddd11dddd..
        dfddfd1dffffddffffd.
        dfddfddfdddd1dfddd..
        dfddfd1dffffddfffd..
        dfddfd21dddfddfddd..
        .dffd1fdfffd2dffffd.
        ..dd.1f2ddd12fdddd..
        ......1f2112f1......
        ......1f2112f1......
        ......1f2112f1......
        .......1f22f1.......
        .......1f22f1.......
        ........1ff1........
        ........1ff1........
        .........11.........
        .........11.........
        `, SpriteKind.button)
    mySprite2.setFlag(SpriteFlag.RelativeToCamera, true)
    mySprite2.setPosition(151, 111)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ROLE == 1) {
        if (me.tileKindAt(TileDirection.Center, assets.tile`tile61`)) {
            vent(me)
        }
        if (me.tileKindAt(TileDirection.Center, assets.tile`tile62`)) {
            vent(me)
        }
        if (me.tileKindAt(TileDirection.Center, assets.tile`tile63`)) {
            vent(me)
        }
        if (me.tileKindAt(TileDirection.Center, assets.tile`tile64`)) {
            vent(me)
        }
        if (me.tileKindAt(TileDirection.Center, assets.tile`tile100`)) {
            vent(me)
        }
    }
    if (Alive_Blue == 1) {
        if (me.overlapsWith(Blue)) {
            game.splash("Dead Body Reported", "Blue")
            Blue.destroy(effects.disintegrate, 500)
        }
    }
    if (Alive_Green == 1) {
        if (me.overlapsWith(Green)) {
            game.splash("Dead Body Reported", "Green")
            Green.destroy(effects.disintegrate, 500)
        }
    }
    if (Alive_Orange == 1) {
        if (me.overlapsWith(Orange)) {
            game.splash("Dead Body Reported", "Orange")
            Orange.destroy(effects.disintegrate, 500)
        }
    }
    if (Alive_Yellow == 1) {
        if (me.overlapsWith(Yellow)) {
            game.splash("Dead Body Reported", "Yellow")
            Yellow.destroy(effects.disintegrate, 500)
        }
    }
    if (Alive_Black == 1) {
        if (me.overlapsWith(Black)) {
            game.splash("Dead Body Reported", "Black")
            Black.destroy(effects.disintegrate, 500)
        }
    }
    if (Alive_White == 1) {
        if (me.overlapsWith(White)) {
            game.splash("Dead Body Reported", "White")
            White.destroy(effects.disintegrate, 500)
        }
    }
})
function Report (Sprite2: Sprite, Body: Sprite) {
    if (spriteutils.distanceBetween(Sprite2, Body) <= 60) {
        if (Alive_Black == 1) {
            Sprite2.follow(Black, 100)
        }
        if (Alive_Blue == 1) {
            Sprite2.follow(Blue, 100)
        }
        if (Alive_Cyan == 1) {
            Sprite2.follow(Cyan, 100)
        }
        if (Alive_Green == 1) {
            Sprite2.follow(Green, 100)
        }
        if (Alive_Orange == 1) {
            Sprite2.follow(Orange, 100)
        }
        if (Alive_Purple == 1) {
            Sprite2.follow(Purple, 100)
        }
        if (Alive_White == 1) {
            Sprite2.follow(White, 100)
        }
        if (Alive_Yellow == 1) {
            Sprite2.follow(Yellow, 100)
        }
    }
}
function vent (mySprite: Sprite) {
    if (true) {
        if (Math.percentChance(50)) {
            tiles.placeOnRandomTile(me, assets.tile`tile62`)
            pet.setPosition(me.x, me.y)
        } else if (Math.percentChance(50)) {
            tiles.placeOnRandomTile(me, assets.tile`tile61`)
            pet.setPosition(me.x, me.y)
        } else if (Math.percentChance(50)) {
            tiles.placeOnRandomTile(me, assets.tile`tile63`)
            pet.setPosition(me.x, me.y)
        } else if (Math.percentChance(50)) {
            tiles.placeOnRandomTile(me, assets.tile`tile100`)
            pet.setPosition(me.x, me.y)
        } else {
            tiles.placeOnRandomTile(me, assets.tile`tile64`)
            pet.setPosition(me.x, me.y)
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start_game == 0) {
        info.startCountdown(5)
        Start_Button.destroy()
    }
    if (ROLE == 0) {
        if (me.tileKindAt(TileDirection.Center, sprites.dungeon.buttonTeal)) {
            if (Task_Blue_d == 0) {
                statusbar.value += 10
                Task_Blue_d = 1
            }
        }
        if (me.tileKindAt(TileDirection.Center, sprites.dungeon.buttonTealDepressed)) {
            if (Task_Blue_p == 0) {
                statusbar.value += 10
                Task_Blue_p = 1
            }
        }
        if (me.tileKindAt(TileDirection.Center, sprites.dungeon.buttonPink)) {
            if (Task_Pink_d == 0) {
                statusbar.value += 10
                Task_Pink_d = 1
            }
        }
        if (me.tileKindAt(TileDirection.Center, sprites.dungeon.buttonPinkDepressed)) {
            if (Task_Pink_p == 0) {
                statusbar.value += 10
                Task_Pink_p = 1
            }
        }
        if (me.tileKindAt(TileDirection.Center, sprites.dungeon.buttonOrange)) {
            if (Task_Orange_d == 0) {
                statusbar.value += 10
                Task_Orange_d = 1
            }
        }
        if (me.tileKindAt(TileDirection.Center, sprites.dungeon.buttonOrangeDepressed)) {
            if (Task_Orange_p == 0) {
                statusbar.value += 10
                Task_Pink_p = 1
            }
        }
        if (me.tileKindAt(TileDirection.Top, assets.tile`tile117`)) {
            if (Garbage_1 == 0) {
                statusbar.value += 8
                Garbage_1 = 1
                Garbage_2 = 2
            }
        }
        if (me.tileKindAt(TileDirection.Top, assets.tile`tile117`)) {
            if (Garbage_1 == 0) {
                statusbar.value += 8
                Garbage_1 = 1
                Garbage_2 += 1
            }
        }
        if (me.tileKindAt(TileDirection.Center, assets.tile`tile44`)) {
            if (Task_Elec == 0) {
                statusbar.value += 8
                Task_Elec = 1
            }
        }
        if (me.tileKindAt(TileDirection.Top, assets.tile`tile85`)) {
            if (game.runtime() - LAST_WIRE >= TIME_WIRE) {
                statusbar.value += 10
                LAST_WIRE = game.runtime()
            }
        }
        if (me.tileKindAt(TileDirection.Top, assets.tile`tile84`)) {
            if (game.runtime() - LAST_DOWNLOAD >= TIME_DOWNLOAD) {
                statusbar.value += 15
                LAST_DOWNLOAD = game.runtime()
            }
        }
        if (me.tileKindAt(TileDirection.Top, assets.tile`tile112`)) {
            if (game.runtime() - LAST_DIVERT >= TIME_DIVERT) {
                statusbar.value += 10
                LAST_DIVERT = game.runtime()
            }
        }
        if (me.tileKindAt(TileDirection.Center, assets.tile`tile5`)) {
            if (Garbage_1 == 1) {
                if (Garbage_2 == 1) {
                    statusbar.value += 8
                    Garbage_2 = 2
                }
            }
        }
    } else if (ROLE == 1) {
        if (game.runtime() - Last_Pressed >= Time_Between_Kill) {
            if (Alive_Blue == 0) {
                if (spriteutils.distanceBetween(me, Blue) <= Kill_Range) {
                    Blue.setImage(img`
                        . . . . . . f f f f f . . . . . . 
                        . . . . . f 8 8 8 8 8 f f . . . . 
                        . . . . f 8 8 8 8 8 8 8 f f . . . 
                        . . . f 8 8 8 8 f f f f f f f . . 
                        . f f f 8 8 8 f 8 6 6 9 9 9 6 f 2 
                        . f 8 f 8 8 8 f 8 8 6 6 6 6 6 f . 
                        2 f c f c 8 8 f 8 8 8 8 6 6 6 f . 
                        . f c f c 8 8 8 f f f f f f f . . 
                        . f c f c c 8 8 8 8 8 8 8 f . 2 2 
                        . f f f 2 2 c 2 8 8 8 2 8 f 2 2 . 
                        . . . f c 2 2 2 2 2 2 2 2 f . . . 
                        . 2 2 f c c 2 c c c c c c f 2 . 2 
                        . . . f c 2 c f f f c c c f . . . 
                        . 2 . f c 2 c f . f c c c f . 2 . 
                        . . . f c c c f . f c c c f . . . 
                        . . . f f f f f . f f f f f . . . 
                        `)
                    pause(300)
                    Blue.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f f f . . . . . 
                        . . f f f f . f 8 8 f f . . . . 
                        . f f 8 8 f f 8 8 8 8 f . . . . 
                        . f 8 8 8 8 8 8 8 8 8 f f . . . 
                        . f 8 8 8 f f f f f f 8 f . . . 
                        . f 8 f f f 8 8 8 8 f f f f . . 
                        . f f 8 8 8 8 e e 2 8 8 8 f . . 
                        . f 8 2 2 2 2 f 2 2 e 2 8 f f . 
                        . f 8 2 e 2 f d f f f f 2 8 f . 
                        . f 8 2 e 2 2 f d d d d f 8 f . 
                        . f 8 8 2 2 2 2 f d f f 2 8 f . 
                        . f f 8 8 8 8 8 f d f 8 8 f f . 
                        . . f f f f f f f f f f f f . . 
                        `)
                    me.setPosition(Blue.x, Blue.y)
                    scene.followPath(Blue, [], 0)
                    Alive_Blue = 1
                    Kill_Count += 1
                    Last_Pressed = game.runtime()
                }
            }
            if (Alive_Green == 0) {
                if (spriteutils.distanceBetween(me, Green) <= Kill_Range) {
                    Green.setImage(img`
                        . . . . . . f f f f f . . . . . . 
                        . . . . . f 7 7 7 7 7 f f . . . . 
                        . . . . f 7 7 7 7 7 7 7 f f . . . 
                        . . . f 7 7 7 7 f f f f f f f . . 
                        . f f f 7 7 7 f 8 6 6 9 9 9 6 f 2 
                        . f 7 f 7 7 7 f 8 8 6 6 6 6 6 f . 
                        2 f 6 f 6 7 7 f 8 8 8 8 6 6 6 f . 
                        . f 6 f 6 7 7 7 f f f f f f f . . 
                        . f 6 f 6 6 7 7 7 7 7 7 7 f . 2 2 
                        . f f f 2 2 6 2 7 7 7 2 7 f 2 2 . 
                        . . . f 6 2 2 2 2 2 2 2 2 f . . . 
                        . 2 2 f 6 6 2 6 6 6 6 6 6 f 2 . 2 
                        . . . f 6 2 6 f f f 6 6 6 f . . . 
                        . 2 . f 6 2 6 f . f 6 6 6 f . 2 . 
                        . . . f 6 6 6 f . f 6 6 6 f . . . 
                        . . . f f f f f . f f f f f . . . 
                        `)
                    pause(300)
                    Green.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f f f . . . . . 
                        . . f f f f . f 7 7 f f . . . . 
                        . f f 7 7 f f 7 7 7 7 f . . . . 
                        . f 7 7 7 7 7 7 7 7 7 f f . . . 
                        . f 7 7 7 f f f f f f 7 f . . . 
                        . f 7 f f f 7 7 7 7 f f f f . . 
                        . f f 7 7 7 7 e e 2 7 7 7 f . . 
                        . f 7 2 2 2 2 f 2 2 e 2 7 f f . 
                        . f 7 2 e 2 f d f f f f 2 7 f . 
                        . f 7 2 e 2 2 f d d d d f 7 f . 
                        . f 7 7 2 2 2 2 f d f f 2 7 f . 
                        . f f 7 7 7 7 7 f d f 7 7 f f . 
                        . . f f f f f f f f f f f f . . 
                        `)
                    me.setPosition(Green.x, Green.y)
                    scene.followPath(Green, [], 0)
                    Alive_Green = 1
                    Kill_Count += 1
                    Last_Pressed = game.runtime()
                }
            }
            if (Alive_Orange == 0) {
                if (spriteutils.distanceBetween(me, Orange) <= Kill_Range) {
                    Orange.setImage(img`
                        . . . . . . f f f f f . . . . . . 
                        . . . . . f 4 4 4 4 4 f f . . . . 
                        . . . . f 4 4 4 4 4 4 4 f f . . . 
                        . . . f 4 4 4 4 f f f f f f f . . 
                        . f f f 4 4 4 f 8 6 6 9 9 9 6 f 2 
                        . f 4 f 4 4 4 f 8 8 6 6 6 6 6 f . 
                        2 f e f e 4 4 f 8 8 8 8 6 6 6 f . 
                        . f e f e 4 4 4 f f f f f f f . . 
                        . f e f e e 4 4 4 4 4 4 4 f . 2 2 
                        . f f f 2 2 e 2 4 4 4 2 4 f 2 2 . 
                        . . . f e 2 2 2 2 2 2 2 2 f . . . 
                        . 2 2 f e e 2 e e e e e e f 2 . 2 
                        . . . f e 2 e f f f e e e f . . . 
                        . 2 . f e 2 e f . f e e e f . 2 . 
                        . . . f e e e f . f e e e f . . . 
                        . . . f f f f f . f f f f f . . . 
                        `)
                    pause(300)
                    Orange.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f f f . . . . . 
                        . . f f f f . f 4 4 f f . . . . 
                        . f f 4 4 f f 4 4 4 4 f . . . . 
                        . f 4 4 4 4 4 4 4 4 4 f f . . . 
                        . f 4 4 4 f f f f f f 4 f . . . 
                        . f 4 f f f 4 4 4 4 f f f f . . 
                        . f f 4 4 4 4 e e 2 4 4 4 f . . 
                        . f 4 2 2 2 2 f 2 2 e 2 4 f f . 
                        . f 4 2 e 2 f d f f f f 2 4 f . 
                        . f 4 2 e 2 2 f d d d d f 4 f . 
                        . f 4 4 2 2 2 2 f d f f 2 4 f . 
                        . f f 4 4 4 4 4 f d f 4 4 f f . 
                        . . f f f f f f f f f f f f . . 
                        `)
                    me.setPosition(Orange.x, Orange.y)
                    Alive_Orange = 1
                    Kill_Count += 1
                    Last_Pressed = game.runtime()
                }
            }
            if (Alive_Yellow == 0) {
                if (spriteutils.distanceBetween(me, Yellow) <= Kill_Range) {
                    Yellow.setImage(img`
                        . . . . . . f f f f f . . . . . . 
                        . . . . . f 5 5 5 5 5 f f . . . . 
                        . . . . f 5 5 5 5 5 5 5 f f . . . 
                        . . . f 5 5 5 5 f f f f f f f . . 
                        . f f f 5 5 5 f 8 6 6 9 9 9 6 f 2 
                        . f 5 f 5 5 5 f 8 8 6 6 6 6 6 f . 
                        2 f 4 f 4 5 5 f 8 8 8 8 6 6 6 f . 
                        . f 4 f 4 5 5 5 f f f f f f f . . 
                        . f 4 f 4 4 5 5 5 5 5 5 5 f . 2 2 
                        . f f f 2 2 4 2 5 5 5 2 5 f 2 2 . 
                        . . . f 4 2 2 2 2 2 2 2 2 f . . . 
                        . 2 2 f 4 4 2 4 4 4 4 4 4 f 2 . 2 
                        . . . f 4 2 4 f f f 4 4 4 f . . . 
                        . 2 . f 4 2 4 f . f 4 4 4 f . 2 . 
                        . . . f 4 4 4 f . f 4 4 4 f . . . 
                        . . . f f f f f . f f f f f . . . 
                        `)
                    pause(300)
                    Yellow.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f f f . . . . . 
                        . . f f f f . f 5 5 f f . . . . 
                        . f f 5 5 f f 5 5 5 5 f . . . . 
                        . f 5 5 5 5 5 5 5 5 5 f f . . . 
                        . f 5 5 5 f f f f f f 5 f . . . 
                        . f 5 f f f 5 5 5 5 f f f f . . 
                        . f f 5 5 5 5 e e 2 5 5 5 f . . 
                        . f 5 2 2 2 2 f 2 2 e 2 5 f f . 
                        . f 5 2 e 2 f d f f f f 2 5 f . 
                        . f 5 2 e 2 2 f d d d d f 5 f . 
                        . f 5 5 2 2 2 2 f d f f 2 5 f . 
                        . f f 5 5 5 5 5 f d f 5 5 f f . 
                        . . f f f f f f f f f f f f . . 
                        `)
                    me.setPosition(Yellow.x, Yellow.y)
                    Alive_Yellow = 1
                    Kill_Count += 1
                    Last_Pressed = game.runtime()
                }
            }
            if (Alive_White == 0) {
                if (spriteutils.distanceBetween(me, White) <= Kill_Range) {
                    White.setImage(img`
                        . . . . . . f f f f f . . . . . . 
                        . . . . . f 1 1 1 1 1 f f . . . . 
                        . . . . f 1 1 1 1 1 1 1 f f . . . 
                        . . . f 1 1 1 1 f f f f f f f . . 
                        . f f f 1 1 1 f 8 6 6 9 9 9 6 f 2 
                        . f 1 f 1 1 1 f 8 8 6 6 6 6 6 f . 
                        2 f d f d 1 1 f 8 8 8 8 6 6 6 f . 
                        . f d f d 1 1 1 f f f f f f f . . 
                        . f d f d d 1 1 1 1 1 1 1 f . 2 2 
                        . f f f 2 2 d 2 1 1 1 2 1 f 2 2 . 
                        . . . f d 2 2 2 2 2 2 2 2 f . . . 
                        . 2 2 f d d 2 d d d d d d f 2 . 2 
                        . . . f d 2 d f f f d d d f . . . 
                        . 2 . f d 2 d f . f d d d f . 2 . 
                        . . . f d d d f . f d d d f . . . 
                        . . . f f f f f . f f f f f . . . 
                        `)
                    pause(300)
                    White.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f f f . . . . . 
                        . . f f f f . f 1 1 f f . . . . 
                        . f f 1 1 f f 1 1 1 1 f . . . . 
                        . f 1 1 1 1 1 1 1 1 1 f f . . . 
                        . f 1 1 1 f f f f f f 1 f . . . 
                        . f 1 f f f 1 1 1 1 f f f f . . 
                        . f f 1 1 1 1 e e 2 1 1 1 f . . 
                        . f 1 2 2 2 2 f 2 2 e 2 1 f f . 
                        . f 1 2 e 2 f d f f f f 2 1 f . 
                        . f 1 2 e 2 2 f d d d d f 1 f . 
                        . f 1 1 2 2 2 2 f d f f 2 1 f . 
                        . f f 1 1 1 1 1 f d f 1 1 f f . 
                        . . f f f f f f f f f f f f . . 
                        `)
                    me.setPosition(White.x, White.y)
                    Alive_White = 1
                    Kill_Count += 1
                    Last_Pressed = game.runtime()
                }
            }
            if (Alive_Purple == 0) {
                if (spriteutils.distanceBetween(me, Purple) <= Kill_Range) {
                    Purple.setImage(img`
                        . . . . . . f f f f f . . . . . . 
                        . . . . . f a a a a a f f . . . . 
                        . . . . f a a a a a a a f f . . . 
                        . . . f a a a a f f f f f f f . . 
                        . f f f a a a f 8 6 6 9 9 9 6 f 2 
                        . f a f a a a f 8 8 6 6 6 6 6 f . 
                        2 f c f c a a f 8 8 8 8 6 6 6 f . 
                        . f c f c a a a f f f f f f f . . 
                        . f c f c c a a a a a a a f . 2 2 
                        . f f f 2 2 c 2 a a a 2 a f 2 2 . 
                        . . . f c 2 2 2 2 2 2 2 2 f . . . 
                        . 2 2 f c c 2 c c c c c c f 2 . 2 
                        . . . f c 2 c f f f c c c f . . . 
                        . 2 . f c 2 c f . f c c c f . 2 . 
                        . . . f c c c f . f c c c f . . . 
                        . . . f f f f f . f f f f f . . . 
                        `)
                    pause(300)
                    Purple.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f f f . . . . . 
                        . . f f f f . f a a f f . . . . 
                        . f f a a f f a a a a f . . . . 
                        . f a a a a a a a a a f f . . . 
                        . f a a a f f f f f f a f . . . 
                        . f a f f f a a a a f f f f . . 
                        . f f a a a a e e 2 a a a f . . 
                        . f a 2 2 2 2 f 2 2 e 2 a f f . 
                        . f a 2 e 2 f d f f f f 2 a f . 
                        . f a 2 e 2 2 f d d d d f a f . 
                        . f a a 2 2 2 2 f d f f 2 a f . 
                        . f f a a a a a f d f a a f f . 
                        . . f f f f f f f f f f f f . . 
                        `)
                    me.setPosition(Purple.x, Purple.y)
                    Alive_Purple = 1
                    Kill_Count += 1
                    Last_Pressed = game.runtime()
                }
            }
            if (Alive_Cyan == 0) {
                if (spriteutils.distanceBetween(me, Cyan) <= Kill_Range) {
                    Cyan.setImage(img`
                        . . . . . . f f f f f . . . . . . 
                        . . . . . f 9 9 9 9 9 f f . . . . 
                        . . . . f 9 9 9 9 9 9 9 f f . . . 
                        . . . f 9 9 9 9 f f f f f f f . . 
                        . f f f 9 9 9 f 8 6 6 9 9 9 6 f 2 
                        . f 9 f 9 9 9 f 8 8 6 6 6 6 6 f . 
                        2 f 6 f 6 9 9 f 8 8 8 8 6 6 6 f . 
                        . f 6 f 6 9 9 9 f f f f f f f . . 
                        . f 6 f 6 6 9 9 9 9 9 9 9 f . 2 2 
                        . f f f 2 2 6 2 9 9 9 2 9 f 2 2 . 
                        . . . f 6 2 2 2 2 2 2 2 2 f . . . 
                        . 2 2 f 6 6 2 6 6 6 6 6 6 f 2 . 2 
                        . . . f 6 2 6 f f f 6 6 6 f . . . 
                        . 2 . f 6 2 6 f . f 6 6 6 f . 2 . 
                        . . . f 6 6 6 f . f 6 6 6 f . . . 
                        . . . f f f f f . f f f f f . . . 
                        `)
                    pause(300)
                    Cyan.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f f f . . . . . 
                        . . f f f f . f 9 9 f f . . . . 
                        . f f 9 9 f f 9 9 9 9 f . . . . 
                        . f 9 9 9 9 9 9 9 9 9 f f . . . 
                        . f 9 9 9 f f f f f f 9 f . . . 
                        . f 9 f f f 9 9 9 9 f f f f . . 
                        . f f 9 9 9 9 e e 2 9 9 9 f . . 
                        . f 9 2 2 2 2 f 2 2 e 2 9 f f . 
                        . f 9 2 e 2 f d f f f f 2 9 f . 
                        . f 9 2 e 2 2 f d d d d f 9 f . 
                        . f 9 9 2 2 2 2 f d f f 2 9 f . 
                        . f f 9 9 9 9 9 f d f 9 9 f f . 
                        . . f f f f f f f f f f f f . . 
                        `)
                    me.setPosition(Cyan.x, Cyan.y)
                    Alive_Cyan = 1
                    Kill_Count += 1
                    Last_Pressed = game.runtime()
                }
            }
            if (Alive_Black == 0) {
                if (spriteutils.distanceBetween(me, Black) <= Kill_Range) {
                    Black.setImage(img`
                        . . . . . . f f f f f . . . . . . 
                        . . . . . f f f f f f f f . . . . 
                        . . . . f f f f f f f f f f . . . 
                        . . . f f f f f f f f f f f f . . 
                        . f f f f f f f 8 6 6 9 9 9 6 f 2 
                        . f f f f f f f 8 8 6 6 6 6 6 f . 
                        2 f c f c f f f 8 8 8 8 6 6 6 f . 
                        . f c f c f f f f f f f f f f . . 
                        . f c f c c f f f f f f f f . 2 2 
                        . f f f 2 2 c 2 f f f 2 f f 2 2 . 
                        . . . f c 2 2 2 2 2 2 2 2 f . . . 
                        . 2 2 f c c 2 c c c c c c f 2 . 2 
                        . . . f c 2 c f f f c c c f . . . 
                        . 2 . f c 2 c f . f c c c f . 2 . 
                        . . . f c c c f . f c c c f . . . 
                        . . . f f f f f . f f f f f . . . 
                        `)
                    pause(300)
                    Black.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f f f . . . . . 
                        . . f f f f . f f f f f . . . . 
                        . f f f f f f f f f f f . . . . 
                        . f f f f f f f f f f f f . . . 
                        . f f f f f f f f f f f f . . . 
                        . f f f f f f f f f f f f f . . 
                        . f f f f f f e e 2 f f f f . . 
                        . f f 2 2 2 2 f 2 2 e 2 f f f . 
                        . f f 2 e 2 f d f f f f 2 f f . 
                        . f f 2 e 2 2 f d d d d f f f . 
                        . f f f 2 2 2 2 f d f f 2 f f . 
                        . f f f f f f f f d f f f f f . 
                        . . f f f f f f f f f f f f . . 
                        `)
                    me.setPosition(Black.x, Black.y)
                    scene.followPath(Black, [], 0)
                    Alive_Black = 1
                    Kill_Count += 1
                    Last_Pressed = game.runtime()
                }
            }
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (me_walk_lock == 0) {
        pet.setImage(img`
            ..............................
            ..............................
            ..............................
            ..............................
            .........................f....
            ........................f2f...
            .......................f222ff.
            ......................f6982f2f
            ......................f8882f2f
            .......................f222ff.
            .......................f2f2f..
            ........................f.f...
            `)
        animation.runImageAnimation(
        me,
        [img`
            . . . . . f f f f f . . . . . 
            . . . f f 2 2 2 2 2 f . . . . 
            . . f 2 2 2 2 2 2 2 2 f . . . 
            . f f f f f f f 2 2 2 2 f . . 
            f 6 9 9 9 6 6 8 f 2 2 2 f f f 
            f 6 6 6 6 6 8 8 f 2 2 2 f 2 f 
            f 6 6 6 8 8 8 8 f 2 2 e f e f 
            . f f f f f f f 2 2 2 e f e f 
            . . f 2 2 2 2 2 2 2 e e f e f 
            . . f 2 2 2 2 2 2 e e e f f f 
            . . f e 2 2 2 e e e e e f . . 
            f f f e e e e e e e e e f . . 
            f e e e e e f f f e e e e f . 
            f e e e e e f . f e e e e f . 
            . f e e e e f . f e e e e f . 
            . . f f f f f . f f f f f . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . 
            . . . f f 2 2 2 2 2 f . . . . 
            . . f 2 2 2 2 2 2 2 2 f . . . 
            . f f f f f f f 2 2 2 2 f . . 
            f 6 9 9 9 6 6 8 f 2 2 2 f f f 
            f 6 6 6 6 6 8 8 f 2 2 2 f 2 f 
            f 6 6 6 8 8 8 8 f 2 2 e f e f 
            . f f f f f f f 2 2 2 e f e f 
            . . f 2 2 2 2 2 2 2 e e f e f 
            . . f 2 2 2 2 2 2 e e e f f f 
            . . f e 2 2 2 e e e e e f . . 
            . . f e e e e e e e e e f . . 
            . . f e e e f f f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f f f f f . f f f f f . . 
            `,img`
            . . . . . f f f f f . . . . . 
            . . . f f 2 2 2 2 2 f . . . . 
            . . f 2 2 2 2 2 2 2 2 f . . . 
            . f f f f f f f 2 2 2 2 f . . 
            f 6 9 9 9 6 6 8 f 2 2 2 f f f 
            f 6 6 6 6 6 8 8 f 2 2 2 f 2 f 
            f 6 6 6 8 8 8 8 f 2 2 e f e f 
            . f f f f f f f 2 2 2 e f e f 
            . . f 2 2 2 2 2 2 2 e e f e f 
            . . f 2 2 2 2 2 2 e e e f f f 
            . . f e 2 2 2 e e e e e f . . 
            . . f e e e e e e e e e f f f 
            . f e e e e f f f e e e e e f 
            . f e e e e f . f e e e e e f 
            . f e e e e f . f e e e e f . 
            . . f f f f f . f f f f f . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . 
            . . . f f 2 2 2 2 2 f . . . . 
            . . f 2 2 2 2 2 2 2 2 f . . . 
            . f f f f f f f 2 2 2 2 f . . 
            f 6 9 9 9 6 6 8 f 2 2 2 f f f 
            f 6 6 6 6 6 8 8 f 2 2 2 f 2 f 
            f 6 6 6 8 8 8 8 f 2 2 e f e f 
            . f f f f f f f 2 2 2 e f e f 
            . . f 2 2 2 2 2 2 2 e e f e f 
            . . f 2 2 2 2 2 2 e e e f f f 
            . . f e 2 2 2 e e e e e f . . 
            . . f e e e e e e e e e f . . 
            . . f e e e f f f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f f f f f . f f f f f . . 
            `],
        400,
        true
        )
    }
})
controller.combos.attachCombo("a+b", function () {
    if (start_game == 0) {
    	
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (me_walk_lock == 0) {
        pet.setImage(img`
            ..............................
            ..............................
            ..............................
            ..............................
            ....f.........................
            ...f2f........................
            .ff222f.......................
            f2f2896f......................
            f2f2888f......................
            .ff222f.......................
            ..f2f2f.......................
            ...f.f........................
            `)
    }
})
info.onCountdownEnd(function () {
    start_game = 1
})
function CREWMATE () {
    TIME_WIRE = 8000
    TIME_DOWNLOAD = 8000
    TIME_DIVERT = 8000
    Start_Player_Crew = sprites.create(img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ..........................................................................8.........................
        ........................888..............................................898........................
        .......................89998.............................................898........................
        ......................89888.............................................88988.......................
        .....................898......8.88....888...8.......8..8.88.88......8..8999998..888.................
        .....................898.....898998..89998.898..8..898898998998...8898..88988..89998................
        .....................898.....89988988988898898.898.8988998898898.89998...898..8988898...............
        .....................898.....898..8.899998..898989898.898..8.898898898...898..899998................
        ......................89888..898....898888..898989898.898....898898898...898..898888................
        .......................89998.898.....899998..898.898..898....898.89998...898...899998...............
        ........................888...8.......8888....8...8....8......8...888.....8.....8888................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ..............................................ffffffffffffffff......................................
        .............................................f2222222222222222f.....................................
        ............................................f222222222222222222f....................................
        ..........................................fff222222222222222222ff...................................
        .........................................ff2222222222222222222222f..................................
        .........................................f222222222222222222222222f.................................
        .......................................fff222222222222222222222222ff................................
        ......................................ff2222222222222222222222222222f...............................
        ......................................f222222222222222222222222222222f9999..........................
        ......................9999999999999999f222222222222222222222222222222f9999999.......................
        ...................99999999999fffffffff222222222222ffffffffffffffffffff999999999....................
        ................9999999999999ff2222222f22222222222f88666666666666666666f99999999999.................
        .............9999999999999999f22222222f2222222222f8886666699999999999966f9999999999999..............
        ..........9999999999999999999f22222222f222222222f888866669999999999999966f999999999999999...........
        .......9999999999999999999999f22222222f222222222f888886666999999999999666f999999999999999999........
        .....999999999999999999999999f22222222f222222222f888888666666666666666666f99999999999999999999......
        ..999999999999999999999999999f22222222f222222222f888888866666666666666666f99999999999999999999999...
        ..999999999999999999999999999f22222222f222222222f888888886666666666666666f99999999999999999999999...
        ..999999999999999999996666666f22222222f2222222222f8888888888888888888888f666699999999999999999999...
        .9999999999999999996666666666f22222222f22222222222f88888888888888888888f66666666999999999999999999..
        .9999999999999996666666666666f22222222f222222222222ffffffffffffffffffff666666666666999999999999999..
        99999999999996666666666666666f22222222f222222222222222222222222222222f6666666666666666999999999999..
        99999999996666666666666666888f22222222f222222222222222222222222222222f88866666666666666669999999999.
        99999996666666666666666688888f22222222f222222222222222222222222222222f88888666666666666666669999999.
        99966666666666666666666888888f22222222f222222222222222222222222222222f88888866666666666666666666999.
        99966666666666666688888888888f22222222f222222222222222222222222222222f88888888888666666666666666999.
        99966666666666688888888888888f22222222f222222222222222222222222222222f88888888888888666666666666999.
        99966666666666666688888888888f22222222f222222222222222222222222222222f88888888888666666666666666999.
        99966666666666666666666888888f22222222f222222222222222222222222222222f88888866666666666666666666999.
        99999996666666666666666688888f22222222f222222222222222222222222222222f88888666666666666666669999999.
        99999999996666666666666666888f22222222f222222222222222222222222222222f88866666666666666669999999999.
        99999999999996666666666666666ffffffffff222222222222222222222222222222f66666666666666669999999999999.
        .9999999999999996666666666666666666666f222222222222222222222222222222f6666666666666999999999999999..
        .9999999999999999996666666666666666666f222222222222222222222222222222f6666666666999999999999999999..
        ..999999999999999999996666666666666666f222222222222222222222222222222f666666699999999999999999999...
        ..999999999999999999999999999999999999f222222222222222222222222222222f999999999999999999999999999...
        ..999999999999999999999999999999999999f222222222222222222222222222222f999999999999999999999999999...
        ....9999999999999999999999999999999999f222222222222222222222222222222f999999999999999999999999......
        .......9999999999999999999999999999999f222222222222222222222222222222f9999999999999999999999........
        ..........9999999999999999999999999999f22222222222ffffffff22222222222f9999999999999999999...........
        .............9999999999999999999999999f2222222222f........f2222222222f9999999999999999..............
        ................9999999999999999999999f2222222222f........f2222222222f9999999999999.................
        ..................99999999999999999999f2222222222f........f2222222222f9999999999....................
        ....................999999999999999999f2222222222f........f2222222222f9999999.......................
        ......................................f2222222222f........f2222222222f..............................
        ......................................f2222222222f........f2222222222f..............................
        ......................................f2222222222f........f2222222222f..............................
        ......................................f2222222222f........f2222222222f..............................
        ......................................ff22222222ff........ff22222222ff..............................
        .......................................ffffffffff..........ffffffffff...............................
        `, SpriteKind.Player_Start)
    pause(100)
    Start_Player_Crew.setPosition(80, 79)
    me.setPosition(80, 79)
    pause(1000)
    Start_Player_Crew.destroy()
    ROLE = 0
    me.setFlag(SpriteFlag.Invisible, false)
    pet.setFlag(SpriteFlag.Invisible, false)
}
function IMPOSTER () {
    Last_Pressed = 0
    Time_Between_Kill = 5000
    Start_Player = sprites.create(img`
        ....................................................................................................
        .........................eee........................................................................
        ........................e222e.......................................................................
        .........................e2e...................................e....................................
        .........................e2e..................................e2e...................................
        .........................e2e..................................e2e...................................
        .........................e2e..................................e2e...................................
        .........................e2e...e.e.e............eee.....ee....e2e....eee............................
        .........................e2e..e2e2e2e...e.ee...e222e...e22e..e222e..e222e...e.e.....................
        .........................e2e..e22e2e2e.e2e22e.e2eee2e.e2ee....e2e..e2eee2e.e2e2e....................
        .........................e2e..e2ee2e2e.e22ee2ee2e.e2e..e22e...e2e..e2e.e2e.e22e2e...................
        .........................e2e..e2eeee2e.e22ee2ee2eee2e...ee2e..e2e..e2eee2e.e2e.e....................
        ........................e222e.e2e..e2e.e2e22e..e222e...e22e...e2e...e222e..e2e......................
        .........................eee...e....e..e2eee....eee.....ee.....e.....eee....e.......................
        .......................................e2e..........................................................
        .......................................e2e..........................................................
        .......................................e2e..........................................................
        ........................................e...........................................................
        ....................................................................................................
        ..............................................ffffffffffffffff......................................
        .............................................f2222222222222222f.....................................
        ............................................f222222222222222222f....................................
        ..........................................fff222222222222222222ff...................................
        .........................................ff2222222222222222222222f..................................
        .........................................f222222222222222222222222f.................................
        .......................................fff222222222222222222222222ff................................
        ......................................ff2222222222222222222222222222f...............................
        ......................................f222222222222222222222222222222f2222..........................
        ......................2222222222222222f222222222222222222222222222222f2222222.......................
        ...................22222222222fffffffff222222222222ffffffffffffffffffff222222222....................
        ................2222222222222ff2222222f22222222222f88666666666666666666f22222222222.................
        .............2222222222222222f22222222f2222222222f8886666699999999999966f2222222222222..............
        ..........2222222222222222222f22222222f222222222f888866669999999999999966f222222222222222...........
        .......2222222222222222222222f22222222f222222222f888886666999999999999666f222222222222222222........
        .....222222222222222222222222f22222222f222222222f888888666666666666666666f22222222222222222222......
        ..222222222222222222222222222f22222222f222222222f888888866666666666666666f22222222222222222222222...
        ..222222222222222222222222222f22222222f222222222f888888886666666666666666f22222222222222222222222...
        ..222222222222222222224444444f22222222f2222222222f8888888888888888888888f444422222222222222222222...
        .2222222222222222224444444444f22222222f22222222222f88888888888888888888f44444444222222222222222222..
        .2222222222222224444444444444f22222222f222222222222ffffffffffffffffffff444444444444222222222222222..
        22222222222224444444444444444f22222222f222222222222222222222222222222f4444444444444444222222222222..
        22222222224444444444444444eeef22222222f222222222222222222222222222222feee44444444444444442222222222.
        222222244444444444444444eeeeef22222222f222222222222222222222222222222feeeee444444444444444442222222.
        22244444444444444444444eeeeeef22222222f222222222222222222222222222222feeeeee44444444444444444444222.
        222444444444444444eeeeeeeeeeef22222222f222222222222222222222222222222feeeeeeeeeee444444444444444222.
        222444444444444eeeeeeeeeeeeeef22222222f222222222222222222222222222222feeeeeeeeeeeeee444444444444222.
        222444444444444444eeeeeeeeeeef22222222f222222222222222222222222222222feeeeeeeeeee444444444444444222.
        22244444444444444444444eeeeeef22222222f222222222222222222222222222222feeeeee44444444444444444444222.
        222222244444444444444444eeeeef22222222f222222222222222222222222222222feeeee444444444444444442222222.
        22222222224444444444444444eeef22222222f222222222222222222222222222222feee44444444444444442222222222.
        22222222222224444444444444444ffffffffff222222222222222222222222222222f44444444444444442222222222222.
        .2222222222222224444444444444444444444f222222222222222222222222222222f4444444444444222222222222222..
        .2222222222222222224444444444444444444f222222222222222222222222222222f4444444444222222222222222222..
        ..222222222222222222224444444444444444f222222222222222222222222222222f444444422222222222222222222...
        ..222222222222222222222222222222222222f222222222222222222222222222222f222222222222222222222222222...
        ..222222222222222222222222222222222222f222222222222222222222222222222f222222222222222222222222222...
        ....2222222222222222222222222222222222f222222222222222222222222222222f222222222222222222222222......
        .......2222222222222222222222222222222f222222222222222222222222222222f2222222222222222222222........
        ..........2222222222222222222222222222f22222222222ffffffff22222222222f2222222222222222222...........
        .............2222222222222222222222222f2222222222f........f2222222222f2222222222222222..............
        ................2222222222222222222222f2222222222f........f2222222222f2222222222222.................
        ..................22222222222222222222f2222222222f........f2222222222f2222222222....................
        ....................222222222222222222f2222222222f........f2222222222f2222222.......................
        ......................................f2222222222f........f2222222222f..............................
        ......................................f2222222222f........f2222222222f..............................
        ......................................f2222222222f........f2222222222f..............................
        ......................................f2222222222f........f2222222222f..............................
        ......................................ff22222222ff........ff22222222ff..............................
        .......................................ffffffffff..........ffffffffff...............................
        ....................................................................................................
        `, SpriteKind.Player_Start_Imposter)
    pause(100)
    Start_Player.setPosition(80, 79)
    me.setPosition(80, 79)
    pause(1000)
    game.setDialogTextColor(2)
    Start_Player.destroy()
    ROLE = 1
    game.setDialogTextColor(15)
    me.setFlag(SpriteFlag.Invisible, false)
    pet.setFlag(SpriteFlag.Invisible, false)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (me_walk_lock == 0) {
        animation.runImageAnimation(
        me,
        [img`
            . . . . . f f f f f . . . . . 
            . . . . f 2 2 2 2 2 f f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 f f f f f f f . 
            f f f 2 2 2 f 8 6 6 9 9 9 6 f 
            f 2 f 2 2 2 f 8 8 6 6 6 6 6 f 
            f e f e 2 2 f 8 8 8 8 6 6 6 f 
            f e f e 2 2 2 f f f f f f f . 
            f e f e e 2 2 2 2 2 2 2 f . . 
            f f f e e e 2 2 2 2 2 2 f . . 
            . . f e e e e e 2 2 2 e f . . 
            . . f e e e e e e e e e f f f 
            . f e e e e f f f e e e e e f 
            . f e e e e f . f e e e e e f 
            . f e e e e f . f e e e e f . 
            . . f f f f f . f f f f f . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . 
            . . . . f 2 2 2 2 2 f f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 f f f f f f f . 
            f f f 2 2 2 f 8 6 6 9 9 9 6 f 
            f 2 f 2 2 2 f 8 8 6 6 6 6 6 f 
            f e f e 2 2 f 8 8 8 8 6 6 6 f 
            f e f e 2 2 2 f f f f f f f . 
            f e f e e 2 2 2 2 2 2 2 f . . 
            f f f e e e 2 2 2 2 2 2 f . . 
            . . f e e e e e 2 2 2 e f . . 
            . . f e e e e e e e e e f . . 
            . . f e e e f f f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f f f f f . f f f f f . . 
            `,img`
            . . . . . f f f f f . . . . . 
            . . . . f 2 2 2 2 2 f f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 f f f f f f f . 
            f f f 2 2 2 f 8 6 6 9 9 9 6 f 
            f 2 f 2 2 2 f 8 8 6 6 6 6 6 f 
            f e f e 2 2 f 8 8 8 8 6 6 6 f 
            f e f e 2 2 2 f f f f f f f . 
            f e f e e 2 2 2 2 2 2 2 f . . 
            f f f e e e 2 2 2 2 2 2 f . . 
            . . f e e e e e 2 2 2 e f . . 
            f f f e e e e e e e e e f . . 
            f e e e e e f f f e e e e f . 
            f e e e e e f . f e e e e f . 
            . f e e e e f . f e e e e f . 
            . . f f f f f . f f f f f . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . 
            . . . . f 2 2 2 2 2 f f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 f f f f f f f . 
            f f f 2 2 2 f 8 6 6 9 9 9 6 f 
            f 2 f 2 2 2 f 8 8 6 6 6 6 6 f 
            f e f e 2 2 f 8 8 8 8 6 6 6 f 
            f e f e 2 2 2 f f f f f f f . 
            f e f e e 2 2 2 2 2 2 2 f . . 
            f f f e e e 2 2 2 2 2 2 f . . 
            . . f e e e e e 2 2 2 e f . . 
            . . f e e e e e e e e e f . . 
            . . f e e e f f f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f f f f f . f f f f f . . 
            `],
        400,
        true
        )
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (me_walk_lock == 0) {
        animation.runImageAnimation(
        me,
        [img`
            . . . . . f f f f f . . . . . 
            . . . . f 2 2 2 2 2 f f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 f f f f f f f . 
            f f f 2 2 2 f 8 6 6 9 9 9 6 f 
            f 2 f 2 2 2 f 8 8 6 6 6 6 6 f 
            f e f e 2 2 f 8 8 8 8 6 6 6 f 
            f e f e 2 2 2 f f f f f f f . 
            f e f e e 2 2 2 2 2 2 2 f . . 
            f f f e e e 2 2 2 2 2 2 f . . 
            . . f e e e e e 2 2 2 e f . . 
            . . f e e e e e e e e e f f f 
            . f e e e e f f f e e e e e f 
            . f e e e e f . f e e e e e f 
            . f e e e e f . f e e e e f . 
            . . f f f f f . f f f f f . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . 
            . . . . f 2 2 2 2 2 f f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 f f f f f f f . 
            f f f 2 2 2 f 8 6 6 9 9 9 6 f 
            f 2 f 2 2 2 f 8 8 6 6 6 6 6 f 
            f e f e 2 2 f 8 8 8 8 6 6 6 f 
            f e f e 2 2 2 f f f f f f f . 
            f e f e e 2 2 2 2 2 2 2 f . . 
            f f f e e e 2 2 2 2 2 2 f . . 
            . . f e e e e e 2 2 2 e f . . 
            . . f e e e e e e e e e f . . 
            . . f e e e f f f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f f f f f . f f f f f . . 
            `,img`
            . . . . . f f f f f . . . . . 
            . . . . f 2 2 2 2 2 f f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 f f f f f f f . 
            f f f 2 2 2 f 8 6 6 9 9 9 6 f 
            f 2 f 2 2 2 f 8 8 6 6 6 6 6 f 
            f e f e 2 2 f 8 8 8 8 6 6 6 f 
            f e f e 2 2 2 f f f f f f f . 
            f e f e e 2 2 2 2 2 2 2 f . . 
            f f f e e e 2 2 2 2 2 2 f . . 
            . . f e e e e e 2 2 2 e f . . 
            f f f e e e e e e e e e f . . 
            f e e e e e f f f e e e e f . 
            f e e e e e f . f e e e e f . 
            . f e e e e f . f e e e e f . 
            . . f f f f f . f f f f f . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . 
            . . . . f 2 2 2 2 2 f f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 f f f f f f f . 
            f f f 2 2 2 f 8 6 6 9 9 9 6 f 
            f 2 f 2 2 2 f 8 8 6 6 6 6 6 f 
            f e f e 2 2 f 8 8 8 8 6 6 6 f 
            f e f e 2 2 2 f f f f f f f . 
            f e f e e 2 2 2 2 2 2 2 f . . 
            f f f e e e 2 2 2 2 2 2 f . . 
            . . f e e e e e 2 2 2 e f . . 
            . . f e e e e e e e e e f . . 
            . . f e e e f f f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f f f f f . f f f f f . . 
            `],
        400,
        true
        )
    }
})
function AUTO_TASK () {
    while (true) {
        statusbar.value += 0.01
    }
}
statusbars.onStatusReached(StatusBarKind.Tasks, statusbars.StatusComparison.GTE, statusbars.ComparisonType.Percentage, 100, function (status) {
    if (ROLE == 1) {
        game.over(false)
    }
    if (ROLE == 0) {
        game.over(true)
    }
})
function KILL () {
    KILL_BUTTON_SEE = 1
    Kill_Button = sprites.create(img`
        ......111111111......
        ....11ccccccccc11....
        .f.1cfdfddfddddfc1...
        .f1cfddfddfddddfdc1..
        .fcdfddfddfddddfddc1.
        .fcfdeefddfddeefddc1.
        1ffddeefedfdeeefdddc1
        1ffddeef2dfd2eefdddc1
        1ffdddefedfdeeefdddc1
        .fcfdddfddfddedfddc1.
        .fcdfddfddfddddfddc1.
        .f2cfddfddfddddfdc21.
        .f22cfdfddffffdffff1.
        .12222ccdddddcc22221.
        ..12222cdcdcdc222221.
        ..12222cdcdcdc22221..
        ..122122ccccc2122211.
        .1.121222111221221121
        121.1.1221.121121.121
        .1.....11...1..1...1.
        `, SpriteKind.button)
    Kill_Button.setFlag(SpriteFlag.RelativeToCamera, true)
    Kill_Button.setPosition(149, 110)
    Kill_Button.setFlag(SpriteFlag.AutoDestroy, true)
}
let vennt: Sprite = null
let Blue_Path: tiles.Location[] = []
let Black_Path: tiles.Location[] = []
let Shhhhhh: Sprite = null
let Start_Game_Lock = 0
let Path_Green: tiles.Location[] = []
let GHOST: Sprite = null
let lock = 0
let mySprite: Sprite = null
let Me_Moving = false
let Kill_Button: Sprite = null
let KILL_BUTTON_SEE = 0
let Start_Player: Sprite = null
let Start_Player_Crew: Sprite = null
let Kill_Count = 0
let Time_Between_Kill = 0
let Last_Pressed = 0
let TIME_DIVERT = 0
let LAST_DIVERT = 0
let TIME_DOWNLOAD = 0
let LAST_DOWNLOAD = 0
let TIME_WIRE = 0
let LAST_WIRE = 0
let Task_Elec = 0
let Garbage_2 = 0
let Garbage_1 = 0
let Task_Orange_p = 0
let Task_Orange_d = 0
let Task_Pink_p = 0
let Task_Pink_d = 0
let Task_Blue_p = 0
let statusbar: StatusBarSprite = null
let Task_Blue_d = 0
let start_game = 0
let Purple: Sprite = null
let Alive_Purple = 0
let Cyan: Sprite = null
let Alive_Cyan = 0
let mySprite2: Sprite = null
let USE_SET = false
let me_walk_lock = 0
let pet: Sprite = null
let me: Sprite = null
let White: Sprite = null
let Alive_White = 0
let Black: Sprite = null
let Alive_Black = 0
let Green: Sprite = null
let Alive_Green = 0
let Yellow: Sprite = null
let Alive_Yellow = 0
let Orange: Sprite = null
let Alive_Orange = 0
let Blue: Sprite = null
let Alive_Blue = 0
let Start_Button: Sprite = null
let ROLE = 0
let Kill_Range = 0
Kill_Range = 35
ROLE = 3
tiles.setTilemap(tilemap`Level_0`)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff1f1ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff1ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
    ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff1fffffffffffffffffffffffffffffffff1fffffffffffffff
    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff1ffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff1fffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff1ffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff1ffffff
    ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff1ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff
    ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff
    ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff1fffffffffffffffffffffffffffffffffff
    ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff1fffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff1fffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff1ffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff1fffff
    ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff1fffffffffffffffffffffffffff
    ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff1fffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff1fffffffffffff1ffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff
    ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
    ffffff1ffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
Start_Button = sprites.create(img`
    ..111.........................
    ..1cc1111.....................
    ..1fffcfffff1.f...ffff..fffff.
    ..fc111ddfcccf1f1.f...f...f...
    ..fc1111dfd22fcfc1f1..f...f...
    ..fc11111fdddf2f2cfc11f1..f...
    ..1ff1111f1ddfdfd2ffffcc11f1..
    ..1c1f111f11fdddfdff2222ccfc11
    ..1c1f111f11fffffdfdf222ccfc11
    ..1c1f111f1dfdddf2f2fcccc1f1..
    ..1c1f111fddf222fcfc1f11..f...
    ..fff111dfd2fcccf1f1..f...f...
    ..1c111ddcccc1111.............
    ..1c1cccc1111.................
    ..1cc1111.....................
    ..111.........................
    `, SpriteKind.button)
Start_Button.setFlag(SpriteFlag.RelativeToCamera, true)
Start_Button.setPosition(79, 105)
if (Alive_Blue == 0) {
    Blue = sprites.create(img`
        . . . . . f f f f f . . . . . 
        . . . . f 8 8 8 8 8 f f . . . 
        . . . f 8 8 8 8 8 8 8 f f . . 
        . . f 8 8 8 8 f f f f f f f . 
        f f f 8 8 8 f 8 6 6 9 9 9 6 f 
        f 8 f 8 8 8 f 8 8 6 6 6 6 6 f 
        f c f c 8 8 f 8 8 8 8 6 6 6 f 
        f c f c 8 8 8 f f f f f f f . 
        f c f c c 8 8 8 8 8 8 8 f . . 
        f f f c c c 8 8 8 8 8 8 f . . 
        . . f c c c c c 8 8 8 c f . . 
        . . f c c c c c c c c c f . . 
        . . f c c c f f f c c c f . . 
        . . f c c c f . f c c c f . . 
        . . f c c c f . f c c c f . . 
        . . f f f f f . f f f f f . . 
        `, SpriteKind.Enemy)
}
if (Alive_Orange == 0) {
    Orange = sprites.create(img`
        . . . . . f f f f f . . . . . 
        . . . . f 4 4 4 4 4 f f . . . 
        . . . f 4 4 4 4 4 4 4 f f . . 
        . . f 4 4 4 4 f f f f f f f . 
        f f f 4 4 4 f 8 6 6 9 9 9 6 f 
        f 4 f 4 4 4 f 8 8 6 6 6 6 6 f 
        f e f e 4 4 f 8 8 8 8 6 6 6 f 
        f e f e 4 4 4 f f f f f f f . 
        f e f e e 4 4 4 4 4 4 4 f . . 
        f f f e e e 4 4 4 4 4 4 f . . 
        . . f e e e e e 4 4 4 e f . . 
        . . f e e e e e e e e e f . . 
        . . f e e e f f f e e e f . . 
        . . f e e e f . f e e e f . . 
        . . f e e e f . f e e e f . . 
        . . f f f f f . f f f f f . . 
        `, SpriteKind.Enemy)
}
if (Alive_Yellow == 0) {
    Yellow = sprites.create(img`
        . . . . . f f f f f . . . . . 
        . . . . f 5 5 5 5 5 f f . . . 
        . . . f 5 5 5 5 5 5 5 f f . . 
        . . f 5 5 5 5 f f f f f f f . 
        f f f 5 5 5 f 8 6 6 9 9 9 6 f 
        f 5 f 5 5 5 f 8 8 6 6 6 6 6 f 
        f 4 f 4 5 5 f 8 8 8 8 6 6 6 f 
        f 4 f 4 5 5 5 f f f f f f f . 
        f 4 f 4 4 5 5 5 5 5 5 5 f . . 
        f f f 4 4 4 5 5 5 5 5 5 f . . 
        . . f 4 4 4 4 4 5 5 5 4 f . . 
        . . f 4 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f f 4 4 4 f . . 
        . . f 4 4 4 f . f 4 4 4 f . . 
        . . f 4 4 4 f . f 4 4 4 f . . 
        . . f f f f f . f f f f f . . 
        `, SpriteKind.Enemy)
}
if (Alive_Green == 0) {
    Green = sprites.create(img`
        . . . . . f f f f f . . . . . 
        . . . . f 7 7 7 7 7 f f . . . 
        . . . f 7 7 7 7 7 7 7 f f . . 
        . . f 7 7 7 7 f f f f f f f . 
        f f f 7 7 7 f 8 6 6 9 9 9 6 f 
        f 7 f 7 7 7 f 8 8 6 6 6 6 6 f 
        f 6 f 6 7 7 f 8 8 8 8 6 6 6 f 
        f 6 f 6 7 7 7 f f f f f f f . 
        f 6 f 6 6 7 7 7 7 7 7 7 f . . 
        f f f 6 6 6 7 7 7 7 7 7 f . . 
        . . f 6 6 6 6 6 7 7 7 6 f . . 
        . . f 6 6 6 6 6 6 6 6 6 f . . 
        . . f 6 6 6 f f f 6 6 6 f . . 
        . . f 6 6 6 f . f 6 6 6 f . . 
        . . f 6 6 6 f . f 6 6 6 f . . 
        . . f f f f f . f f f f f . . 
        `, SpriteKind.Enemy)
}
if (Alive_Black == 0) {
    Black = sprites.create(img`
        . . . . . f f f f f . . . . . 
        . . . . f f f f f f f f . . . 
        . . . f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . 
        f f f f f f f 8 6 6 9 9 9 6 f 
        f f f f f f f 8 8 6 6 6 6 6 f 
        f c f c f f f 8 8 8 8 6 6 6 f 
        f c f c f f f f f f f f f f . 
        f c f c c f f f f f f f f . . 
        f f f c c c f f f f f f f . . 
        . . f c c c c c f f f c f . . 
        . . f c c c c c c c c c f . . 
        . . f c c c f f f c c c f . . 
        . . f c c c f . f c c c f . . 
        . . f c c c f . f c c c f . . 
        . . f f f f f . f f f f f . . 
        `, SpriteKind.Enemy)
}
if (Alive_White == 0) {
    White = sprites.create(img`
        . . . . . f f f f f . . . . . 
        . . . . f 1 1 1 1 1 f f . . . 
        . . . f 1 1 1 1 1 1 1 f f . . 
        . . f 1 1 1 1 f f f f f f f . 
        f f f 1 1 1 f 8 6 6 9 9 9 6 f 
        f 1 f 1 1 1 f 8 8 6 6 6 6 6 f 
        f d f d 1 1 f 8 8 8 8 6 6 6 f 
        f d f d 1 1 1 f f f f f f f . 
        f d f d d 1 1 1 1 1 1 1 f . . 
        f f f d d d 1 1 1 1 1 1 f . . 
        . . f d d d d d 1 1 1 d f . . 
        . . f d d d d d d d d d f . . 
        . . f d d d f f f d d d f . . 
        . . f d d d f . f d d d f . . 
        . . f d d d f . f d d d f . . 
        . . f f f f f . f f f f f . . 
        `, SpriteKind.Enemy)
}
me = sprites.create(img`
    . . . . . f f f f f . . . . . 
    . . . . f 2 2 2 2 2 f f . . . 
    . . . f 2 2 2 2 2 2 2 f f . . 
    . . f 2 2 2 2 f f f f f f f . 
    f f f 2 2 2 f 8 6 6 9 9 9 6 f 
    f 2 f 2 2 2 f 8 8 6 6 6 6 6 f 
    f e f e 2 2 f 8 8 8 8 6 6 6 f 
    f e f e 2 2 2 f f f f f f f . 
    f e f e e 2 2 2 2 2 2 2 f . . 
    f f f e e e 2 2 2 2 2 2 f . . 
    . . f e e e e e 2 2 2 e f . . 
    . . f e e e e e e e e e f . . 
    . . f e e e f f f e e e f . . 
    . . f e e e f . f e e e f . . 
    . . f e e e f . f e e e f . . 
    . . f f f f f . f f f f f . . 
    `, SpriteKind.Player)
let name_me = statusbars.create(0, 0, StatusBarKind.EnemyHealth)
name_me.setLabel("Red", 1)
name_me.setStatusBarFlag(StatusBarFlag.LabelAtEnd, true)
name_me.attachToSprite(me, 0, 0)
let statusbar_set = 1
tiles.placeOnRandomTile(me, assets.tile`tile57`)
tiles.placeOnRandomTile(Blue, assets.tile`tile57`)
tiles.placeOnRandomTile(Orange, assets.tile`tile57`)
tiles.placeOnRandomTile(Yellow, assets.tile`tile58`)
tiles.placeOnRandomTile(White, assets.tile`tile58`)
tiles.placeOnRandomTile(Black, assets.tile`tile58`)
pet = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f 2 f . . . . . . . 
    . . . . f f 2 2 2 f . . . . . . 
    . . . f 2 f 2 8 9 6 f . . . . . 
    . . . f 2 f 2 8 8 8 f . . . . . 
    . . . . f f 2 2 2 f . . . . . . 
    . . . . . f 2 f 2 f . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(pet, assets.tile`tile59`)
pet.follow(me, 70)
game.onUpdate(function () {
    Me_Moving = controller.left.isPressed() || (controller.right.isPressed() || (controller.down.isPressed() || controller.up.isPressed()))
    if (!(Me_Moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, me)
        me.setImage(img`
            . . . . . f f f f f . . . . . 
            . . . . f 2 2 2 2 2 f f . . . 
            . . . f 2 2 2 2 2 2 2 f f . . 
            . . f 2 2 2 2 f f f f f f f . 
            f f f 2 2 2 f 8 6 6 9 9 9 6 f 
            f 2 f 2 2 2 f 8 8 6 6 6 6 6 f 
            f e f e 2 2 f 8 8 8 8 6 6 6 f 
            f e f e 2 2 2 f f f f f f f . 
            f e f e e 2 2 2 2 2 2 2 f . . 
            f f f e e e 2 2 2 2 2 2 f . . 
            . . f e e e e e 2 2 2 e f . . 
            . . f e e e e e e e e e f . . 
            . . f e e e f f f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f e e e f . f e e e f . . 
            . . f f f f f . f f f f f . . 
            `)
    }
})
game.onUpdate(function () {
    if (start_game == 1) {
        if (ROLE == 0) {
            if (me.tileKindAt(TileDirection.Center, sprites.dungeon.buttonTeal)) {
                if (Task_Blue_d == 0) {
                    USE(1, 1)
                }
            } else if (USE_SET) {
                mySprite2.destroy()
                USE_SET = false
            }
            if (me.tileKindAt(TileDirection.Center, sprites.dungeon.buttonTealDepressed)) {
                if (Task_Blue_p == 0) {
                    USE(1, 1)
                }
            }
            if (me.tileKindAt(TileDirection.Center, sprites.dungeon.buttonPink)) {
                if (Task_Pink_d == 0) {
                    USE(1, 1)
                }
            }
            if (me.tileKindAt(TileDirection.Center, sprites.dungeon.buttonPinkDepressed)) {
                if (Task_Pink_p == 0) {
                    USE(1, 1)
                }
            }
            if (me.tileKindAt(TileDirection.Center, sprites.dungeon.buttonOrange)) {
                if (Task_Orange_d == 0) {
                    USE(1, 1)
                }
            }
            if (me.tileKindAt(TileDirection.Center, sprites.dungeon.buttonOrangeDepressed)) {
                if (Task_Orange_p == 0) {
                    USE(1, 1)
                }
            }
            if (me.tileKindAt(TileDirection.Center, assets.tile`tile44`)) {
                if (Task_Elec == 0) {
                    USE(1, 1)
                }
            }
            if (me.tileKindAt(TileDirection.Left, assets.tile`tile136`)) {
                if (Garbage_1 == 0) {
                    USE(1, 1)
                }
            }
            if (me.tileKindAt(TileDirection.Center, assets.tile`tile5`)) {
                if (Garbage_2 == 0) {
                    USE(1, 1)
                }
            }
            if (me.tileKindAt(TileDirection.Top, assets.tile`tile85`)) {
                if (game.runtime() - LAST_WIRE >= TIME_WIRE) {
                    USE(1, 1)
                }
            }
            if (me.tileKindAt(TileDirection.Top, assets.tile`tile84`)) {
                if (game.runtime() - LAST_DOWNLOAD >= TIME_DOWNLOAD) {
                    USE(1, 1)
                }
            }
            if (me.tileKindAt(TileDirection.Top, assets.tile`tile112`)) {
                if (game.runtime() - LAST_DIVERT >= TIME_DIVERT) {
                    USE(1, 1)
                }
            }
        }
    }
})
forever(function () {
    Report(mySprite, mySprite)
    scene.cameraFollowSprite(me)
    if (start_game == 1) {
        if (ROLE == 1) {
            if (Kill_Count >= 8) {
                pause(1000)
                game.over(true)
            }
        }
        if (ROLE == 0) {
            if (Kill_Count >= 8) {
                pause(1000)
                game.over(false)
            }
            if (Green.overlapsWith(me)) {
                if (lock == 0) {
                    GHOST = sprites.create(img`
                        . . . . . . . f f f . . . . . . 
                        . . . . . . f 2 2 2 f f . . . . 
                        . . . . . f 2 2 2 2 2 f . . . . 
                        . . . . f 2 2 2 f f f f f . . . 
                        . . . f 2 2 2 f 8 6 9 9 9 f . . 
                        . . . f 2 2 f 8 8 6 6 6 9 6 f . 
                        . . . f 2 2 f 8 8 8 6 6 6 6 f . 
                        . . . f 2 2 2 f 8 8 8 8 8 f . . 
                        . . . f 2 2 2 2 f f f f f . . . 
                        . . . f 2 2 2 2 2 2 2 f . . . . 
                        . . . f 2 2 2 2 2 2 2 f . . . . 
                        . . f f 2 2 2 2 2 2 f . . . . . 
                        . . f 2 2 2 2 2 2 2 f . . . . . 
                        . f f 2 2 2 2 2 2 f . . . . . . 
                        . f 2 2 2 2 2 2 f . . . . . . . 
                        . f f f f f f f . . . . . . . . 
                        `, SpriteKind.Player)
                    GHOST.setPosition(me.x, me.y)
                    GHOST.setFlag(SpriteFlag.Ghost, true)
                    scene.cameraFollowSprite(GHOST)
                    lock = 1
                }
                me.setImage(img`
                    . . . . . . f f f f f . . . . . . 
                    . . . . . f 2 2 2 2 2 f f . . . . 
                    . . . . f 2 2 2 2 2 2 2 f f . . . 
                    . . . f 2 2 2 2 f f f f f f f . . 
                    . f f f 2 2 2 f 8 6 6 9 9 9 6 f 4 
                    . f 2 f 2 2 2 f 8 8 6 6 6 6 6 f . 
                    4 f e f e 2 2 f 8 8 8 8 6 6 6 f . 
                    . f e f e 2 2 2 f f f f f f f . . 
                    . f e f e e 2 2 2 2 2 2 2 f . 4 4 
                    . f f f 4 4 e 4 2 2 2 4 2 f 4 4 . 
                    . . . f e 4 4 4 4 4 4 4 4 f . . . 
                    . 4 4 f e e 4 e e e e e e f 4 . 4 
                    . . . f e 4 e f f f e e e f . . . 
                    . 4 . f e 4 e f . f e e e f . 4 . 
                    . . . f e e e f . f e e e f . . . 
                    . . . f f f f f . f f f f f . . . 
                    `)
                me.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f f f . . . . . 
                    . . f f f f . f 2 2 f f . . . . 
                    . f f 2 2 f f 2 2 2 2 f . . . . 
                    . f 2 2 2 2 2 2 2 2 2 f f . . . 
                    . f 2 2 2 f f f f f f 2 f . . . 
                    . f 2 f f f 2 2 2 2 f f f f . . 
                    . f f 2 2 2 2 e e 4 2 2 2 f . . 
                    . f 2 4 4 4 4 f 4 4 e 4 2 f f . 
                    . f 2 4 e 4 f d f f f f 4 2 f . 
                    . f 2 4 e 4 4 f d d d d f 2 f . 
                    . f 2 2 4 4 4 4 f d f f 4 2 f . 
                    . f f 2 2 2 2 2 f d f 2 2 f f . 
                    . . f f f f f f f f f f f f . . 
                    `)
                me_walk_lock = 1
                scene.cameraFollowSprite(GHOST)
                controller.moveSprite(GHOST, 120, 120)
                name_me.setLabel("")
                scene.followPath(Green, Path_Green, 15)
            }
        }
    }
})
forever(function () {
    if (start_game == 1) {
        if (Start_Game_Lock == 0) {
            controller.moveSprite(me, 0, 0)
            pause(100)
            name_me.setLabel("")
            tiles.destroySpritesOfKind(SpriteKind.Enemy)
            game.setDialogTextColor(1)
            scene.setBackgroundImage(img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `)
            tiles.setTilemap(tilemap`Level_1`)
            Shhhhhh = sprites.create(img`
                ....................................................................................................
                ....................................................................................................
                ....................................................................................................
                ....................................................................................................
                ..........................................4555555554444444555.......................................
                ......................................444445555555444444445555555...................................
                ...................................444444445555555444444445555555444................................
                .................................4444444444555555544444444555555554444..............................
                ..............................5554444444444555555544444444555555544444444...........................
                .............................555544444444445555555444444445555555444444444..........................
                ...........................5555554444444444555555544444444555555444444444444........................
                .........................55555555444444444455555554444444555555444444444444555......................
                ........................4555555555444444444555555544444445555554444444444455555.....................
                .......................444555555554444444445555555444444455555444444444445555555....................
                .....................4444445555555544444444555555544444445555544444444445555555555..................
                ....................444444445555555444444455555555444444455554444444444555555555555.................
                ...................44444444455555555444444555555554444445555444444444455555555555555................
                ..................4444444444455555555444445555555544444455554444444445555555555555555...............
                .................444444444444555555554444455555555444444555444444444555555555555555555..............
                ................44444444444444555555554444555555554444445554444444455555555555555555554.............
                ...............4444444444444444555555544445555555544444555444444445555555555555555555444............
                ...............4444444444444444555555554445555555544444554444444455555555555555555554444............
                ..............555444444444444444555555544455555555444445544444445555555555555555554444444...........
                .............55555544444444444445555555545555555554444454444444555555555555555555444444444..........
                ............555555554444444444444555ffffffffffffffffffffffffff55555555555555555544444444444.........
                ............555555555544444444444555f222222222222222222222222f55555555555555554444444444444.........
                ...........5555555555554444444444455f222222222222222222222222f555555555555555444444444444444........
                ...........5555555555555544444444ffff222222222222222222222222ffff555555555554444444444444444........
                ..........55555555555555555444444f222222222222222222222222222222f5555555554444444444444444444.......
                .........5555555555555555555444fff222222222222222222222222222222fff555555444444444444444444444......
                .........5555555555555555555554f2222222222222222222222222222222222f555554444444444444444444444......
                .........5555555555555555555555f2222222222222222222222222222222222f555444444444444444444444444......
                ........44444555555555555555555f2222222222222222222222222222222222f5544444444444444444444444444.....
                ........44444444455555555555555f2222222222222222222222222222222222f5444444444444444444444444444.....
                .......444444444444445555555555f2222222222222222222222222222222222f44444444444444444444444444444....
                .......444444444444444444555ffff2222222222222222222222222222222222ffff44444444444444444444444444....
                .......444444444444444444444f2222222222222222222222222222222222222222f44444444444444444444444444....
                ......4444444444444444444444f22222222222ffffffffffffffffffff222222222f444444444444444444444444444...
                ......4444444444444444444444f2222222222f88666666666666666666f22222222f555555555554444444444444444...
                ......4444444444444444444444f222222222f8886666699999999999966f2222222f555555555555555555555554444...
                ......4444444444444444444444f22222222f888866666999999999999666f222222f555555555555555555555555555...
                .....44444444444444444444444f22222222f888886666999999999999666f222222f5555555555555555555555555555..
                .....44444444444444444444444f22222222f888888666666666666666666f222222f5555555555555555555555555555..
                .....44444444444444444444444f22222222f888888866666666666666666f222222f5555555555555555555555555555..
                .....444444444444444444444fff22222222f888888886666666666666666f222222fff55555555555555555555555555..
                .....444444444444444444444f22222222222f8888888fff888888888888f222222222f44444444444444444444444444..
                .....444444444444444444444f222222222222f888888feff8888888888f2222222222f44444444444444444444444444..
                .....444444444444444444444f2222222222222fffffffe2fffffffffff22222222222f44444444444444444444444444..
                .....555555555555555555555f2222222222222222222fe2f222222222222222222222f44444444444444444444444444..
                .....555555555555555555555f2222222222222222222fe2f222222222222222222222f44444444444444444444444444..
                .....555555555555555555555f2222222222222222222fe2f222222222222222222222f44444444444444444444444444..
                .....555555555555555555555f2222222222222222222f24f222222222222222222222f44444444444444444444444444..
                .....555555555555555555555f2222222222222222222f24f222222222222222222222f55555555555544444444444444..
                .....555555555555555555544f2222222222222222222f244ffff22222222222222222f55555555555555555555554444..
                .....555555555555555554444f2222222222222222222f244eee2f2222222222222222f45555555555555555555555555..
                .....555555555555554444444f2222222222222222222fff2222f22222222222222222f44455555555555555555555555..
                .....555555555544444444445f22222222222222222222222ffffff222222222222222f44444555555555555555555555..
                .....555555444444444444455f22222222222222222222ffffee22f222222222222222f44444445555555555555555555..
                .....555544444444444445555f22222222222222222222222222fffff2222222222222f44444444455555555555555555..
                .....555444444444444455555f22222222222222222222fffffff2222f222222222222f44444444444555555555555555..
                ......44444444444444555555f2222222222222222222222222222222f222222222222f4444444444444555555555555...
                ......44444444444455555555f2222222222222222222ffff22222ffff222222222222f4444444444444445555555555...
                ......444444444445555555544ffffffffffffffffffff22ffffff222ffffffffffffff4444444444444444455555555...
                ......4444444444555555554444444444444444445555ff22222222ff544445555555555544444444444444444555555...
                .......4444444555555555544444422224444424555544fffffffff5554444555555555555444444444444444444555....
                .......44444455555555554444442244444444245225424444445555554444455555555555544444444444444444445....
                .......44444555555555544444442244444444245255424422445525554444425555555555554444444444444444445....
                ........445555555555544444444422222444422225542442444552555244442555555555555544444444444444444.....
                ........555555555555444444444444442224525525442442444552555244442455555555555554444444444444444.....
                .........5555555555544444444444444442552555244222244455255524444245555555555555544444444444444......
                .........5555555555444444444442222225552555244244244455222222444244555555555555554444444444444......
                .........5555555554444444444444444445552555244244224455255525444244555555555555555444444444444......
                ..........55555554444444444444444445555555544422442445525552544444445555555555555554444444444.......
                ...........555554444444444444444445555555554444444444552555554442444555555555555555544444444........
                ...........555554444444444444444445555555554444444444555555555444444455555555555555554444444........
                ............5554444444444444444445555555554444444444455555555544444445555555555555555544444.........
                ............5544444444444444444455555555554444444444455555555544444444555555555555555554444.........
                .............54444444444444444455555555555444444444445555555555444444445555555555555555544..........
                ..............444444444444444445555555555544444444444555555555544444444555555555555555555...........
                ...............4444444444444445555555555544444444444455555555554444444445555555555555555............
                ...............4444444444444455555555555544444444444455555555555444444445555555555555555............
                ................44444444444455555555555554444444444445555555555544444444455555555555555.............
                .................444444444445555555555555444444444444555555555554444444445555555555555..............
                ..................4444444445555555555555444444444444455555555555544444444455555555555...............
                ...................44444445555555555555544444444444445555555555554444444444555555555................
                ....................444444555555555555554444444444444555555555555444444444455555555.................
                .....................4444555555555555554444444444444455555555555544444444444555555..................
                .......................445555555555555544444444444444555555555555544444444445555....................
                ........................4555555555555554444444444444455555555555554444444444455.....................
                .........................55555555555555444444444444445555555555555444444444444......................
                ...........................5555555555544444444444444455555555555555444444444........................
                .............................555555555444444444444444555555555555554444444..........................
                ..............................5555555544444444444444455555555555555444444...........................
                .................................5555544444444444444455555555555555544..............................
                ...................................555444444444444444555555555555555................................
                ......................................444444444444444555555555555...................................
                ..........................................4444444444455555555.......................................
                ....................................................................................................
                ....................................................................................................
                ....................................................................................................
                `, SpriteKind.Start)
            Shhhhhh.setPosition(80, 79)
            me.setFlag(SpriteFlag.Invisible, true)
            pet.setFlag(SpriteFlag.Invisible, true)
            me.setPosition(80, 79)
            pause(1500)
            Shhhhhh.destroy()
            game.setDialogFrame(img`
                . . . . . . . . . . . . . . . 
                . f f f f f f f f f f f f f . 
                . f f f f f f f f f f f f f . 
                . f f f f f f f f f f f f f . 
                . f f f f f f f f f f f f f . 
                . f f f f f f f f f f f f f . 
                . f f f f f f f f f f f f f . 
                . f f f f f f f f f f f f f . 
                . f f f f f f f f f f f f f . 
                . f f f f f f f f f f f f f . 
                . f f f f f f f f f f f f f . 
                . f f f f f f f f f f f f f . 
                . f f f f f f f f f f f f f . 
                . f f f f f f f f f f f f f . 
                . . . . . . . . . . . . . . . 
                `)
            pause(100)
            // HEEEERRREEE
            if (Math.percentChance(50)) {
                CREWMATE()
            } else {
                IMPOSTER()
            }
            if (Alive_Blue == 0) {
                Blue = sprites.create(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f 8 8 8 8 8 f f . . . 
                    . . . f 8 8 8 8 8 8 8 f f . . 
                    . . f 8 8 8 8 f f f f f f f . 
                    f f f 8 8 8 f 8 6 6 9 9 9 6 f 
                    f 8 f 8 8 8 f 8 8 6 6 6 6 6 f 
                    f c f c 8 8 f 8 8 8 8 6 6 6 f 
                    f c f c 8 8 8 f f f f f f f . 
                    f c f c c 8 8 8 8 8 8 8 f . . 
                    f f f c c c 8 8 8 8 8 8 f . . 
                    . . f c c c c c 8 8 8 c f . . 
                    . . f c c c c c c c c c f . . 
                    . . f c c c f f f c c c f . . 
                    . . f c c c f . f c c c f . . 
                    . . f c c c f . f c c c f . . 
                    . . f f f f f . f f f f f . . 
                    `, SpriteKind.Enemy)
            }
            if (Alive_Orange == 0) {
                Orange = sprites.create(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f 4 4 4 4 4 f f . . . 
                    . . . f 4 4 4 4 4 4 4 f f . . 
                    . . f 4 4 4 4 f f f f f f f . 
                    f f f 4 4 4 f 8 6 6 9 9 9 6 f 
                    f 4 f 4 4 4 f 8 8 6 6 6 6 6 f 
                    f e f e 4 4 f 8 8 8 8 6 6 6 f 
                    f e f e 4 4 4 f f f f f f f . 
                    f e f e e 4 4 4 4 4 4 4 f . . 
                    f f f e e e 4 4 4 4 4 4 f . . 
                    . . f e e e e e 4 4 4 e f . . 
                    . . f e e e e e e e e e f . . 
                    . . f e e e f f f e e e f . . 
                    . . f e e e f . f e e e f . . 
                    . . f e e e f . f e e e f . . 
                    . . f f f f f . f f f f f . . 
                    `, SpriteKind.Enemy)
            }
            if (Alive_Yellow == 0) {
                Yellow = sprites.create(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f 5 5 5 5 5 f f . . . 
                    . . . f 5 5 5 5 5 5 5 f f . . 
                    . . f 5 5 5 5 f f f f f f f . 
                    f f f 5 5 5 f 8 6 6 9 9 9 6 f 
                    f 5 f 5 5 5 f 8 8 6 6 6 6 6 f 
                    f 4 f 4 5 5 f 8 8 8 8 6 6 6 f 
                    f 4 f 4 5 5 5 f f f f f f f . 
                    f 4 f 4 4 5 5 5 5 5 5 5 f . . 
                    f f f 4 4 4 5 5 5 5 5 5 f . . 
                    . . f 4 4 4 4 4 5 5 5 4 f . . 
                    . . f 4 4 4 4 4 4 4 4 4 f . . 
                    . . f 4 4 4 f f f 4 4 4 f . . 
                    . . f 4 4 4 f . f 4 4 4 f . . 
                    . . f 4 4 4 f . f 4 4 4 f . . 
                    . . f f f f f . f f f f f . . 
                    `, SpriteKind.Enemy)
            }
            if (Alive_Green == 0) {
                Green = sprites.create(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f 7 7 7 7 7 f f . . . 
                    . . . f 7 7 7 7 7 7 7 f f . . 
                    . . f 7 7 7 7 f f f f f f f . 
                    f f f 7 7 7 f 8 6 6 9 9 9 6 f 
                    f 7 f 7 7 7 f 8 8 6 6 6 6 6 f 
                    f 6 f 6 7 7 f 8 8 8 8 6 6 6 f 
                    f 6 f 6 7 7 7 f f f f f f f . 
                    f 6 f 6 6 7 7 7 7 7 7 7 f . . 
                    f f f 6 6 6 7 7 7 7 7 7 f . . 
                    . . f 6 6 6 6 6 7 7 7 6 f . . 
                    . . f 6 6 6 6 6 6 6 6 6 f . . 
                    . . f 6 6 6 f f f 6 6 6 f . . 
                    . . f 6 6 6 f . f 6 6 6 f . . 
                    . . f 6 6 6 f . f 6 6 6 f . . 
                    . . f f f f f . f f f f f . . 
                    `, SpriteKind.Enemy)
            }
            if (Alive_Black == 0) {
                Black = sprites.create(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f f f f f f f f . . . 
                    . . . f f f f f f f f f f . . 
                    . . f f f f f f f f f f f f . 
                    f f f f f f f 8 6 6 9 9 9 6 f 
                    f f f f f f f 8 8 6 6 6 6 6 f 
                    f c f c f f f 8 8 8 8 6 6 6 f 
                    f c f c f f f f f f f f f f . 
                    f c f c c f f f f f f f f . . 
                    f f f c c c f f f f f f f . . 
                    . . f c c c c c f f f c f . . 
                    . . f c c c c c c c c c f . . 
                    . . f c c c f f f c c c f . . 
                    . . f c c c f . f c c c f . . 
                    . . f c c c f . f c c c f . . 
                    . . f f f f f . f f f f f . . 
                    `, SpriteKind.Enemy)
            }
            if (Alive_White == 0) {
                White = sprites.create(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f 1 1 1 1 1 f f . . . 
                    . . . f 1 1 1 1 1 1 1 f f . . 
                    . . f 1 1 1 1 f f f f f f f . 
                    f f f 1 1 1 f 8 6 6 9 9 9 6 f 
                    f 1 f 1 1 1 f 8 8 6 6 6 6 6 f 
                    f d f d 1 1 f 8 8 8 8 6 6 6 f 
                    f d f d 1 1 1 f f f f f f f . 
                    f d f d d 1 1 1 1 1 1 1 f . . 
                    f f f d d d 1 1 1 1 1 1 f . . 
                    . . f d d d d d 1 1 1 d f . . 
                    . . f d d d d d d d d d f . . 
                    . . f d d d f f f d d d f . . 
                    . . f d d d f . f d d d f . . 
                    . . f d d d f . f d d d f . . 
                    . . f f f f f . f f f f f . . 
                    `, SpriteKind.Enemy)
            }
            if (Alive_Purple == 0) {
                Purple = sprites.create(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f a a a a a f f . . . 
                    . . . f a a a a a a a f f . . 
                    . . f a a a a f f f f f f f . 
                    f f f a a a f 8 6 6 9 9 9 6 f 
                    f a f a a a f 8 8 6 6 6 6 6 f 
                    f c f c a a f 8 8 8 8 6 6 6 f 
                    f c f c a a a f f f f f f f . 
                    f c f c c a a a a a a a f . . 
                    f f f c c c a a a a a a f . . 
                    . . f c c c c c a a a c f . . 
                    . . f c c c c c c c c c f . . 
                    . . f c c c f f f c c c f . . 
                    . . f c c c f . f c c c f . . 
                    . . f c c c f . f c c c f . . 
                    . . f f f f f . f f f f f . . 
                    `, SpriteKind.Enemy)
            }
            if (Alive_Cyan == 0) {
                Cyan = sprites.create(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f 9 9 9 9 9 f f . . . 
                    . . . f 9 9 9 9 9 9 9 f f . . 
                    . . f 9 9 9 9 f f f f f f f . 
                    f f f 9 9 9 f 8 6 6 9 9 9 6 f 
                    f 9 f 9 9 9 f 8 8 6 6 6 6 6 f 
                    f 6 f 6 9 9 f 8 8 8 8 6 6 6 f 
                    f 6 f 6 9 9 9 f f f f f f f . 
                    f 6 f 6 6 9 9 9 9 9 9 9 f . . 
                    f f f 6 6 6 9 9 9 9 9 9 f . . 
                    . . f 6 6 6 6 6 9 9 9 6 f . . 
                    . . f 6 6 6 6 6 6 6 6 6 f . . 
                    . . f 6 6 6 f f f 6 6 6 f . . 
                    . . f 6 6 6 f . f 6 6 6 f . . 
                    . . f 6 6 6 f . f 6 6 6 f . . 
                    . . f f f f f . f f f f f . . 
                    `, SpriteKind.Enemy)
            }
            me = sprites.create(img`
                . . . . . f f f f f . . . . . 
                . . . . f 2 2 2 2 2 f f . . . 
                . . . f 2 2 2 2 2 2 2 f f . . 
                . . f 2 2 2 2 f f f f f f f . 
                f f f 2 2 2 f 8 6 6 9 9 9 6 f 
                f 2 f 2 2 2 f 8 8 6 6 6 6 6 f 
                f e f e 2 2 f 8 8 8 8 6 6 6 f 
                f e f e 2 2 2 f f f f f f f . 
                f e f e e 2 2 2 2 2 2 2 f . . 
                f f f e e e 2 2 2 2 2 2 f . . 
                . . f e e e e e 2 2 2 e f . . 
                . . f e e e e e e e e e f . . 
                . . f e e e f f f e e e f . . 
                . . f e e e f . f e e e f . . 
                . . f e e e f . f e e e f . . 
                . . f f f f f . f f f f f . . 
                `, SpriteKind.Player)
            name_me = statusbars.create(0, 0, StatusBarKind.EnemyHealth)
            name_me.setLabel("Dahbix", 1)
            name_me.setStatusBarFlag(StatusBarFlag.LabelAtEnd, true)
            name_me.attachToSprite(me, 0, 0)
            statusbar_set = 1
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff1f1ffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffff1ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
                ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff1fffffffffffffffffffffffffffffffff1fffffffffffffff
                ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff1ffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffff1fffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff1ffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff1ffffff
                ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff1ffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff
                ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff
                ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff1fffffffffffffffffffffffffffffffffff
                ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff1fffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffff1fffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff1ffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff1fffff
                ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff1fffffffffffffffffffffffffff
                ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff1fffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffff1fffffffffffff1ffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff
                ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
                ffffff1ffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            tiles.setTilemap(tilemap`Level_2`)
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff1f1ffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffff1ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
                ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff1fffffffffffffffffffffffffffffffff1fffffffffffffff
                ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff1ffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffff1fffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff1ffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff1ffffff
                ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff1ffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff
                ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff
                ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff1fffffffffffffffffffffffffffffffffff
                ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff1fffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffff1fffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff1ffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff1fffff
                ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff1fffffffffffffffffffffffffff
                ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff1fffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffff1fffffffffffff1ffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff
                ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
                ffffff1ffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            tiles.placeOnRandomTile(me, assets.tile`tile32`)
            tiles.placeOnRandomTile(Blue, sprites.dungeon.floorLight0)
            tiles.placeOnRandomTile(Orange, sprites.dungeon.floorLight0)
            tiles.placeOnRandomTile(Yellow, sprites.dungeon.floorLight0)
            tiles.placeOnRandomTile(White, sprites.dungeon.floorLight0)
            tiles.placeOnRandomTile(Black, sprites.dungeon.floorLight0)
            tiles.placeOnRandomTile(Purple, sprites.dungeon.floorLight0)
            tiles.placeOnRandomTile(Cyan, sprites.dungeon.floorLight0)
            pet = sprites.create(img`
                ..............................
                ..............................
                ..............................
                ..............................
                ....f.........................
                ...f2f........................
                .ff222f.......................
                f2f2896f......................
                f2f2888f......................
                .ff222f.......................
                ..f2f2f.......................
                ...f.f........................
                `, SpriteKind.Player)
            pet.setFlag(SpriteFlag.Ghost, true)
            pet.setPosition(me.x, me.y)
            pet.follow(me, 100)
            statusbar = statusbars.create(90, 7, StatusBarKind.Tasks)
            statusbar.setLabel("Tasks Done")
            statusbar.setStatusBarFlag(StatusBarFlag.LabelAtEnd, true)
            statusbar.setColor(7, 1, 0)
            statusbar.positionDirection(CollisionDirection.Top)
            statusbar.value = 0
            statusbar.setBarBorder(1, 15)
            tiles.placeOnRandomTile(Green, sprites.dungeon.floorLight4)
            if (ROLE == 1) {
                Green.setVelocity(30, 30)
                Path_Green = scene.aStar(tiles.getTileLocation(87, 59), tiles.getTileLocation(55, 67))
                scene.followPath(Green, Path_Green, 15)
            }
            Black_Path = scene.aStar(tiles.getTileLocation(80, 60), tiles.getTileLocation(111, 91))
            scene.followPath(Black, Black_Path, 15)
            Blue_Path = scene.aStar(tiles.getTileLocation(80, 60), tiles.getTileLocation(64, 72))
            scene.followPath(Blue, Blue_Path, 15)
            for (let Wert of tiles.getTilesByType(assets.tile`tile100`)) {
                mySprite = sprites.create(assets.tile`tile100`, SpriteKind.Start)
                tiles.placeOnTile(mySprite, Wert)
            }
            for (let Wert of tiles.getTilesByType(assets.tile`tile61`)) {
                vennt = sprites.create(assets.tile`tile61`, SpriteKind.Start)
                tiles.placeOnTile(vennt, Wert)
            }
            for (let Wert of tiles.getTilesByType(assets.tile`tile64`)) {
                vennt = sprites.create(assets.tile`tile64`, SpriteKind.Start)
                tiles.placeOnTile(vennt, Wert)
            }
            for (let Wert of tiles.getTilesByType(assets.tile`tile62`)) {
                vennt = sprites.create(assets.tile`tile62`, SpriteKind.Start)
                tiles.placeOnTile(vennt, Wert)
            }
            for (let Wert of tiles.getTilesByType(assets.tile`tile63`)) {
                vennt = sprites.create(assets.tile`tile63`, SpriteKind.Start)
                tiles.placeOnTile(vennt, Wert)
            }
        }
        Start_Game_Lock = 1
    }
})
game.onUpdateInterval(100, function () {
    if (ROLE == 0) {
        if (spriteutils.distanceBetween(me, Green) <= 80) {
            scene.followPath(Green, [], 0)
            Green.follow(me, 50)
        } else {
            Green.follow(me, 0)
            scene.followPath(Green, Path_Green, 15)
        }
    }
    if (me_walk_lock == 0) {
        controller.moveSprite(me, 80, 80)
    } else {
        controller.moveSprite(me, 0, 0)
        scene.cameraFollowSprite(GHOST)
    }
    if (Alive_Orange == 0) {
        Orange.follow(Yellow, 16)
        if (Alive_Yellow == 1) {
            if (Orange.overlapsWith(Yellow)) {
                game.splash("Dead Body Reported", "Yellow")
                Yellow.destroy(effects.disintegrate, 500)
            }
        }
        if (Alive_Green == 1) {
            if (Orange.overlapsWith(Green)) {
                game.splash("Dead Body Reported", "Green")
                Green.destroy(effects.disintegrate, 500)
            }
        }
    } else if (Alive_Orange == 1) {
        Orange.follow(Yellow, 0)
    }
    if (Alive_Yellow == 0) {
        Yellow.follow(Green, 16)
        if (Alive_Green == 1) {
            if (Yellow.overlapsWith(Green)) {
                game.splash("Dead Body Reported", "Green")
                Green.destroy(effects.disintegrate, 500)
            }
        }
    } else if (Alive_Yellow == 1) {
        Yellow.follow(Green, 0)
    }
    if (ROLE == 1) {
        if (Alive_Green == 1) {
            Green.follow(Black, 0)
        }
        if (Alive_Green == 0) {
            if (spriteutils.distanceBetween(me, Green) <= Kill_Range) {
                Green.setImage(img`
                    ......22222......
                    .....2fffff22....
                    ....2f77777ff2...
                    ...2f7777777ff2..
                    .22f7777fffffff2.
                    2fff777f8669996f2
                    2f7f777f8866666f2
                    2f6f677f8888666f2
                    2f6f6777fffffff2.
                    2f6f667777777f2..
                    2fff666777777f2..
                    .22f666667776f2..
                    ..2f666666666f2..
                    ..2f666fff666f2..
                    ..2f666f2f666f2..
                    ..2f666f2f666f2..
                    ..2fffff2fffff2..
                    ...22222.22222...
                    `)
                KILL()
            } else {
                Green.setImage(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f 7 7 7 7 7 f f . . . 
                    . . . f 7 7 7 7 7 7 7 f f . . 
                    . . f 7 7 7 7 f f f f f f f . 
                    f f f 7 7 7 f 8 6 6 9 9 9 6 f 
                    f 7 f 7 7 7 f 8 8 6 6 6 6 6 f 
                    f 6 f 6 7 7 f 8 8 8 8 6 6 6 f 
                    f 6 f 6 7 7 7 f f f f f f f . 
                    f 6 f 6 6 7 7 7 7 7 7 7 f . . 
                    f f f 6 6 6 7 7 7 7 7 7 f . . 
                    . . f 6 6 6 6 6 7 7 7 6 f . . 
                    . . f 6 6 6 6 6 6 6 6 6 f . . 
                    . . f 6 6 6 f f f 6 6 6 f . . 
                    . . f 6 6 6 f . f 6 6 6 f . . 
                    . . f 6 6 6 f . f 6 6 6 f . . 
                    . . f f f f f . f f f f f . . 
                    `)
                if (KILL_BUTTON_SEE == 1) {
                    Kill_Button.destroy()
                    KILL_BUTTON_SEE = 0
                }
            }
        }
        if (Alive_Yellow == 0) {
            if (spriteutils.distanceBetween(me, Yellow) <= Kill_Range) {
                Yellow.setImage(img`
                    ......22222......
                    .....2fffff22....
                    ....2f55555ff2...
                    ...2f5555555ff2..
                    .22f5555fffffff2.
                    2fff555f8669996f2
                    2f5f555f8866666f2
                    2f4f455f8888666f2
                    2f4f4555fffffff2.
                    2f4f445555555f2..
                    2fff444555555f2..
                    .22f444445554f2..
                    ..2f444444444f2..
                    ..2f444fff444f2..
                    ..2f444f2f444f2..
                    ..2f444f2f444f2..
                    ..2fffff2fffff2..
                    ...22222.22222...
                    `)
            } else {
                Yellow.setImage(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f 5 5 5 5 5 f f . . . 
                    . . . f 5 5 5 5 5 5 5 f f . . 
                    . . f 5 5 5 5 f f f f f f f . 
                    f f f 5 5 5 f 8 6 6 9 9 9 6 f 
                    f 5 f 5 5 5 f 8 8 6 6 6 6 6 f 
                    f 4 f 4 5 5 f 8 8 8 8 6 6 6 f 
                    f 4 f 4 5 5 5 f f f f f f f . 
                    f 4 f 4 4 5 5 5 5 5 5 5 f . . 
                    f f f 4 4 4 5 5 5 5 5 5 f . . 
                    . . f 4 4 4 4 4 5 5 5 4 f . . 
                    . . f 4 4 4 4 4 4 4 4 4 f . . 
                    . . f 4 4 4 f f f 4 4 4 f . . 
                    . . f 4 4 4 f . f 4 4 4 f . . 
                    . . f 4 4 4 f . f 4 4 4 f . . 
                    . . f f f f f . f f f f f . . 
                    `)
            }
        }
        if (Alive_Orange == 0) {
            if (spriteutils.distanceBetween(me, Orange) <= Kill_Range) {
                Orange.setImage(img`
                    ......22222......
                    .....2fffff22....
                    ....2f44444ff2...
                    ...2f4444444ff2..
                    .22f4444fffffff2.
                    2fff444f8669996f2
                    2f4f444f8866666f2
                    2fefe44f8888666f2
                    2fefe444fffffff2.
                    2fefee4444444f2..
                    2fffeee444444f2..
                    .22feeeee444ef2..
                    ..2feeeeeeeeef2..
                    ..2feeefffeeef2..
                    ..2feeef2feeef2..
                    ..2feeef2feeef2..
                    ..2fffff2fffff2..
                    ...22222.22222...
                    `)
            } else {
                Orange.setImage(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f 4 4 4 4 4 f f . . . 
                    . . . f 4 4 4 4 4 4 4 f f . . 
                    . . f 4 4 4 4 f f f f f f f . 
                    f f f 4 4 4 f 8 6 6 9 9 9 6 f 
                    f 4 f 4 4 4 f 8 8 6 6 6 6 6 f 
                    f e f e 4 4 f 8 8 8 8 6 6 6 f 
                    f e f e 4 4 4 f f f f f f f . 
                    f e f e e 4 4 4 4 4 4 4 f . . 
                    f f f e e e 4 4 4 4 4 4 f . . 
                    . . f e e e e e 4 4 4 e f . . 
                    . . f e e e e e e e e e f . . 
                    . . f e e e f f f e e e f . . 
                    . . f e e e f . f e e e f . . 
                    . . f e e e f . f e e e f . . 
                    . . f f f f f . f f f f f . . 
                    `)
            }
        }
        if (Alive_Blue == 0) {
            if (spriteutils.distanceBetween(me, Blue) <= Kill_Range) {
                Blue.setImage(img`
                    ......22222......
                    .....2fffff22....
                    ....2f88888ff2...
                    ...2f8888888ff2..
                    .22f8888fffffff2.
                    2fff888f8669996f2
                    2f8f888f8866666f2
                    2fbfb88f8888666f2
                    2fbfb888fffffff2.
                    2fbfbb8888888f2..
                    2fffbbb888888f2..
                    .22fbbbbb888bf2..
                    ..2fbbbbbbbbbf2..
                    ..2fbbbfffbbbf2..
                    ..2fbbbf2fbbbf2..
                    ..2fbbbf2fbbbf2..
                    ..2fffff2fffff2..
                    ...22222.22222...
                    `)
            } else {
                Blue.setImage(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f 8 8 8 8 8 f f . . . 
                    . . . f 8 8 8 8 8 8 8 f f . . 
                    . . f 8 8 8 8 f f f f f f f . 
                    f f f 8 8 8 f 8 6 6 9 9 9 6 f 
                    f 8 f 8 8 8 f 8 8 6 6 6 6 6 f 
                    f b f b 8 8 f 8 8 8 8 6 6 6 f 
                    f b f b 8 8 8 f f f f f f f . 
                    f b f b b 8 8 8 8 8 8 8 f . . 
                    f f f b b b 8 8 8 8 8 8 f . . 
                    . . f b b b b b 8 8 8 b f . . 
                    . . f b b b b b b b b b f . . 
                    . . f b b b f f f b b b f . . 
                    . . f b b b f . f b b b f . . 
                    . . f b b b f . f b b b f . . 
                    . . f f f f f . f f f f f . . 
                    `)
            }
        }
        if (Alive_White == 0) {
            if (spriteutils.distanceBetween(me, White) <= Kill_Range) {
                White.setImage(img`
                    ......22222......
                    .....2fffff22....
                    ....2f11111ff2...
                    ...2f1111111ff2..
                    .22f1111fffffff2.
                    2fff111f8669996f2
                    2f1f111f8866666f2
                    2fdfd11f8888666f2
                    2fdfd111fffffff2.
                    2fdfdd1111111f2..
                    2fffddd111111f2..
                    .22fddddd111df2..
                    ..2fdddddddddf2..
                    ..2fdddfffdddf2..
                    ..2fdddf2fdddf2..
                    ..2fdddf2fdddf2..
                    ..2fffff2fffff2..
                    ...22222.22222...
                    `)
            } else {
                White.setImage(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f 1 1 1 1 1 f f . . . 
                    . . . f 1 1 1 1 1 1 1 f f . . 
                    . . f 1 1 1 1 f f f f f f f . 
                    f f f 1 1 1 f 8 6 6 9 9 9 6 f 
                    f 1 f 1 1 1 f 8 8 6 6 6 6 6 f 
                    f d f d 1 1 f 8 8 8 8 6 6 6 f 
                    f d f d 1 1 1 f f f f f f f . 
                    f d f d d 1 1 1 1 1 1 1 f . . 
                    f f f d d d 1 1 1 1 1 1 f . . 
                    . . f d d d d d 1 1 1 d f . . 
                    . . f d d d d d d d d d f . . 
                    . . f d d d f f f d d d f . . 
                    . . f d d d f . f d d d f . . 
                    . . f d d d f . f d d d f . . 
                    . . f f f f f . f f f f f . . 
                    `)
            }
        }
        if (Alive_Black == 0) {
            if (spriteutils.distanceBetween(me, Black) <= Kill_Range) {
                Black.setImage(img`
                    ......22222......
                    .....2fffff22....
                    ....2ffffffff2...
                    ...2ffffffffff2..
                    .22ffffffffffff2.
                    2fffffff8669996f2
                    2fffffff8866666f2
                    2fcfcfff8888666f2
                    2fcfcffffffffff2.
                    2fcfccffffffff2..
                    2fffcccfffffff2..
                    .22fcccccfffcf2..
                    ..2fcccccccccf2..
                    ..2fcccfffcccf2..
                    ..2fcccf2fcccf2..
                    ..2fcccf2fcccf2..
                    ..2fffff2fffff2..
                    ...22222.22222...
                    `)
            } else {
                Black.setImage(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f f f f f f f f . . . 
                    . . . f f f f f f f f f f . . 
                    . . f f f f f f f f f f f f . 
                    f f f f f f f 8 6 6 9 9 9 6 f 
                    f f f f f f f 8 8 6 6 6 6 6 f 
                    f c f c f f f 8 8 8 8 6 6 6 f 
                    f c f c f f f f f f f f f f . 
                    f c f c c f f f f f f f f . . 
                    f f f c c c f f f f f f f . . 
                    . . f c c c c c f f f c f . . 
                    . . f c c c c c c c c c f . . 
                    . . f c c c f f f c c c f . . 
                    . . f c c c f . f c c c f . . 
                    . . f c c c f . f c c c f . . 
                    . . f f f f f . f f f f f . . 
                    `)
            }
        }
        if (Alive_Purple == 0) {
            if (spriteutils.distanceBetween(me, Purple) <= Kill_Range) {
                Purple.setImage(img`
                    ......22222......
                    .....2fffff22....
                    ....2faaaaaff2...
                    ...2faaaaaaaaf2..
                    .22faaaafffffff2.
                    2fffaaaf8669996f2
                    2fafaaaf8866666f2
                    2fcfcaaf8888666f2
                    2fcfcaaafffffff2.
                    2fcfccaaaaaaaf2..
                    2fffcccaaaaaaf2..
                    .22fcccccaaacf2..
                    ..2fcccccccccf2..
                    ..2fcccfffcccf2..
                    ..2fcccf2fcccf2..
                    ..2fcccf2fcccf2..
                    ..2fffff2fffff2..
                    ...22222.22222...
                    `)
            } else {
                Purple.setImage(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f a a a a a f f . . . 
                    . . . f a a a a a a a f f . . 
                    . . f a a a a f f f f f f f . 
                    f f f a a a f 8 6 6 9 9 9 6 f 
                    f a f a a a f 8 8 6 6 6 6 6 f 
                    f c f c a a f 8 8 8 8 6 6 6 f 
                    f c f c a a a f f f f f f f . 
                    f c f c c a a a a a a a f . . 
                    f f f c c c a a a a a a f . . 
                    . . f c c c c c a a a c f . . 
                    . . f c c c c c c c c c f . . 
                    . . f c c c f f f c c c f . . 
                    . . f c c c f . f c c c f . . 
                    . . f c c c f . f c c c f . . 
                    . . f f f f f . f f f f f . . 
                    `)
            }
        }
        if (Alive_Cyan == 0) {
            if (spriteutils.distanceBetween(me, Cyan) <= Kill_Range) {
                Cyan.setImage(img`
                    ......22222......
                    .....2fffff22....
                    ....2f99999ff2...
                    ...2f99999999f2..
                    .22f9999fffffff2.
                    2fff999f8669996f2
                    2f9f999f8866666f2
                    2f6f699f8888666f2
                    2f6f6999fffffff2.
                    2f6f669999999f2..
                    2fff666999999f2..
                    .22f666669996f2..
                    ..2f666666666f2..
                    ..2f666fff666f2..
                    ..2f666f2f666f2..
                    ..2f666f2f666f2..
                    ..2fffff2fffff2..
                    ...22222.22222...
                    `)
            } else {
                Cyan.setImage(img`
                    . . . . . f f f f f . . . . . 
                    . . . . f 9 9 9 9 9 f f . . . 
                    . . . f 9 9 9 9 9 9 9 f f . . 
                    . . f 9 9 9 9 f f f f f f f . 
                    f f f 9 9 9 f 8 6 6 9 9 9 6 f 
                    f 9 f 9 9 9 f 8 8 6 6 6 6 6 f 
                    f 6 f 6 9 9 f 8 8 8 8 6 6 6 f 
                    f 6 f 6 9 9 9 f f f f f f f . 
                    f 6 f 6 6 9 9 9 9 9 9 9 f . . 
                    f f f 6 6 6 9 9 9 9 9 9 f . . 
                    . . f 6 6 6 6 6 9 9 9 6 f . . 
                    . . f 6 6 6 6 6 6 6 6 6 f . . 
                    . . f 6 6 6 f f f 6 6 6 f . . 
                    . . f 6 6 6 f . f 6 6 6 f . . 
                    . . f 6 6 6 f . f 6 6 6 f . . 
                    . . f f f f f . f f f f f . . 
                    `)
            }
        }
    }
})
