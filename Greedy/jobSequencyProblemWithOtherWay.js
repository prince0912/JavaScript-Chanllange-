
function jobSequencingWithDeadling(jobs){
     jobs.sort((a,b) => b.profit - a.profit)

     const maxDeadline = Math.max(...jobs.map(job => job.deadline));
    
     const scheduledJobs = new Array(maxDeadline).fill(null);
     
     for(const job in jobs){

         let slot = job.deadline - 1;

        while(slot >= 0 && scheduledJobs[slot] !== null ){
            slot--
        }
        if(slot >= 0){
            scheduledJobs[slot] = job;
        }
     }

     const selectedJobs = scheduledJobs.filter((job)=> job != null)
     const totalProfit =  selectedJobs.reduce((sum, job)=>sum + job.profit, 0);

     return { selectedJobs , totalProfit }

}

// Example usage:
const jobs = [
    { id: "J1", deadline: 2, profit: 60 },
    { id: "J2", deadline: 1, profit: 100 },
    { id: "J3", deadline: 3, profit: 20 },
    { id: "J4", deadline: 2, profit: 40 },
  ];
 
  const result = jobSequencingWithDeadling(jobs);
  console.log("Selected Jobs:", result.selectedJobs);
  console.log("Total Profit:", result.totalProfit);