class EmailTemplateParser {
  constructor() {}

  parse(variables: any, template: string) {
    if (template && variables) {
      for (const prop in variables) {
        const regex = new RegExp(`{{${prop}}}`, "g");
        template = template.replace(regex, variables[prop]);
      }
      return template;
    }
  }
}

export { EmailTemplateParser };
