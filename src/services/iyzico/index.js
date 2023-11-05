import * as Cards from "./methods/cards";
import * as Installments from "./methods/installments";
import * as Payments from "./methods/payments";
import nanoid from "../../utils/nanoid";
import * as Logs from "../../utils/logs";
import Iyzipay from "iyzipay";
import {checkInstallment} from "./methods/installments";

/*-------------------------------------------------------------------------------------------*/
/*a) CARDS*/
/*-------------------------------------------------------------------------------------------*/

//Bir kullanici olustur.
const createUserAndCards = () => {
    Cards.createUserCard({
        locale: Iyzipay.LOCALE.TR, conversationId: nanoid(), email: "email@email.com", externalId: nanoid(), card: {
            cardAlias: "Kredi Kartim",
            cardHolderName: "Jhon Doe",
            cardNumber: "5528790000000008",
            expireMonth: "12",
            expireYear: "2030"
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
        email: "email@email.com",
        externalId: nanoid(),
        cardUserKey: "wI13Qe4UN49sqt6Dh1OwKjDA6NM=",
        card: {
            cardAlias: "Kredi Kartim1",
            cardHolderName: "Jhon Doe",
            cardNumber: "5528790000000008",
            expireMonth: "12",
            expireYear: "2030"
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
        locale: Iyzipay.LOCALE.TR, conversationId: nanoid(), cardUserKey: "wI13Qe4UN49sqt6Dh1OwKjDA6NM=",

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
        cardToken: "gJkiOJBwmPMwMHULASf/uVjwBwM="

    }).then((result) => {
        console.log(result);
        Logs.logFile("4-cards-bir-kullanicinin-kartini-sil", result)
    })
        .catch((err) => {
            console.log(err);
            Logs.logFile("4-cards-bir-kullanicinin-kartini-sil-hata", err)
        })
}

// deleteUserCard();
// readCardsOfAUser();

/*-------------------------------------------------------------------------------------------*/
/*b) INSTALLMENT*/
/*-------------------------------------------------------------------------------------------*/

//Bir kart ve ucretlerle ilgili gerceklesebilecek taksitlerin kontrolu

const checkInstallments = () => {
    Installments.checkInstallment({
        locale:Iyzipay.LOCALE.TR,
        conversationId:nanoid(),
        binNumber:"55287900",
        price:"10000",

    }).then((result) => {
        console.log(result);
        Logs.logFile("5-installments-bir-kart-ve-ucret-taksit-kontrolu", result)
    })
        .catch((err) => {
            console.log(err);
            Logs.logFile("5-installments-bir-kart-ve-ucret-taksit-kontrolu-hata", err)
        })
}

// checkInstallments();

/*-------------------------------------------------------------------------------------------*/
/*c) NORMAL PAYMENT*/
/*-------------------------------------------------------------------------------------------*/

//Kayitli olmayan kartla odeme yapmak ve karti kaydetme

const createPayment=()=>{
    return Payments.createPayment({
        locale:Iyzipay.LOCALE.TR,
        conversationId:nanoid(),
        price:"300",
        paidPrice:"300",
        currency:Iyzipay.CURRENCY.TRY,
        installment:1,
        basketId:"B67JDL",
        paymentChannel:Iyzipay.PAYMENT_CHANNEL.WEB,
        paymentGroup:Iyzipay.PAYMENT_GROUP.PRODUCT,
        paymentCard:{
            cardHolderName: "Jhon Doe",
            cardNumber: "5528790000000008",
            expireMonth: "12",
            expireYear: "2030",
            cvc:"123",
            registerCard:"0"
        },
        buyer:{
            id:"SDFJKG",
            name:"Jhon",
            surname:"Doe",
            gsmNumber:"+905350000000",
            email:"email@email.com",
            identityNumber:"743008664791",
            lastLoginDate:"2023-11-06 01:05:10",
            registrationDate:"2023-11-05 01:05:10",
            registrationAddress:"Nidakule Goztepe, Merdivenkoy Mah. Bora Sk. No:1",
            ip:"85.34.78.112",
            city:"Istanbul",
            country:"Turkey",
            zipCode:"34732"
        },
        shippingAddress:{
            contactName:"Jhon Doe",
            city: "Istanbul",
            country: "Turkey",
            address:"Nidakule Goztepe, Merdivenkoy Mah. Bora Sk. No:1",
            zipCode: "34732",
        },
        billingAddress:{
            contactName:"Jhon Doe",
            city: "Istanbul",
            country: "Turkey",
            address:"Nidakule Goztepe, Merdivenkoy Mah. Bora Sk. No:1",
            zipCode: "34732",
        },
        basketItems:[
            {
                id:"BT101",
                name: "Samsung S20",
                category1:"Telefonlar",
                category2:"Android Telefonlar",
                itemType:Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                price:90
            },
            {
                id:"BT102",
                name: "Iphone 12",
                category1:"Telefonlar",
                category2:"IOS Telefonlar",
                itemType:Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                price: 150
            },
            {
                id:"BT103",
                name: "Samsung S10",
                category1:"Telefonlar",
                category2:"Android Telefonlar",
                itemType:Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                price: 60
            }
        ]


    }).then((result) => {
        console.log(result);
        Logs.logFile("6-payments-yeni-bir-kartla-odeme-al-ve-karti-kaydetme", result)
    })
        .catch((err) => {
            console.log(err);
            Logs.logFile("6-payments-yeni-bir-kartla-odeme-al-ve-karti-kaydetme-hata", err)
        })
}

// createPayment();

//Kayitli olmayan kartla odeme yapmak ve karti kaydet
const createPaymentAndSaveCard=()=>{
    return Payments.createPayment({
        locale:Iyzipay.LOCALE.TR,
        conversationId:nanoid(),
        price:"300",
        paidPrice:"300",
        currency:Iyzipay.CURRENCY.TRY,
        installment:1,
        basketId:"B67JDL",
        paymentChannel:Iyzipay.PAYMENT_CHANNEL.WEB,
        paymentGroup:Iyzipay.PAYMENT_GROUP.PRODUCT,
        paymentCard:{
            cardUserKey: "wI13Qe4UN49sqt6Dh1OwKjDA6NM=",
            cardAlias:"Yeni Kartim",
            cardHolderName: "Jhon Doe",
            cardNumber: "5528790000000008",
            expireMonth: "12",
            expireYear: "2030",
            cvc:"123",
            registerCard:"1"
        },
        buyer:{
            id:"SDFJKG",
            name:"Jhon",
            surname:"Doe",
            gsmNumber:"+905350000000",
            email:"email@email.com",
            identityNumber:"743008664791",
            lastLoginDate:"2023-11-06 01:05:10",
            registrationDate:"2023-11-05 01:05:10",
            registrationAddress:"Nidakule Goztepe, Merdivenkoy Mah. Bora Sk. No:1",
            ip:"85.34.78.112",
            city:"Istanbul",
            country:"Turkey",
            zipCode:"34732"
        },
        shippingAddress:{
            contactName:"Jhon Doe",
            city: "Istanbul",
            country: "Turkey",
            address:"Nidakule Goztepe, Merdivenkoy Mah. Bora Sk. No:1",
            zipCode: "34732",
        },
        billingAddress:{
            contactName:"Jhon Doe",
            city: "Istanbul",
            country: "Turkey",
            address:"Nidakule Goztepe, Merdivenkoy Mah. Bora Sk. No:1",
            zipCode: "34732",
        },
        basketItems:[
            {
                id:"BT101",
                name: "Samsung S20",
                category1:"Telefonlar",
                category2:"Android Telefonlar",
                itemType:Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                price:90
            },
            {
                id:"BT102",
                name: "Iphone 12",
                category1:"Telefonlar",
                category2:"IOS Telefonlar",
                itemType:Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                price: 150
            },
            {
                id:"BT103",
                name: "Samsung S10",
                category1:"Telefonlar",
                category2:"Android Telefonlar",
                itemType:Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                price: 60
            }
        ]


    }).then((result) => {
        console.log(result);
        Logs.logFile("7-payments-yeni-bir-kartla-odeme-al-ve-karti-kaydet", result)
    })
        .catch((err) => {
            console.log(err);
            Logs.logFile("7-payments-yeni-bir-kartla-odeme-al-ve-karti-kaydet-hata", err)
        })
}

// createPaymentAndSaveCard();
// readCardsOfAUser()

// Kayitli bir kartla odeme yap

const createPaymentWithSavedCard=()=>{
    return Payments.createPayment({
        locale:Iyzipay.LOCALE.TR,
        conversationId:nanoid(),
        price:"300",
        paidPrice:"300",
        currency:Iyzipay.CURRENCY.TRY,
        installment:1,
        basketId:"B67JDL",
        paymentChannel:Iyzipay.PAYMENT_CHANNEL.WEB,
        paymentGroup:Iyzipay.PAYMENT_GROUP.PRODUCT,
        paymentCard:{
            cardUserKey: "wI13Qe4UN49sqt6Dh1OwKjDA6NM=",
            cardToken: "hQoIlzF/hpOk6InYG3wARcTctUQ=",
        },
        buyer:{
            id:"SDFJKG",
            name:"Jhon",
            surname:"Doe",
            gsmNumber:"+905350000000",
            email:"email@email.com",
            identityNumber:"743008664791",
            lastLoginDate:"2023-11-06 01:05:10",
            registrationDate:"2023-11-05 01:05:10",
            registrationAddress:"Nidakule Goztepe, Merdivenkoy Mah. Bora Sk. No:1",
            ip:"85.34.78.112",
            city:"Istanbul",
            country:"Turkey",
            zipCode:"34732"
        },
        shippingAddress:{
            contactName:"Jhon Doe",
            city: "Istanbul",
            country: "Turkey",
            address:"Nidakule Goztepe, Merdivenkoy Mah. Bora Sk. No:1",
            zipCode: "34732",
        },
        billingAddress:{
            contactName:"Jhon Doe",
            city: "Istanbul",
            country: "Turkey",
            address:"Nidakule Goztepe, Merdivenkoy Mah. Bora Sk. No:1",
            zipCode: "34732",
        },
        basketItems:[
            {
                id:"BT101",
                name: "Samsung S20",
                category1:"Telefonlar",
                category2:"Android Telefonlar",
                itemType:Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                price:90
            },
            {
                id:"BT102",
                name: "Iphone 12",
                category1:"Telefonlar",
                category2:"IOS Telefonlar",
                itemType:Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                price: 150
            },
            {
                id:"BT103",
                name: "Samsung S10",
                category1:"Telefonlar",
                category2:"Android Telefonlar",
                itemType:Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                price: 60
            }
        ]


    }).then((result) => {
        console.log(result);
        Logs.logFile("8-payments-kayitli-bir-kartla-odeme-al", result)
    })
        .catch((err) => {
            console.log(err);
            Logs.logFile("8-payments-kayitli-bir-kartla-odeme-al-hata", err)
        })
}

createPaymentWithSavedCard();