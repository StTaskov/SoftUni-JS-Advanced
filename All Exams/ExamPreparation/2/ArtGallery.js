class ArtGallery {
    constructor(creator) {
        this.creator = creator
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250
        }
        this.listOfArticles = []
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase()
        let neededArticle = this.listOfArticles.find(o => o.articleName == articleName)

        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!')
        } else if (this.possibleArticles[articleModel] && neededArticle) {
            neededArticle.quantity += parseInt(quantity)
        } else {
            this.listOfArticles.push({
                articleModel: articleModel.toLowerCase(),
                articleName,
                quantity: parseInt(quantity),
            })
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        let neededGuest = this.guests.find(o => o.guestName == guestName)
        let guestPerosnalities = {
            'Vip': 500,
            'Middle': 250

        }

        if (neededGuest) {
            throw new Error(`${guestName} has already been invited.`)
        } else {
            this.guests.push({
                guestName,
                points: guestPerosnalities[personality] ? guestPerosnalities[personality] : 50,
                purchaseArticle: 0
            })

            return `You have successfully invited ${guestName}!`
        }
    }

    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase()
        let neededArticle = this.listOfArticles.find(o => o.articleModel == articleModel && o.articleName == articleName)
        let neededGuest = this.guests.find(o => o.guestName == guestName)

        if (!this.possibleArticles[articleModel] || !neededArticle) {
            throw new Error('This article is not found.')
        } else if (neededArticle.quantity == 0) {
            return `The ${articleName} is not available.`
        } else if (!neededGuest) {
            return 'This guest is not invited.'
        } else {
            if (neededGuest.points < this.possibleArticles[articleModel]) {
                return 'You need to more points to purchase the article.'
            } else {
                neededGuest.points -= this.possibleArticles[articleModel]
                neededGuest.purchaseArticle += 1
                neededArticle.quantity -= 1
                return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
            }
        }
    }
    showGalleryInfo(criteria) {
        if (criteria == 'article') {
            let lastItem = this.listOfArticles[this.listOfArticles.length - 1]
            let result = 'Articles information:\n'
            this.listOfArticles.forEach(o => {
                if (lastItem === o) {
                    result += `${o.articleModel} - ${o.articleName} - ${o.quantity}`
                } else {
                    result += `${o.articleModel} - ${o.articleName} - ${o.quantity}\n`
                }
            })
            return result

        } else if (criteria == 'guest') {
            let lastGuest = this.guests[this.guests.length - 1]
            let result = 'Guests information:\n'
            this.guests.forEach(o => {
                if (o === lastGuest) {
                    result += `${o.guestName} - ${o.purchaseArticle}`
                } else {
                    result += `${o.guestName} - ${o.purchaseArticle}\n`
                }

            })
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
