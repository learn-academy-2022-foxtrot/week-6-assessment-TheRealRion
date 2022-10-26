# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The foreign key is used to connect a child table to a parent table and create a relationship link. As the parent model is the Cohort table, it will need to be linked to the students table with the foreign key. To add this, you can simply add a column via migration and then the appropriate code (has many/belongs to) into the appropriate class. For example 

class Cohort 
    has_many :students
end

class Students 
    belongs_to :Cohort
end 

Researched answer: A foreign key is a table column field that is used to reference the primary key of another table. After the models are generated, you can add a new column via a migration and then set up the relationship (has_many/belongs_to)and adjust the views & controller. 

2. Which RESTful routes must always be passed params? Why?

Your answer: The routs (get, put, post, patch, & delete) are mapped to CRUD (create, read, update, delete)to create working connections between Rails & database. However, only get, post, put, and delete are absolutely required for CRUD functionality. 

Researched answer: The required routs are get(retrieve data from source), post (submit data to source), put (update from & to source), & delete(deletes/destroys the data at the source). 

3. Name three rails generator commands. What is created by each?

Your answer:

$rails g controller => generates a controller in Rails

$rails g model => generates a model (table) in Rails 

$rails g migration => generates a migration in Rails

Researched answer: Additional options for the generate command include assets, channel, generator, helper, integration_test, jbuilder, job, mailer, resource, scaffold, scaffold_controller, system_test, & task. These can be reaccessed via $rails g -h

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students =>Index 

action: "POST" location: /students => Create

action: "GET" location: /students/new => New

action: "GET" location: /students/2 => Show
 
action: "GET" location: /students/2/edit => Edit 

action: "PATCH" location: /students/2 => Update

action: "DELETE" location: /students/2 => Delete

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1) As a user, I can create a new To-Do List.
2) As a user, I can add a task name to my list.
3) As a user, I can add a task description to my list. 
4) As a user, I can edit a task name. 
5) As a user, I can edit a task description. 
6) As a user, I can check off my task as done. 
7) As a user, I can delete a task. 
8) As a user, I can update a task to in progress. 
9) As a user, I can update a task to not started. 
10) As a user, I can set colors to each task to identify urgency. 