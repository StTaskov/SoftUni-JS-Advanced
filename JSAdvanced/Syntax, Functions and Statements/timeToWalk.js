function timeToWalk(steps, footMeters, kmh){
    let kmNeededForWalk = steps * footMeters / 1000
    let timeNeedenMinutes = kmNeededForWalk / kmh * 60 
    let breakNeeeded = Math.floor(kmNeededForWalk / 0.5)

}

timeToWalk(4000, 0.60, 5)