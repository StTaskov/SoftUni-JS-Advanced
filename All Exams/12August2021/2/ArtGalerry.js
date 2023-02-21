class ArtGallery{
    constructor(creator){
        this.creator = creator
        this.possibleArticles = {
            'picture': 200,
            'photo': 50,
            'item':250,
        }
        this.listOfArticles = []
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity){
        articleModel = articleModel.toLowerCase()
        let hasArticle = this.listOfArticles.find(o => o.articleName === articleName)
        if (!this.possibleArticles[articleModel]){
            throw new Error('This article model is not included in this gallery!')
        }

        if (this.possibleArticles[articleModel] && hasArticle){
            hasArticle.quantity += Number(quantity)
        }else{
            this.listOfArticles.push({articleModel, articleName, quantity})
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }   

    inviteGuest(guestName, personality){
        const points = {
            'Vip': 500,
            'Middle': 250, 
        }

        if (this.guests.find(o => o.guestName === guestName)){
            throw new Error(`${guestName} has already been invited.`)
        }else{
            this.guests.push({
                guestName,
                points: points.hasOwnProperty(personality) ? points[personality] : 50,
                purchaseArticle: 0,
            })
        }
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName){
        let currentGuest = this.guests.find(g => g.guestName === guestName)
        let currentArticle = this.listOfArticles.find(a => a.articleName === articleName)
        let currentArticlePonits = this.possibleArticles[articleModel]

        if(currentArticle.articleModel !== articleModel || !currentArticle){
            throw new Error("This article is not found.")
        }
        if(currentArticle.quantity === 0){
            return `The ${articleName} is not available.`
        }
        if(!currentGuest){
            return 'This guest is not invited.'
        }

        if(currentGuest.points < currentArticlePonits){
            return 'You need more points to purchase the article.'
        }else{
            currentGuest.points -= currentArticlePonits
            currentGuest.purchaseArticle += 1
            currentArticle.quantity -= 1
        }

        return `${guestName} successfully purchased the article worth ${currentArticlePonits} points.`
    }   

    showGalleryInfo(criteria){
        if(criteria == 'article'){
            let result = 'Articles information:\n'
            let lastArticle = this.listOfArticles[this.listOfArticles.length - 1]
            for (const article of this.listOfArticles) {
                if(article === lastArticle){
                    result += `${article.articleModel} - ${article.articleName} - ${article.quantity}`
                }else{
                    result += `${article.articleModel} - ${article.articleName} - ${article.quantity}\n`
                }
            }
            return result 
        }else if (criteria == 'guest'){
            let result = 'Guests information:\n'
            let lastGuest = this.guests[this.guests.length - 1]
            for (const guest of this.guests) {
                if(guest === lastGuest){
                    result += `${guest.guestName} - ${guest.purchaseArticle}`
                }else{
                    result += `${guest.guestName} - ${guest.purchaseArticle}\n`
                }
                
            }
            return result
        }
    }
}
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
