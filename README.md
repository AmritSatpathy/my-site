# my-site

This is a resume website 
Here I will givee all details on how to make your own website on host it on AWS Amplify with a free domian from Freenom

# Custom Domain
Go to <a href="freenom.com">Freenom.com</a> to get an custom domain.Get a free domain with  .dev or .test or .tk or anyother free domain

# Routing and Hosting
Create a free tier AWS account and goto Route 53 and click on create hosted zone and write the domain name which you got from Freenom and click create this will give you a list of nameserver.
Copy these nameserver and goto freenom account -services->MyDomian and the manage Domain .Under Management Tools click on custom nameserver and paste the namesever here

# Website 
Create a react web app with custom styling and push it into a Git repository

# Deploy
Go back to AWS console and goto Amplify an dconnect to a new App this will ask you to either deploy an existing code or deploy from a template present in AWS .Connet to Github with onscreen manual
and select the repository which was created earlier.Save this and deploy .This will deploy your website on a site assigned by AWS .After deploying it connect to the custom domain
already managed by Route53 .This will take some time to deploy .

# All Done 
And Voila your own website is ready
