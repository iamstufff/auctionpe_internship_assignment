# AuctionPe Assignment


This repository contains the source code for the AuctionPe assignment, a full-stack web application with the following features:
1. User Authentication:
- Sign Up: Allow users to create an account.
- Login: Allow users to log into their account.
2. Session Management:
- After a user logs in, they should be redirected to a page with a Call-To-Action (CTA)
to "Start or End a session."
- The page should include five additional action items (such as toggles, counters,
etc.) that will only be active when a session is started.
- When the session ends, these action items should be disabled.
- The session should have a countdown timer of 5 minutes.
3. User Dashboard:
- A dashboard that logs and displays all the actions performed by the user during
each session.
- The dashboard should maintain a history of all sessions and the actions taken
within each session.

## Set Up
### Backend

1. Clone repository
   ```sh
   git clone https://github.com/iamstufff/auctionpe_internship_assignment
  ``
2. Install Dependencies:
```sh
npm i
```
3. Create a `.env` file in `server` and add your environment variables:

   ```env
   JWT_SECRET=your_jwt_secret #random jwt secret
   DB_HOST=localhost
   DB_USER=root #username is root in my case
   DB_PASSWORD=your_password #password for you local mysql db
   DB_NAME=auctionpe_db
   ```

4. Start the backend server:
   ```sh
   npm start
   ```
  
