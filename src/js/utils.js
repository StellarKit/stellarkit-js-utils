export default class Utils {
  static strlen(inString) {
    if (!inString) {
      return 0
    }

    return inString.length
  }

  static strOK(inString) {
    if (!inString) {
      return false
    }

    return inString.length > 0
  }
}
