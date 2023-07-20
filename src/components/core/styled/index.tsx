import {
	createStyled,
	// FontResolver
} from '@dank-style/react';
import {AnimationResolver} from '@dank-style/animation-plugin';

// Const fontMapper = (style: any) => {};

export const styled = createStyled([
	new AnimationResolver({}),
	// New FontResolver({
	// mapFonts: fontMapper,
	// }),
]);
