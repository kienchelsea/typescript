interface List<Type> {
    length: number;
    [index: number]: Type;
}
const numberList: List<number> = [1, 2, 3];
const wordList: List<string> = ['Kien', 'Le'];
numberList.length

interface Student {
    id: number;
    name: string  
}
const listStudent: List<Student> = [{id: 1, name: 'Kien'}];