import {Dimensions} from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
const guidelineBaseWidth = 350;

export const scaleSize = size => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const FONT_REGULAR = 'Comfortaa-Regular';
export const FONT_BOLD = 'Comfortaa-Bold';
export const FONT_MEDIUM = 'Comfortaa-Medium';
export const FONT_SEMIBOLD = 'Comfortaa-SemiBold';
export const FONT_LIGHT = 'Comfortaa-Light';
