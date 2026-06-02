export default class Parser{
    parse(input: string): { args: string[]; command: string } {
    const parts = input.trim().split(/\s+/).filter(Boolean);

    if (parts.length === 0) {
      return { args: [], command: '' };
    }

    return {
      args: parts.slice(1),
      command: parts[0].toLowerCase(),
    };
  }
}