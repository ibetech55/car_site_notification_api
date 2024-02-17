class JsonParser {
  constructor() {}

  parse(variables: any, text: string) {
    if(variables && text) {
      for (const prop in variables) {
        const regex = new RegExp(`{{${prop}}}`, "g");
        text = text.replace(regex, variables[prop]);
      }
    }
  

    return text;
  }
}

export { JsonParser };
