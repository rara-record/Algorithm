/*

1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

*/

// 처음 작성한 코드
{
    let id = "z-+.^.";

    function solution(new_id) {
        var answer = new_id;
        answer = answer.toLowerCase() // 1단계
            .replace(/[^\w\.\-]/g, '') // 2단계 
            .replace(/[\.]{2,}/g, '.') // 3단계 : 마침표가 2번 이상이면 하나로 치환
            .replace(/^\./, '') // 4단계 : 처음 위치한 마침표 제거
            .replace(/\.$/, ''); // 5단계 : 마지막 마침표 제거
        
        if (answer === "") answer += "a";
        
        if (answer.length >= 16) 
        answer = answer.substring(0, 15).replace(/\.$/,''); // 마지막이 마침표로 끝나는 것을 생각하지 못함
    
        while (answer.length <= 2) {
            answer = answer.substring(answer.length-1, answer.length); // 대입만 하고 합산을 안해줘서 반복문이 끝나지 않음 
        }
        return answer
    }
    const resulte = solution(id);
    console.log(resulte)
}


// 최종 코드
{
    let id = "123_.def"

    function solution(new_id) {
        var answer = new_id;
        answer = answer
            .toLowerCase() // 1단계
            .replace(/[^\w\.\-]/g, '') // 2단계 
             .replace(/[\.]{2,}/g, '.') // 3단계 : 마침표가 2번 이상이면 하나로 치환
            .replace(/^\./, '') // 4단계 : 처음 위치한 마침표 제거
            .replace(/\.$/, ''); // 5단계 : 마지막 마침표 제거
    
            if (!answer) answer = "a"; // 5단계 : 빈 문자열이면 "a"를 대입
    
            if (answer.length >= 16) {
                const new_answer = answer.slice(0, 15).replace(/\.$/,''); // 6단계 : 길이가 15글자까지
                return new_answer;
            }
    
            if (answer.length <= 2) {
                const new_answer = answer.padEnd(3, answer[answer.length - 1]); // 7단계
                return new_answer;
                 // 두글자 이하인 경우, 마지막 문자를 길이가 3이 될때까지 반복
            }

            return answer;
    }
    const resulte = solution(id);
    console.log(resulte)
}



// 다른 풀이
{
    function solution(new_id) {
        const answer = new_id
            .toLowerCase() // 1
            .replace(/[^\w\-\.]/g, '') 
            .replace(/\.+/g, '.') 
            .replace(/^\.|\.$/g, '') 
            .replace(/^$/, 'a') 
            .slice(0, 15).replace(/\.$/, ''); 
        const len = answer.length;
        return len > 2 ? answer : answer.padEnd(3,answer[len-1]);
    }
    const resulte = solution(id);
    console.log(resulte)
}

    /* 
        replace : 문자열에서 정규 표현식에 일치하는 일부 또는 전부가 인수로 지정된 문자열로 교체된 새로운 문자열을 반환한다.

        padEnd : 현재 문자열에 인수로 지정된 길이만큼 지정 문자로 채워 새로운 문자열로 반환한다.

        [ 정규표현식 정리하기 ]
        ^ : 문장의 시작
        $ : 문장의 끝
        \w : word 문자
        .{2,} : .이 최소 2개 이상
        | : 또는

    */ 

