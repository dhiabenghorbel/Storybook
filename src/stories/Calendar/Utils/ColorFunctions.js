export const hashStringToColor = (str) => {
  const hashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  };

  const intToRGB = (i) => {
    const c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

    return '00000'.substring(0, 6 - c.length) + c;
  };

  const hexToRgb = (hex) => {
    const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const result = {
      r: parseInt(res[1], 16),
      g: parseInt(res[2], 16),
      b: parseInt(res[3], 16),
    };
    result.toRgba = function () {
      return `rgba(${this.r},${this.g},${this.b},${this.a})`;
    };
    return `rgba(${result.r},${result.g},${result.b},${1})`;
  };


  return hexToRgb(`#${intToRGB(hashCode(str))}`);
};

export const getTextColorFromBackground = (rgbColor, isTooDarkColor = '#FFF', isTooLightColor = '#000') => {
  const rgbToHex = (color) => {
    color = color.replace(/\s/g, '');
    const aRGB = color.match(/^rgba?\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?),?(\d?\.?\d?)\)$/i);
    if (aRGB) {
      color = '';
      for (let i = 1; i <= 3; i++) color += Math.round((aRGB[i][aRGB[i].length - 1] === '%' ? 2.55 : 1) * parseInt(aRGB[i])).toString(16).replace(/^(.)$/, '0$1');
    } else color = color.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, '$1$1$2$2$3$3');
    return `#${color}`;
  };

  const hexColor = rgbToHex(rgbColor);
  const c = hexColor.substring(1); // strip #
  const rgb = parseInt(c, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff; // extract red
  const g = (rgb >> 8) & 0xff; // extract green
  const b = (rgb >> 0) & 0xff; // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  if (luma > 60) {
    return isTooLightColor;
  }
  return isTooDarkColor;
};
