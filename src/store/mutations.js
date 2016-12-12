export default {
    register(state, userId) {
        const date = new Date;
        const user = state.users.find(user => {
            return user.id == userId;
        });
        user.registered = true;
        const registration = {
            userId: userId,
            name: user.name,
            date: date.getMonth() + '/' + date.getDay()
        };
        state.registrations.push(registration);
    },
    unregister(state, payload) {
        const user = state.users.find(user => {
            return user.id == payload.userId;
        });
        user.registered = false;
        const registration = state.registrations.find(registration => {
            return registration.userId == payload.userId;
        });
        state.registrations.splice(state.registrations.indexOf(registration), 1);
    }
};