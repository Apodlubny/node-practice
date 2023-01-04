/*
Требования к функции:
1. Получает год в виде целого числа.
2. Возвращает true, если год высокосный (в году 366 дней, в феврале - 29),
и false - если год невысокосный.
3. Выбрасывает ошибку с соотвествующим текстом, если получает неправильный
аргумент. 
Критерии высокосного года:
- делиться без остатка 4;
- не делиться без остатка на 100;
- может делиться без остатка на 400;
- от 42 и больше;
2008 - true
2003 - false
2000 - true
1900 - false
41 - ошибка 'Year must me 42 or more'
2008.4 - ошибка 'Year must be integer'
() - ошибка 'Year must be exist'
"2008" - ошибка 'Year must be number'
null - ошибка 'Year must be number'
true - ошибка 'Year must be number'
false - ошибка 'Year must be number'
()=>{} - ошибка 'Year must be number'
{} - ошибка 'Year must be number'
[] - ошибка 'Year must be number'
*/