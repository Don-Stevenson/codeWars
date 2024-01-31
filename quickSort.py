def quick_sort(arr):
    if len(arr) <= 1:
        return arr  # Base case: already sorted

    pivot = arr[0]
    left = [x for x in arr[1:] if x < pivot]
    right = [x for x in arr[1:] if x >= pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)


# def quick_sort(arr):
#     if len(arr) <= 1:
#         return arr

#     pivot = arr[0]
#     left_arr = []
#     right_arr = []

#     for i in range(1, len(arr)):
#         if arr[i] < pivot:
#             left_arr.append(arr[i])
#         else:
#             right_arr.append(arr[i])

#     return quick_sort(left_arr) + [pivot] + quick_sort(right_arr)


unsorted_array = [9, 2, 1, 3, 8, 4, 7, 5, 6]
sorted_array = quick_sort(unsorted_array)

print("Unsorted array:", unsorted_array)
print("Sorted array:", sorted_array)