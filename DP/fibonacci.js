function fibonacci(n, map) {
    if (n <= 2) {
        if (n == 0) {
            return 0;
        }
        else {
            return 1;
        }
    }
    const first = map[n - 1] ? map[n - 1] : fibonacci(n - 1, map);
    const second = map[n - 2] ? map[n - 2] : fibonacci(n - 2, map);
    return map[n] = first + second;
}


console.log(fibonacci(1500, {}))