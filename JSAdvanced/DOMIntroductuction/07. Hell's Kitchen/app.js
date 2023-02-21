function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      result = {}
      // 1. Get elements from HTML
      let resuratnElement = document.querySelector('#inputs textarea')
      let restaurants = JSON.parse(resuratnElement.value)
      
      // 2. Split the data
      for (let index = 0; index < restaurants.length; index++) {
         let [currentRetaurant, workersString] = restaurants[index].split(' - ')
         let workers = workersString.split(', ').map(x => {
            [workerName, workerSalary] = x.split(' ')
            return {name: workerName, salary: Number(workerSalary)}
         })
         if (!result[currentRetaurant]) {
         result[currentRetaurant] = {
            workers: [],
            getAvg: () => {
               let avg = this.workers.reduce((acc, el) => acc + el, 0) / this.workers.length
               return avg
            }
            }
         }
         result[currentRetaurant] = result[currentRetaurant].workers.concat(workers)
      }
      // Find the Best 
      let sortedRestaurants = Object.entries(result).sort((a, b) => b[1].getAvg() - a[1].getAvg())
      let best = sortedRestaurants[0]
      let sortedWorkers = best.workers.sort()
      let bestString = `"Name: ${best[0]} Average Salary: ${best[1].getAvg()} Best Salary: ${}"`

      // Place it in the document
      let placeHolderRestaurant = document.querySelector('#bestRestaurant p')
      placeHolderRestaurant.textContent = best
   } 


}