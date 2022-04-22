/*
Class that represents color in RGBA format.
Parameters r, g, b range from 0 to 255.
Parameter alpha ranges from 0 to 1.
 */
export class Color {
  constructor(r, g, b, alpha = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.alpha = alpha;
  }

  //"Factory method" that creates color from given HEX value
  static fromHex(hexColor) {
  }

  //Converts color to RGBA CSS format. Use when passing color to CSS style parameter
  toString() {
  }
}
