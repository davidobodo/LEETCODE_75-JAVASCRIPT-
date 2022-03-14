// Problem Link : https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

class FindMinimumInRotatedSortedArray {
    linearSolution(nums) {
        /**
         * APPROACH
         * Go through entire array and check for the smallest value
         */

        let min = nums[0];

        for (let i = 0; i < nums.length; i++) {
            min = Math.min(nums[i], min);
        }

        return min;
        //TIME COMPLEXITY: O(n)
    }
}
