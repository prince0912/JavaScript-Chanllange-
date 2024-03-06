function towerOfHanoi(noOfDisk, fromRod, toRod, usingRod)
{
  if(noOfDisk === 1)
  {
    console.log(`MOVE Disk ${fromRod} to ${toRod}`)
    return
  }
  towerOfHanoi(noOfDisk-1,fromRod,usingRod, toRod)
    console.log(`Move Disk ${noOfDisk} from ${fromRod} to ${toRod}`);
  towerOfHanoi(noOfDisk-1, usingRod, toRod, fromRod)
}


console.log(towerOfHanoi(3,'A', 'C','B'))