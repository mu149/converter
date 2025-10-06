export default class ConversionService {
  static convert(input, fromBase, toBase) {
    let decimalValue;

    switch (fromBase) {
      case "decimal":
        decimalValue = parseInt(input, 10);
        break;
      case "binary":
        decimalValue = parseInt(input, 2);
        break;
      case "octal":
        decimalValue = parseInt(input, 8);
        break;
      case "hex":
        decimalValue = parseInt(input, 16);
        break;
      case "bcd":
        decimalValue = ConversionService.bcdToDecimal(input);
        break;
      default:
        throw new Error("Unsupported base");
    }

    if (isNaN(decimalValue)) throw new Error("Invalid input");

    switch (toBase) {
      case "decimal": return decimalValue.toString(10);
      case "binary": return decimalValue.toString(2);
      case "octal": return decimalValue.toString(8);
      case "hex": return decimalValue.toString(16).toUpperCase();
      case "bcd": return ConversionService.decimalToBcd(decimalValue);
      default: throw new Error("Unsupported target base");
    }
  }

  static bcdToDecimal(bcd) {
    let str = bcd.replace(/\s/g, "");
    let digits = str.match(/.{1,4}/g);
    return digits.map(d => parseInt(d, 2)).join("");
  }

  static decimalToBcd(num) {
    return num
      .toString()
      .split("")
      .map(d => parseInt(d).toString(2).padStart(4, "0"))
      .join(" ");
  }
}
