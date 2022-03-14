// Problem link :  https://leetcode.com/problems/container-with-most-water/

class ContainerWithMostWater {
    bruteForce(height) {
        let max = 0;

        for (let i = 0; i < height.length - 1; i++) {
            for (let j = i + 1; j < height.length; j++) {
                const area = Math.min(height[i], height[j]) * j - i;

                max = Math.max(area, max);
            }
        }

        return max;
    }

    twoPointers(height) {
        /**
         * ANALYSIS
         */
    }
}
