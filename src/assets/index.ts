import * as PIXI from 'pixi.js';
import * as PIXISound from '@pixi/sound';

import * as BACKGROUND_IMAGE from './background.jpg';
import * as CHARACTER_IMAGE from './gnroza.jpg';
import * as ADMIT_IMAGE from './admit.png';
import * as CONE_IMAGE from './cone.png';
import * as LOGO_TEXTURE from './logo.png';
import * as PLAY_TEXTURE from './play.png';
import * as PLAY_HOVER_TEXTURE from './play_hover.png';
import * as GALLERY_TEXTURE from './gallery.png';
import * as GALLERY_HOVER_TEXTURE from './gallery_hover.png';
import * as CCJ_TEXTURE from './ccj.png';
import * as CCJ_HOVER_TEXTURE from './ccj_hover.png';
import * as BACK_TEXTURE from './back.png';
import * as PHOTO_TEXTURE from './photo.png';
import * as SECRETPHOTO_TEXTURE from './secretphoto.png';
import * as WOW_PICTURE from './wow.png';
import * as LOCK_PICTURE from './lock.png';
import * as X_TEXTURE from './x.png';
import * as SWORD_SOUND from './sword.mp3';

interface LoaderAndResources {
    Loader: PIXI.Loader,
    Resources: PIXI.utils.Dict<PIXI.LoaderResource>
}
export function LoadSprites(loader: PIXI.Loader): Promise<LoaderAndResources> {
    loader
        .add('background', BACKGROUND_IMAGE)
        .add('character', CHARACTER_IMAGE)
        .add('admit', ADMIT_IMAGE)
        .add('cone', CONE_IMAGE)
        .add('logo', LOGO_TEXTURE)
        .add('play', PLAY_TEXTURE)
        .add('play_hover', PLAY_HOVER_TEXTURE)
        .add('gallery', GALLERY_TEXTURE)
        .add('gallery_hover', GALLERY_HOVER_TEXTURE)
        .add('ccj', CCJ_TEXTURE)
        .add('ccj_hover', CCJ_HOVER_TEXTURE)
        .add('back', BACK_TEXTURE)
        .add('photo', PHOTO_TEXTURE)
        .add('secretphoto', SECRETPHOTO_TEXTURE)
        .add('wow', WOW_PICTURE)
        .add('lock', LOCK_PICTURE)
        .add('x', X_TEXTURE)
        .add('sword_sound', SWORD_SOUND)
    return new Promise<LoaderAndResources>(resolve => {
        loader.load((loader, resources) => {
            resolve({
                Loader: loader,
                Resources: resources
            })
        })
    });
}