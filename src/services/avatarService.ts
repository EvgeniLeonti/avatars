import { createAvatar } from '@dicebear/core';
import { pixelArt } from '@dicebear/collection';

interface AvatarOptions {
    seed: string;
    backgroundColor: string;
    radius: number;
    size: number;
}

export const generateAvatarSvg = (options: AvatarOptions): string => {
    const avatar = createAvatar(pixelArt, {
        seed: options.seed,
        backgroundColor: [options.backgroundColor], // DiceBear expects an array of colors
        radius: options.radius,
        size: options.size,
    });

    return avatar.toString();
}; 