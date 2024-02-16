public without sharing class SfWiki_Handler {

    @AuraEnabled
    public static void insertAccounts(String jsonOfListOfAccounts) {
        List<Account> listOfAccounts = (List<Account>) JSON.deserialize(jsonOfListOfAccounts, List<Account>.class);
        insert listOfAccounts;
    }

}