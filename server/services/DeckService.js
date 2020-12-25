const logger = require('../log.js');

class DeckService {
    constructor(db) {
        this.db = db;
        this.decks = db.get('decks');
    }

    getById(id, eventName) {
        let deckCollection=this.decks;
        if(eventName && eventName!='None'){
            deckCollection=this.db.get(eventName);
        }
        return deckCollection.findOne({ _id: id })
            .catch(err => {
                logger.error('Unable to fetch deck', err);
                throw new Error('Unable to fetch deck ' + id);
            });
    }

    getByName(name) {
        return this.decks.findOne({ name })
            .catch(err => {
                logger.error('Unable to fetch deck', err);
                throw new Error('Unable to fetch deck ' + name);
            });
    }

    getByStandaloneId(id) {
        return this.decks.findOne({ standaloneDeckId: id })
            .catch(err => {
                logger.error('Unable to fetch standalone deck', err);
                throw new Error('Unable to fetch standalone deck ' + id);
            });
    }

    findByUserName(userName, eventName) {
        if(eventName && eventName!='None'){
          return this.db.get(eventName).find({ username: userName }, { sort: { lastUpdated: -1 } });
        }
        return this.decks.find({ username: userName }, { sort: { lastUpdated: -1 } });
    }

    getStandaloneDecks() {
        return this.decks.find({ standaloneDeckId: { $exists: true } }, { sort: { lastUpdated: -1 } });
    }

    create(deck, eventName) {
        let properties = {
            username: deck.username,
            name: deck.deckName,
            plotCards: deck.plotCards,
            bannerCards: deck.bannerCards,
            drawCards: deck.drawCards,
            faction: deck.faction,
            agenda: deck.agenda,
            rookeryCards: deck.rookeryCards || [],
            lastUpdated: new Date()
        };
        if(eventName && eventName!='None'){
           this.db.get(eventName).insert(properties);
        }

        return this.decks.insert(properties);
    }

    createStandalone(deck) {
        let properties = {
            name: deck.name,
            plotCards: deck.plotCards,
            bannerCards: deck.bannerCards,
            drawCards: deck.drawCards,
            faction: deck.faction,
            agenda: deck.agenda,
            rookeryCards: deck.rookeryCards || [],
            lastUpdated: deck.lastUpdated,
            standaloneDeckId: deck.standaloneDeckId
        };

        return this.decks.insert(properties);
    }

    update(deck, eventName) {
        let properties = {
            name: deck.deckName,
            plotCards: deck.plotCards,
            drawCards: deck.drawCards,
            bannerCards: deck.bannerCards,
            faction: deck.faction,
            agenda: deck.agenda,
            rookeryCards: deck.rookeryCards || [],
            lastUpdated: new Date()
        };
        if(eventName && eventName!='None'){
           this.db.get(eventName).update({ _id: deck.id }, { '$set': properties });
        }

        return this.decks.update({ _id: deck.id }, { '$set': properties });
    }

    delete(id, eventName) {
        let deckCollection=this.decks;
        logger.info('delete deck log');
        if(eventName && eventName!='None'){
            deckCollection=this.db.get(eventName);
        }
        return deckCollection.remove({ _id: id });
    }
}

module.exports = DeckService;

