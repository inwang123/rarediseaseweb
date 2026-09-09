# Notes

## Run Locally

 - npm run dev

### (If you are testing forms then also run)

 - node .\dev-server.js

## Forms

 - Form submission client secret expires on 2028/09/04, got to Microsoft Entra ID to generate new ID
 - To add new forms, add the form structure in data/forms.js
 - To connect to new sharepoint list, add sharepoint list ID to .env file and reference env variable name in data/forms.js
     - IMPORTANT: You need to match 'sharepointField' with the **exact** sharepoint id, running "node get-columns.js" can help you find it.