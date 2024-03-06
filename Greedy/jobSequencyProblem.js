//Job Sequencing Problem with Deadlines
// Given a list of tasks with deadlines and total profit earned on completing a task, 
// find the maximum profit earned by executing the tasks within the specified deadlines. 
// Assume that each task takes one unit of time to complete, and a task can’t execute beyond its deadline. 
// Also, only a single task will be executed at a time.


class Job{
    constructor(id, deadline, profit){
        this.id = id;
        this.deadline = deadline;
        this.profit = profit;
    }
}

function JobSequencyWithDeadline(jobs){
    // soft job in decresing profit 
    jobs.sort((a,b)=>b.profit - a.profit);
    

    const maxDeadline =Math.max(...jobs.map(job =>job.deadline));
    
    const result = new Array(maxDeadline).fill(null);
   

    for(const job of jobs){
        console.log(job)
        for(let i = job.deadline -1; i >=0; i--){
            if(!result[i]){
                console.log(result[i])
                result[i] = job;
                break;
            }
        }
    } 

    return result.filter(job => job !== null);

}


// Example usage:
const jobs = [
  new Job(1, 2, 20),
  new Job(2, 1, 10),
  new Job(3, 3, 30),
  new Job(4, 2, 40),
];

const scheduledJobs = JobSequencyWithDeadline(jobs);
console.log("Scheduled Jobs:", scheduledJobs);