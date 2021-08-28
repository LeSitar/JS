
start();
function start() {
    const company = createCompany('ABC', 10);
    const doc = createDoc('ADAC-July', company.team);
    console.log(company);
    console.log(doc);
}


function createCompany(name,qty) {
    return {
        name: name,
        qty: qty,
        team:crateTeam(qty),
    }
}

function crateTeam(quantity) {
    const team = [];
    for (let i = 0; i < quantity; i++){
    team.push({
        name: `employee_${i+1}`,
        hours: Math.floor(Math.random()*120),
        rate: 30
    });
        return team;
}
}
function createDoc(name,personals) {
    return {
        name: name,
        list: createList(personals),
        total: getTotal(personals)
    }
    
}
function createList(team) {
    let list = [];
    for (let i = 0; i < team.length; i++) {
        list.push({
            name: team[i].name,
            salary: team[i].hours * team[i].rate,
        })
    }
    return list;
}
function getTotal(team) {
    let sum = 0;
    for (let i = 0; i < team.length; i++) {
        sum += team[i].hours*team[i].rate;
    } return sum;
}