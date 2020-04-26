<template>
  <a-card>
    <a-row>
      <a-col :span="6" :offset="8">
        <a-input v-model="user" placeholder="Username" style="margin-bottom: 12px;">
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
        <a-input-password v-model="password" placeholder="Password" style="margin-bottom: 12px;">
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </a-input-password>
        <a-button style="margin-right: 8px;" @click="onClick('DemoList')">go List</a-button>
        <a-button type="primary" @click="onClick('Home')">go home</a-button>
      </a-col>
    </a-row>
  </a-card>
</template>
<script>
import store from '../store';
import userState from './state/user.state';

export default {
  name: 'DemoForm',
  data() {
    return {
      unregisterModule: false
    };
  },
  beforeRouteEnter(to, from, next) {
    if (!store.hasModule('userStore')) {
      console.log('beforeRouteEnter registerModule');
      store.registerModule('userStore', userState);
    }
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (to.name !== 'DemoList') {
      this.unregisterModule = true;
    }
    next();
  },
  destroyed() {
    if (this.unregisterModule) {
      console.log('destroyed unregisterModule');
      store.unregisterModule('userStore');
    }
  },
  computed: {
    user: {
      get() {
        return this.$store.state.userStore.user;
      },
      set(value) {
        this.$store.commit('setUser', value);
      }
    },
    password: {
      get() {
        return this.$store.state.userStore.password;
      },
      set(value) {
        this.$store.commit('setPassword', value);
      }
    }
  },
  methods: {
    onClick(routeName) {
      this.$router.push({
        name: routeName
      });
    },
    onChangeUser(e) {
      this.$store.commit('setUser', e.target.value);
    },
    onChangePassword(e) {
      this.$store.commit('setPassword', e.target.value);
    }
  }
};
</script>
