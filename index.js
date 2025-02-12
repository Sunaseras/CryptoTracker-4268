Добре, ось простий JavaScript код для обробки масиву об'єктів, що представляють студентів і їх оцінки. Цей код виконує такі базові операції з даними: сортування, фільтрацію, пошук та обрахунок статистики.

```javascript
// Створення масиву студентів
let students = [
  { id: 1, name: 'John', marks: [5, 4, 4, 5, 3] },
  { id: 2, name: 'Andrew', marks: [2, 3, 2, 3, 2] },
  { id: 3, name: 'Mary', marks: [5, 5, 5, 5, 5] },
  { id: 4, name: 'Kate', marks: [4, 4, 4, 4, 4] },
  { id: 5, name: 'Alex', marks: [3, 2, 3, 3, 2] },
  { id: 6, name: 'Sophia', marks: [3, 5, 4, 4, 5] },
  { id: 7, name: 'Max', marks: [5, 4, 5, 5, 4] },
  { id: 8, name: 'Emma', marks: [4, 3, 4, 4, 3] },
  { id: 9, name: 'Oliver', marks: [5, 5, 5, 4, 5] },
  { id: 10, name: 'Mason', marks: [3, 4, 3, 4, 3] }
];

// Сортування студентів за іменем
students.sort((a, b) => a.name.localeCompare(b.name));

// Пошук студента за ID
function findStudentById(id) {
  return students.find(student => student.id === id);
}

// Фільтрація студентів, які мають середній бал >= 4
function filterStudentsByAverageMark() {
  return students.filter(student => {
    let sum = student.marks.reduce((a, b) => a + b, 0);
    let avg = sum / student.marks.length;
    return avg >= 4;
  });
}

// Повертає середній бал всіх студентів
function computeAverageMark() {
  let sum = 0;
  let count = 0;

  students.forEach(student => {
    sum += student.marks.reduce((a, b) => a + b, 0);
    count += student.marks.length;
  });

  return (count > 0) ? sum / count : 0;
}

// Виклик функцій
console.log(findStudentById(5));
console.log(filterStudentsByAverageMark());
console.log(computeAverageMark());
```

Цей код займає менше 50 рядків, але він виконує базові операції обробки даних. Щоб створити більше коду, ви можете додати більше функцій або розширити існуючі функції.