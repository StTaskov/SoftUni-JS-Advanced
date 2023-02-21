class Story{
    #comments 
    #likes
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this.#comments = [];
        /*
        comments = [{
            id,
            username,
            content,
            replies
        }]
        */ 
        this.#likes = [];
    }

    get likes(){
        if (this.#likes.length == 0){
            return `${this.title} has 0 likes`
        }else if (this.#likes.length == 1){
            return `${this.#likes[0]} likes this story!`
        }else{
            return `${this.#likes} and ${this.#likes.length - 1} others like this story!`
        }
    }

    like(username){
        if (this.#likes.indexOf(username) > -1){
            return "You can't like the same story twice!"
        }else if(username == this.creator){
            return "You can't like your own story!"
        }else{
            this.#likes.push(username)
            return `${username} liked ${title}!`
        }
    }   

    dislike(username){
        if (this.#likes.indexOf(username) == -1){
            throw new Error("You can't dislike this story!")
        }else{
            this.#likes.splice(this.#likes.indexOf(username), 1)
        }
    }

    comment(username, content, id){
        if(id == undefined || !this.#comments.some(id) ){
            this.#comments.push({id, username, content, replies: []})
        }
    }

}

let art = new Story("My Story", "Anny");
console.log(Story.likes);
