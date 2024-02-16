# How to add or remove rows dynamically [LWC]

Repo created from the article [How to add or remove rows dynamically](https://www.sfwiki.de/how-to-add-or-remove-rows-dynamically-lwc/)

## Repeater Standard component
Before implementing a custom repeater in LWC you should give a look at the [repeater component](https://help.salesforce.com/s/articleView?id=release-notes.rn_automate_flow_builder_add_a_reusable_set_of_components_to_a_screen_with_the_new_repeater_component.htm&release=248&type=5) released as beta version for Spring'24

## Deploy to Salesforce

Checkout the repo and deploy it with sfdx:
```sh
sfdx force:source:deploy -p force-app
```

Use GitHub Salesforce Deploy Tool:
[<img alt="Deploy to Salesforce" src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png"/>](https://githubsfdeploy.herokuapp.com/?owner=tprouvot&repo=lwcDynamicRecordRowsCreation&ref=main)
