let age: number;
let nameStr: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback = (a: number) => {};
    
    
age = 50;
nameStr = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => { return 100 + a };

// будь яка змінна
let anything: any
anything = -20;
anything = 'Text';
anything = {};

// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом(Unknown).
let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
    str = some;
}

// Зробіть незмінний масив із суворо описаними типами(Tuple). Масив для прикладу.
let person: [string, number];

person = ['Max', 21];

// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
enum Status { LOADING, READY }

const page = {
    status: Status.LOADING
}

if (page.status === Status.LOADING) {
    console.log('Сторінка завантажується')
}

if (page.status === Status.READY) {
    console.log('Сторінка завантажена')
}

// Зробіть змінну, яка може приймати або рядок, або число.

let union: string | number;

union = 'asr';
union = 10;

// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'

let literal: 'enable' | 'disable';

// Вкажіть типи для наступних функцій
function showMessage(message:string):void {
  console.log(message);
}

showMessage('asr');

function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}

// Створіть свій тип даних на основі наявних даних.

const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  }
}