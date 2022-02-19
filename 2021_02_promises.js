function createPromise(value, delay, error) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject(error);
            }
            resolve(value);
        }, delay);
    });
}

const p1 = createPromise(1, 250);
const p2 = createPromise(2, 700);
const p3 = createPromise(3, 150, 'Error');
const p4 = createPromise(4, 250, 'Error2');

async function start() {
    // Promise.any ждёт когда выполнится хотыбы один из промисов
    const res = await Promise.any([p1, p2, p3]);
    console.log(res);

    // Как Promise.any работает с ошибками
    try {
        // Если все промисы с ошибками то выполнится catch
        const res = await Promise.any([p3, p4]);
        console.log(res);
    } catch (e) {
        // Вывод новой ошибки AggregateError
        console.log(e);
        // Можно посмотреть массив всех ошибок
        console.log(e.errors);
    }
}

start().then()
