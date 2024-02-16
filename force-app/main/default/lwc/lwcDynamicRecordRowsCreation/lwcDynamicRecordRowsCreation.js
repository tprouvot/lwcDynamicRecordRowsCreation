import {LightningElement, track} from 'lwc';

//APEX-Methods
import insertAccounts from '@salesforce/apex/SfWiki_Handler.insertAccounts'
import {ShowToastEvent} from "lightning/platformShowToastEvent";

export default class LwcDynamicRecordRowsCreation extends LightningElement {

    @track listOfAccounts;

    connectedCallback() {
    	this.initData();
    }

    initData() {
    	let listOfAccounts = [];
    	this.createRow(listOfAccounts);
    	this.listOfAccounts = listOfAccounts;
    }

    createRow(listOfAccounts) {
    	let accountObject = {};
    	if(listOfAccounts.length > 0) {
    		accountObject.index = listOfAccounts[listOfAccounts.length - 1].index + 1;
    	} else {
    		accountObject.index = 1;
    	}
    	accountObject.Name = null;
    	accountObject.Website = null;
    	accountObject.Phone = null;
    	listOfAccounts.push(accountObject);
    }

    /**
     * Adds a new row
     */
    addNewRow() {
    	this.createRow(this.listOfAccounts);
    }

    /**
     * Removes the selected row
     */
    removeRow(event) {
    	let toBeDeletedRowIndex = event.target.name;

    	let listOfAccounts = [];
    	for(let i = 0; i < this.listOfAccounts.length; i++) {
    		let tempRecord = Object.assign({}, this.listOfAccounts[i]); //cloning object
    		if(tempRecord.index !== toBeDeletedRowIndex) {
    			listOfAccounts.push(tempRecord);
    		}
    	}

    	for(let i = 0; i < listOfAccounts.length; i++) {
    		listOfAccounts[i].index = i + 1;
    	}

    	this.listOfAccounts = listOfAccounts;
    }

    /**
     * Removes all rows
     */
    removeAllRows() {
    	let listOfAccounts = [];
    	this.createRow(listOfAccounts);
    	this.listOfAccounts = listOfAccounts;
    }

    handleInputChange(event) {
    	let index = event.target.dataset.id;
    	let fieldName = event.target.name;
    	let value = event.target.value;

    	for(let i = 0; i < this.listOfAccounts.length; i++) {
    		if(this.listOfAccounts[i].index === parseInt(index)) {
    			this.listOfAccounts[i][fieldName] = value;
    		}
    	}
    }

    createAccounts() {
    	insertAccounts({
    		jsonOfListOfAccounts: JSON.stringify(this.listOfAccounts)
    	})
    		.then(data => {
    			this.initData();
    			let event = new ShowToastEvent({
    				message: "Accounts successfully created!",
    				variant: "success",
    				duration: 2000
    			});
    			this.dispatchEvent(event);
    		})
    		.catch(error => {
    			console.log(error);
    		});
    }

}