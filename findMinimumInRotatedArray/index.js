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

    binarySearchSolution(nums) {
        /**
         * APPROACH:
         * SAMPLE INPUT = [4,5,6,7,0,1,2]
         *
         * ROTATIONS
         * [1,2,3,4,5,6,7]
         * [7,1,2,3,4,5,6]
         * [6,7,1,2,3,4,5]
         * [5,6,7,1,2,3,4]
         * [4,5,6,7,1,2,3]
         * [3,4,5,6,7,1,2]
         * [2,3,4,5,6,7,1]
         * [1,2,3,4,5,6,7]
         *
         * If left is smaller than right then array is sorted. Returen left;
         * NOTE: Smallest value wouuld be in the part that is not sorted
         * Get Middle
         * Comapre middle with left and with right
         * If middle is greater than left, focus on the right section - Make middle left pointer, else make middle right pointer
         *
         */

        let lp = 0;
        let rp = nums.length - 1;

        while (lp < rp) {
            let mp = Math.floor(lp + (rp - lp) / 2);

            if (mp > 0 && nums[mp] < nums[mp - 1]) {
                return nums[mp];
            }

            if (nums[mp] >= nums[lp] && nums[mp] > nums[rp]) {
                lp = mp + 1;
            } else {
                rp = mp - 1;
            }
        }

        return nums[lp];
    }

    binarySearchSolution2(nums) {
        let min = nums[0];
        let lp = 0;
        let rp = nums.length - 1;

        while (lp <= rp) {
            if (nums[lp] < nums[rp]) {
                min = Math.min(nums[lp], res);
                break;
            } else {
                let mp = Math.floor(lp + (rp - lp) / 2);
                min = Math.min(min, nums[mp]);

                if (nums[mp] >= nums[lp]) {
                    lp = mp + 1;
                } else {
                    rp = mp - 1;
                }
            }
        }

        return min;
    }
}

const fmisa = new FindMinimumInRotatedSortedArray();
console.log(fmisa.binarySearchSolution([4, 5, 6, 7, 0, 1, 2]));
