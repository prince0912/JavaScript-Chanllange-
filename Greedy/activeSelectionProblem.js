//  Activity Selection Problem: Given a set of activities, along with the starting and finishing time 
//  of each activity, find the maximum number of activities performed by a single person assuming that 
//  a person can only work on a single activity at a time.
// Let’s assume there exist n activities each being represented by a start time si and finish time fj. 
// Two activities i and j are said to be non-conflicting if si = fj or sj = fi.

function activitySelection(start, end){
    const n = start.length;

    // create a activity to store select activity
    const selectionActivity = [];

    // Sort activity on time frame 
    const activities = [];

    for(let i = 0 ; i<n ; i++)
    {
        activities.push({start:start[i], end:end[i], index:i})
    }

    activities.sort((a,b)=>a.end - b.end)

    // the first activity alwasy selectd

    selectionActivity.push(activities[0].index)

  // consider the rest of activity 
  let prevActivity = 0 ;

  for (let i = 1 ; i< n; i++){
    // If the start time of the current activity is greater than or equal to the end time of the previous activity, select it
    if(activities[i].start >= activities[prevActivity].end){
        selectionActivity.push(activities[i].index);
        prevActivity = i;
    }

  }

 return selectionActivity; 

}

const startTime = [1, 3, 0, 5, 8, 5];
const endTime =  [2, 4, 6, 7, 9, 9];

const result =  activitySelection(startTime, endTime)
console.log(`Selection Activity: ${result}`)



