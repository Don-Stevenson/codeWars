package main

import "fmt"

func quickSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	pivot := arr[0]
	var leftArr []int
	var rightArr []int

	for i := 1; i < len(arr); i++ {
		if arr[i] < pivot {
			leftArr = append(leftArr, arr[i])
		} else {
			rightArr = append(rightArr, arr[i])
		}
	}
	return append(append(quickSort(leftArr), pivot), quickSort(rightArr)...)
}

func main() {
	arr := []int{3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5}
	sortedArr := quickSort(arr)
	fmt.Println(sortedArr)
}