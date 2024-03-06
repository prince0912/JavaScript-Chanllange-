function activitySelection(activities)
{   
    // Sort activities based on their finish times
    activities.sort((a,b)=>a.finish - b.finish);

    // Select the first activity
    const selectedActivities = [activities[0]];

    let previousActivity = 0;

    // Iterate through the sorted activities
        for(let i = 1; i < activities.length ; i++)
        {
         // If the current activity's start time is greater than or equal to
        // the finish time of the previously selected activity, select it
        if(activities[i].start >= activities[previousActivity].finish)
        {
            selectedActivities.push(activities[i]);
            previousActivity = i;
        }
    }

    return selectedActivities;
}

 
const activities = [
    { start: 1, finish: 4 },
    { start: 3, finish: 5 },
    { start: 0, finish: 6 },
    { start: 5, finish: 7 },
    { start: 3, finish: 8 },
    { start: 5, finish: 9 },
    { start: 6, finish: 10 },
    { start: 8, finish: 11 },
    { start: 8, finish: 12 },
    { start: 2, finish: 13 },
    { start: 12, finish: 14 },
  ];

  const results = activitySelection(activities)
  console.log(`Selection Activity ${results}`)

  ///////////////// other way to solve this problem //////////////////////

  function activitySelectionProblem(activities){

    activities.sort((a, b) => a[1] - b[1]);

  const selectedActivities = [activities[0]]; // Select the first activity

  let previousActivity = 0;

  // Iterate through the sorted activities
  for (let i = 1; i < activities.length; i++) {
    // If the current activity's start time is greater than or equal to
    // the finish time of the previously selected activity, select it
    if (activities[i][0] >= activities[previousActivity][1]) {
      selectedActivities.push(activities[i]);
      previousActivity = i;
    }
  }

  return selectedActivities;

  }


  const activitiesArray = [
    [1, 4],
    [3, 5],
    [0, 6],
    [5, 7],
    [3, 8],
    [5, 9],
    [6, 10],
    [8, 11],
    [8, 12],
    [2, 13],
    [12, 14],
  ];

  const result = activitySelection(activitiesArray);
   console.log("Selected Activities:", result);