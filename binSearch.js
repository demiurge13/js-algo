let binSearch = (list, goal, low, hight) => {
    if (!low && !hight) low = 0, hight = list.length - 1;
    const ind = Math.floor((low + hight) / 2),
          guess = list[ind];
    if (guess > goal) hight = ind;
    else if (guess < goal) low = ind;
    else return ind;
    return binSearch(list, goal, low, hight)
}