function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          const tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
  
    return arr;
  }
  
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = bubbleSort(unsortedArray.slice());
  
  console.log('Не відсортований масив:', unsortedArray);
  console.log('Відсортований масив:', sortedArray);
  