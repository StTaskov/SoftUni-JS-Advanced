function project_maker(input){
    maker = input[0]
    project = Number(input[1])
    console.log(`The architect ${maker} will need ${project * 3} hours to complete ${project} project/s.`)
}

project_maker(["George", "4"])
