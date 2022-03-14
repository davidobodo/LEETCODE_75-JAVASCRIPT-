// Problem link :  https://leetcode.com/problems/container-with-most-water/

class ContainerWithMostWater {
    bruteForce(height) {
        let max = 0;

        for (let i = 0; i < height.length - 1; i++) {
            for (let j = i + 1; j < height.length; j++) {
                const area = Math.min(height[i], height[j]) * (j - i);

                max = Math.max(area, max);
            }
        }

        return max;
        //TIME COMPLEXITY: O(n²)
    }

    twoPointers(height) {
        /**
         * APPROACH:
         * Initialize two pointers, one at the start and one at the end
         * Focus on the side with the greater height
         * Calculate the area formed by both sides
         * Compare area with set maximum, and set maximum accordingly
         * Check for the shorter height between both sides of the container and adjust depending on which is shorter (If left, increment left, if right decrement right)
         */

        let max = 0;

        let leftPointer = 0;
        let rightPointer = height.length - 1;

        while (leftPointer < rightPointer) {
            const area = Math.min(height[leftPointer], height[rightPointer]) * (rightPointer - leftPointer);
            max = Math.max(area, max);
            if (height[leftPointer] < height[rightPointer]) {
                leftPointer++;
            } else {
                rightPointer--;
            }
        }

        return max;
        //TIME COMPLEXITY: O(n)
    }
}

const cmmw = new ContainerWithMostWater();
console.log(cmmw.twoPointers([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(cmmw.bruteForce([1, 8, 6, 2, 5, 4, 8, 3, 7]));
