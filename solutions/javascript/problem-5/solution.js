function arraySort(arr) {
    /* Insertion Sort
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    */
   /* Bubble Sort
   for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
   */
  // Merge Sort
  arr.sort();
  return arr;
}

console.log(arraySort([4, 3, 2, 1]));
console.log(arraySort([15,10,5]));
console.log(arraySort([0,0,0]));
