import { Main } from './main';
import Parser from './middleware/parser'

const parser = new Parser()
const app = new Main(parser);

app.start();