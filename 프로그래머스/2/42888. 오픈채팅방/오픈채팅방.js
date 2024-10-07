function solution(record) {
    const userMap = {}; 
    const actions = []; 

    record.forEach(el => {
        const strList = el.split(" ");
        const action = strList[0];
        const userId = strList[1];
        if (action === "Enter") {
            const name = strList[2];
            userMap[userId] = name; 
            actions.push({ userId, action }); 
        } else if (action === "Leave") {
            actions.push({ userId, action });
        } else if (action === "Change") {
            const name = strList[2];
            userMap[userId] = name;
        }
    });

    const result = actions.map(({ userId, action }) => {
        const name = userMap[userId]; 
        if (action === "Enter") {
            return `${name}님이 들어왔습니다.`;
        } else if (action === "Leave") {
            return `${name}님이 나갔습니다.`;
        }
    });

    return result;
}
