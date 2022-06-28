# Binary Search

Binary search is an efficient algorithm for finding an element in a sorted array. It uses a decrease and conquer strategy, where the array is subdivided into two parts, and the search is performed on the relevant part.

## Algorithm

1. Find the middle element of the array.
2. If the middle element is the searched element, return its index.
3. If the middle element is greater than the searched element, then the searched element must be in the left half of the array.
4. If the middle element is less than the searched element, then the searched element must be in the right half of the array.
5. Repeat steps 2-4 until the element is found or the array is empty.

## Complexity

Time Complexity: O(log n)

Space Complexity: O(1)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
