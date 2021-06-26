## Required ENV vars:

export AWS_REGION="us-west-2"  
export AWS_ACCESS_KEY_ID=*************   
export AWS_SECRET_ACCESS_KEY=********************  
export GODADDY_API_KEY=*********************   
export GODADDY_API_SECRET=**************

## Create resources
```
cd tf-backend
terraform init
terraform apply

cd tf
terraform init
terraform plan
terraform apply
```
