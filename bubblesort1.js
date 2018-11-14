function bubblesort(arr) {
    // Initial number of each switch to 0
    let switches = 0;
    for (let i = arr.length; i > 0; i--) {
        // double for loop so that the number can check next to it for a switch to be made
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

        if (switches == 0) {
            break;
        }
    }

    return arr;
}

// Test with:
  // console.log(bubblesort([10, 5, 3, 0, 1]));
  // console.log(bubblesort([8, 7, 4, 13, 15, 2, 3, 5]));