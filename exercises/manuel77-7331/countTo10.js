function count_num() {
    for (var num = 0; num <= 10; num++) {
        setTimeout(() => {
            console.log(num);
        }, 1000 * num);
    }
}
count_num()


