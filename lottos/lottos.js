/*
    입출력 예
    [44, 1, 0, 0, 31, 25]  [31, 10, 45, 1, 6, 19]   결과값 : [3, 5]
    [0, 0, 0, 0, 0, 0]  [38, 19, 20, 40, 15, 25]    결과값 : [1, 6]
    [45, 4, 35, 20, 3, 9]  [20, 9, 3, 45, 4, 35]    결과값 : [1, 1]
*/ 

const lottos = [25, 20, 12, 3, 5, 9];
const win_nums = [31, 10, 45, 1, 6, 19];

function solution(lottos, win_nums) {
    var answer = [];
    
    // 맞춘 숫자
    const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
    console.log(correct)

    // 0의 숫자
    const zeros = lottos.filter(lotto => lotto === 0).length;
    console.log(zeros)


    // 최저 순위 : 0 이외의 숫자 중에 맞춘 갯수
    // 다맞을 경우 1등, 6-6 = 0등 이므로 7로 설정
    let min = 7 - correct >= 6 ? 6 : 7 - correct;

    // 최고 순위 : 맞춘 숫자 + 0개의 갯수
    // 다 맞으면 0 - 0 이므로, 작거나 같을 경우 1로 설정
    let max = min - zeros <= 1 ? 1 : min - zeros;

    answer = [max, min]
    return answer;
}
const resulte = solution(lottos, win_nums);
console.log(resulte)