import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class QuickSort {

    public static List<Integer> quickSort(List<Integer> arr) {
        if (arr.size() <= 1) {
            return arr;
        }
        int pivot = arr.get(0);
        List<Integer> leftArr = new ArrayList<>();
        List<Integer> rightArr = new ArrayList<>();

        for (int i = 1; i < arr.size(); i++) {
            if (arr.get(i) < pivot) {
                leftArr.add(arr.get(i));
            } else {
                rightArr.add(arr.get(i));
            }
        }
        List<Integer> sortedLeftArr = quickSort(leftArr);
        List<Integer> sortedRightArr = quickSort(rightArr);
        List<Integer> sortedArray = new ArrayList<>();

        sortedArray.addAll(sortedLeftArr);
        sortedArray.add(pivot);
        sortedArray.addAll(sortedRightArr);

        return sortedArray;
    }

    public static void main(String[] args) {
        List<Integer> unsortedArray = Arrays.asList(9, 2, 1, 3, 8, 4, 7, 5, 6);
        List<Integer> sortedArray = quickSort(new ArrayList<>(unsortedArray));

        System.out.println("Unsorted array: " + unsortedArray);
        System.out.println("Sorted array: " + sortedArray);
    }
}