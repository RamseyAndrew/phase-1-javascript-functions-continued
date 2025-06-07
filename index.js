// function 1
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// function 2
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// function 3
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`
  };
}
