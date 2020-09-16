# Javascript-University_coursework-master

This is a simple server application that allows the PontyBridge University to track the books that they have, the library users, and which users have borrowed which books.

The applications itself provides a simple server with a REST API which has the following functionality:

API endpoints:



          /users

          /authors

          /books

              /search

Each API endpoint accepts HTTP requests with the verbs GET, POST, PUT and DELETE.

The application also comes with an .sqlite database in which the data for the application is stored, and an ORM mapping between the database objects and JavaScript objects. Further documentation on the API server is available in the Library system source.

The website created allows interfaces with this API to provide the library functionality requested by the University. This system is used by the librarians to manage their library and associated data. Front end allows them to:

U1 - Add a new User to the Library system with the fields Name, Barcode and Member Type (Staff/Student).

U2 - Get a User’s details from the Library system by searching on Name or Barcode

U3 - Update a User’s Name or Member Type

U4 - Remove a User

B1 - Add a new Book to the Library system with the fields Title, ISBN, Authors.

B2 - Get a Book’s details by searching on Title

B3 - Remove a Book

#Steps to run the application:

    1)Download and install all requirements for the server with- yarn install inside the backend folder.

    2)Initialising the Database after yarn install in the backend folder with node initialise_database.js.

    3) Running the server inside the backend folder followed by yarn install and database init with-  node server.js
    
    4)After running the server.js, in the frontend folder open the trial1.html file which is the home page for frontend side for the application and the functionalities can be accessed from that page.

   
