import color from './colors';
import metrics from './metrics';
import fonts from './fonts';
const ApplicationStyles = {
    container: {
        flex: 1,
        backgroundColor: color.COLOR_CONTAINER
    },
    fontlight: {
      fontFamily: fonts.FONT_LIGHT,
      color: color.COLOR_BLACK
    },
    fontsemibold: {
      fontFamily: fonts.FONT_SEMIBOLD,
      color: color.COLOR_BLACK
    }
}

export const uiTheme = {
    palette: {
      primaryColor: color.COLOR_PRIMARY,
      accentColor: color.COLOR_PRIMARY,
    },
    toolbar: {
      container: {
        height: metrics.navBarHeight,
      },
    },
  };

export default ApplicationStyles;