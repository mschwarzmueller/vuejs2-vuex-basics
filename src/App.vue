<template>
  <div id="app">
    <app-registration @userRegistered="userRegistered" :users="unregisteredUsers"></app-registration>
    <app-registrations @userUnregistered="userUnregistered" :registrations="registrations"></app-registrations>
  </div>
</template>

<script>
  import Registration from './components/Registration.vue';
  import Registrations from './components/Registrations.vue';

export default {
    data() {
        return {
            registrations: [],
            users: [
                {id: 1, name: 'Max', registered: false},
                {id: 2, name: 'Anna', registered: false},
                {id: 3, name: 'Chris', registered: false},
                {id: 4, name: 'Sven', registered: false}
            ]
        }
    },
    computed: {
        unregisteredUsers() {
            return this.users.filter((user) => {
                return !user.registered;
            });
        }
    },
    methods: {
      userRegistered(user) {
          const date = new Date;
          this.registrations.push({userId: user.id, name: user.name, date: date.getMonth() + '/' + date.getDay()})
      },
        userUnregistered(registration) {
          const user = this.users.find(user => {
              return user.id == registration.userId;
          });
          user.registered = false;
          this.registrations.splice(this.registrations.indexOf(registration), 1);

        }
    },
    components: {
        appRegistration: Registration,
        appRegistrations: Registrations
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
