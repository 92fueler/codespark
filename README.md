# CodeSpark: collaborative online judge system

## Features

- Problem pagination
- Problem search feature
- User profile
- Admin problem management
- Admin user management
- Database seeder (problems & users)

### ES Modules in Node

ECMAScript Modules is used in the frontend server.
When importing a file (not a package), be sure to add `.js` at the end or a "module not found" error will occur.

### env variables

Create a .env file in the root and add the following:

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'keyexample123'
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```

### TODO
1. add docker
2.