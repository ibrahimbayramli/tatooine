import * as Cards from "./methods/cards";
import nanoid from "../../utils/nanoid";
import * as Logs from "../../utils/logs";
import Iyzipay from "iyzipay";

/*-------------------------------------------------------------------------------------------*/
/*

a) CARDS

*/
/*-------------------------------------------------------------------------------------------*/

//Bir kullanici olustur.
const createUserAndCards = () => {
    Cards.createUserCard({
        locale: Iyzipay.LOCALE.TR,
        conversationId: nanoid(),
        email:"email@email.com",
        externalId:nanoid(),
        card:{
            cardAlias:"Kredi Kartim",
            cardHolderName:"Jhon Doe",
            cardNumber:"5528790000000008",
            expireMonth:"12",
            expireYear:"2030"
        }
    }).then((result) => {
        console.log(result);
        Logs.logFile("1-cards-kullanici-ve-kart-olustur", result)
    })
        .catch((err) => {
            console.log(err);
            Logs.logFile("1-cards-kullanici-ve-kart-olustur-hata", err)
        })
}

// createUserAndCards();

//Bir kullaniciya yeni bir kart ekleme
const createACardForAUser = () => {
    Cards.createUserCard({
        locale: Iyzipay.LOCALE.TR,
        conversationId: nanoid(),
        email:"email@email.com",
        externalId:nanoid(),
        cardUserKey: "wI13Qe4UN49sqt6Dh1OwKjDA6NM=",
        card:{
            cardAlias:"Kredi Kartim1",
            cardHolderName:"Jhon Doe",
            cardNumber:"5528790000000008",
            expireMonth:"12",
            expireYear:"2030"
        }
    }).then((result) => {
        console.log(result);
        Logs.logFile("2-cards-bir-kullaniciya-kart-ekle", result)
    })
        .catch((err) => {
            console.log(err);
            Logs.logFile("2-cards-bir-kullaniciya-kart-ekle-hata", err)
        })
}

// createACardForAUser();

//Bir kullanicinin kartlarini oku

const readCardsOfAUser = () => {
    Cards.getUserCards({
        locale: Iyzipay.LOCALE.TR,
        conversationId: nanoid(),
        cardUserKey: "wI13Qe4UN49sqt6Dh1OwKjDA6NM=",

    }).then((result) => {
        console.log(result);
        Logs.logFile("3-cards-bir-kullanicinin-kartlarini-oku", result)
    })
        .catch((err) => {
            console.log(err);
            Logs.logFile("3-cards-bir-kullanicinin-kartlarini-oku-hata", err)
        })
}

// readCardsOfAUser();

//Bir kullanicinin kartini sil.

const deleteUserCard = () => {
    Cards.deleteUserCards({
        locale: Iyzipay.LOCALE.TR,
        conversationId: nanoid(),
        cardUserKey: "wI13Qe4UN49sqt6Dh1OwKjDA6NM=",
        cardToken:"gJkiOJBwmPMwMHULASf/uVjwBwM="

    }).then((result) => {
        console.log(result);
        Logs.logFile("4-cards-bir-kullanicinin-kartini-sil", result)
    })
        .catch((err) => {
            console.log(err);
            Logs.logFile("4-cards-bir-kullanicinin-kartini-sil-hata", err)
        })
}

deleteUserCard();
readCardsOfAUser();