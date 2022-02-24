# Heroku deployment

## General info

Deployed app comes from this repository: https://github.com/victor-mascarenas/10-calendar-backend

## Accessing API resources

1. Add app URL: https://<!--This is a comment-->mern-calendar-vm.herokuapp.com/
2. Add resource.

        Add "/api/auth" for authentication & user resources.
        Add "/api/events" for calendar resources.

3. Add method.

    3.1. Auth methods.

        Add "/new" to post an user (POST).
        Add "/" to login (POST).
        Add "/renew" to renew access token (GET).

    3.2. Event methods.

        Add "/" to get events (GET).
        Add "/" to post an event (POST).
        Add "/{event_id}" tu udpdate an event (PUT).
        Add "/{event_id}" to delete an event (DELETE).

4. Full URL example.

        https://mern-calendar-vm.herokuapp.com/api/auth/new

## Using App

        https://mern-calendar-vm.herokuapp.com