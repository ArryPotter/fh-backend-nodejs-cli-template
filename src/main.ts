import readline from 'node:readline';
import Parser from './middleware/parser';

export class Main{
    constructor(
        private readonly parser: Parser
    ){};

    header(): string{

        const MESSAGE = '\nWelcome to CLI App';
        const MENUS = '\nAvailable Command'+'\nadd'+ '\nupdate' + '\ndelete' +'\n\nPlease put your command'

        return MESSAGE.concat(MENUS);
    }

    start(): void {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: this.header(),
    });

    rl.prompt();   

    rl.on('line', (line) => {
      try {
        console.log(line)
        const { args, command } = this.parser.parse(line);

        if (!command) return;
        
        console.log(args);
        
        rl.prompt();
      } catch (err) {
        console.log((err as Error).message);
      }
    });
  }
}