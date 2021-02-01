
function helper(a) {
  if (a[0].length == 0) {
    return a[2];
  } else {
    for (var i = 0; i < a[1]; i++) {
      a[2].push(a[0][0]);
    }
    a[0].shift();
    a[1] = a[1]+1;
    return helper(a);
  }
}
export function stretched(a){
  var arr = [a, 1, []];
  return helper(arr);
} 
function* helper2(start, end) {
    for(let power = 1; power <= end; power *= start) {
      yield power;
    }
}


export function say(args)
{   
    const arr = [];
    function finalString(fullString){
        if(fullString === undefined){
            return arr.join(' ');//collect all words
        }
       arr.push(fullString);//Getting full string
       return finalString;
    }
    return finalString(args);//go to function
}

export function powers(start, end){
    const p = helper2(start, end)
    return p;
} 

export function topTenScorers(input){
    
  const res =  Object.entries(input).flatMap(([team, players]) => players.map(p=>[...p, team])).filter(([, games, , ]) => games >= 15).map(p => [p[0], p[2]/p[1], p[3]]).sort(function(a, b){
    return b[1]-a[1];
  }).slice(0, 10);
  var ans = [];
  for (var i = 0; i < res.length; i++) {
    var j = {}
    j.name = res[i][0]
    j.ppg = res[i][1]
    j.team = res[i][2]
    ans.push(j)
  }

  return ans;
} 

export function interpret(){
    return "";
}