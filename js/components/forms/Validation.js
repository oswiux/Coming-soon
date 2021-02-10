class Validation {
  static isValidName(name) {
    if (!Validation.isEmptyText(name)) {
      return "vardas turi buti ne tuscias";
    }
    if (!Validation.noSpacesAroundText(name)) {
      return "nei priekyje nei gale negali buti tarpu";
    }
    if (!Validation.isSingleWord(name)) {
      return "vardas turi buti vienas zodis";
    }
    if (!Validation.isFirstLetterUppercase(name)) {
      return "vardo pirma raide turi buti didzioji";
    }
    if (!Validation.isLowercaseButFirst(name)) {
      return "vardo visos likusios raides isskyrus pirma turi buti mazosios";
    }
    if (!Validation.onlyAlphabetLetters(name)) {
      return "vaarde gali buti tik abeceles raides";
    }
    return true;
  }

  static isValidEmail(email) {
    if (!Validation.isEmptyText(email)) {
      return "email turi buti ne tuscias";
    }
    if (!Validation.textContainsLetter(email, "@")) {
      return "el pastas turi tureti tik viena simboli @";
    }

    const emailParts = email.split("@");

    if (!Validation.isEmptyText(emailParts[0])) {
      return "el pasto lokali dalis turi buti ne tuscia";
    }
    if (!Validation.isEmptyText(emailParts[1])) {
      return "el pasto domeno dalis turi buti ne tuscia";
    }
    return true;
  }
  static isValidText(text) {
    if (!Validation.isEmptyText(text)) {
      return "text turi buti ne tuscias";
    }
    return true;
  }
  static isEmptyText(text) {
    if (typeof text !== "string" || text === "") {
      return false;
    }
    return true;
  }
  static isSingleWord(text) {
    return !text.includes(" ");
  }
  static isFirstLetterUppercase(text) {
    return text[0] === text[0].toUpperCase();
  }
  static noSpacesAroundText(text) {
    return text === text.trim();
  }
  static isLowercaseButFirst(text) {
    const rest = text.slice(1);
    return rest === rest.toLowerCase();
  }
  static textContainsLetter(text, letter, count = 1) {
    let letterCount = 0;
    for (let symbol of text) {
      if (symbol === letter) {
        letterCount++;
      }
    }

    // letterCount = text.split('').filter(symbol => symbol === letter).length;

    return letterCount === count;
  }
  static onlyAlphabetLetters(text) {
    const uppercase = text.toUpperCase();
    const lowercase = text.toLowerCase();
    const size = text.length;
    for (let i = 0; i < size; i++) {
      if (uppercase[i] === lowercase[i]) {
        return false;
      }
    }
    return true;
  }
}
export { Validation };
