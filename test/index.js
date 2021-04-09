// // // 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

// // //  

// // // 示例 1：

// // // 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// // // 输出：[1,2,3,6,9,8,7,4,5]
// // // 示例 2：

// // // 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// // // 输出：[1,2,3,4,8,12,11,10,9,5,6,7]

// // /**
// //  * @param {number[][]} matrix
// //  * @return {number[]}
// //  */
// // var spiralOrder = function(matrix) {
// //     let arr = [];
// //     let flag = true;
// //     while(matrix.length && matrix[0].length) {
// //         if(flag) {
// //             let a = matrix.shift();
// //             arr = arr.concat(a);
// //             for(let i = 0; i<matrix.length;i++) {
// //                 arr.push(matrix[i].pop())
// //             }
// //         } else {
// //             arr = arr.concat(matrix.pop().reverse());
// //             for(let i = matrix.length - 1;i>=0;i--) {
// //                 arr.push(matrix[i].shift())
// //             }
// //         }
// //         flag = !flag;
// //     } 
// //     return arr
// // };
// // var arr = [
// //     [7],[9],[6]
// // ]
// // console.log(spiralOrder(arr))



// let tasks = [{
//     name: 'a',
//     taskTime: 60,
// }, {
//     name: 'b',
//     taskTime: 30
// }, {
//     name: 'c', 
//     taskTime: 10
// }]
// function runTask(n, tasks) {
//     tasks = tasks.sort((a, b) => {
//         return b.taskTime - a.taskTime
//     })

//     let arr = [];
//     let i = 0;
//     while(arr.length <= n) {
//         arr.push(tasks[i]);
//         i++
//     }
//     function doTask(task) {
//         setTimeout(() => {
//             console.log(task.name);
//             if(i < tasks.length) {
//                 console.log(tasks[i])
//                 i++
//                 doTask(task[i])
//             }
//         }, task.taskTime)
//     }
//     arr.forEach((a) => {
//         doTask(a)
//     })
// }


// runTask(2, tasks)