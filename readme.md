The task is to create an APP that lists the best-selling books for each book store.

This folder contains a JSON:API based application which provides the data for the book stores. 
This API can be found in the data-api folder. 

Your goal is to present the data (that you receive from the API) as shown in the sample image file.


The number depicted in the picture are as follows

1. Book store image in circular format.
2. List with a maximum of 2 books ordered by the number of copies sold. In case there are no books, please display a "No data available" message.
3. Book store rating represented in stars. The interaction with the rating should update its entry in the APP.
4. Book store establishment date in DD.MM.YYYY format and website link.
5. Book store country flag image. The Book store API will only return a 2-letter ISO 3166-1 country code. Use online api of your choice to display the country flag image.


You have to follow the picture in the sample image file and positioning of elements, but you have liberty to make additions.

Data Relationship and schema overview

Stores
	Attributes:
		name
		website
		rating
		image
		establishmentDate
	Relationships
		books
		countries
Books
	Attributes:
		name
		copiesSold
	Relationships
		authors
Countries
	Attributes:
		code
Authors
	Attributes:
		fullName
		

http://localhost:3000/stores, This endpoint will return all store resources and related resources within included array.


Running the API:
	cd inside data-api folder and run npm install
	Serve it on the port 3000 by running npm run start


ADDITIONAL NOTES FOR FULL-STACK DEVELOPER CANDIDATE

1. After the above task is done, make another yet similar application while using a backend technology/framework that is compatible with ReactJS to store the book stores and related data that is provided as the dummy data in the data-api folder.
2. Make a connection between the frontend and backend to display the APP as depicted in the sample image file.
3. You have the liberty to choose and use the database of your choice.
4. For the 2nd task (Full stack task) you can reuse the frontend code and while sending the completed assignment share 2 folders, one for above task and another one for the above task+backend connection task mentioned in points 1,2 & 3.



RULES
1. Use React as your main framework for frontend
2. Write CSS from scratch, do not use Bootstrap, Material UI, and similar frameworks.
3. Application development must be done by responsive web design principles.
4. The project startup procedure must be documented and included in the folder for submission.

