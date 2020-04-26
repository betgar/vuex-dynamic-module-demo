<template>
  <div>
    <AList itemLayout="horizontal" :dataSource="data">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
          <!-- <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> -->
        </a-list-item-meta>
      </a-list-item>
    </AList>
    <a-button type="primary" @click="onClick">go detail</a-button>
  </div>
</template>
<script>
const data = [
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 2'
  },
  {
    title: 'Ant Design Title 3'
  },
  {
    title: 'Ant Design Title 4'
  }
];
export default {
  name: 'DemoList',
  data() {
    return {
      data
    };
  },
  methods: {
    onClick() {
      this.$router.push({
        name: 'DemoForm'
      });
    }
  }
};
</script>
<style></style>
