<template>
  <div class="table-container">
    <div style="width: 100%">
      <a-row :gutter="[8, 8]">
        <a-col :span="4">
          <a-input
            class="search-item"
            v-model:value="filterData.clientSource"
            placeholder="客户来源"
          ></a-input>
        </a-col>
        <a-col style="flex: 1; text-align: right">
          <a-button @click="reset" style="margin-right: 8px">重置</a-button>
          <a-button @click="query" type="primary">查询</a-button>
        </a-col>
      </a-row>
      <div class="operate">
        <a-button @click="addhandler" type="text">
          <template #icon><plus-outlined /></template>新增
        </a-button>
        <a-button @click="exportHandler" type="text">
          <template #icon><download-outlined /></template>导出
        </a-button>
      </div>
    </div>
    <a-table :dataSource="dataSource" :columns="columns" border>
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.key === 'actions'">
          <a-button type="text" @click="()=>{delHandler(record.id)}">
            <template #icon><DeleteOutlined /></template>
          </a-button>

          <a-button type="text" @click="()=>{showDetail(record)}">
            <template #icon><EyeOutlined /></template>
          </a-button>
        </template>
        <template v-else>
          <span>{{ text }}</span>
        </template>
      </template>
    </a-table>
    <TemplateView :is-show="show1" :detail-info="detailInfo"/>
  </div>
</template>

<script lang="ts" setup>
import { PlusOutlined, DownloadOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons-vue";
import { Modal } from "ant-design-vue";
import TemplateView from '../components/template/view.vue'
import { reactive, ref } from "vue";
const filterData = reactive({
  clientSource: "",
});
const dataSource = [
  {
    id: "1",
    name: "胡彦斌",
    age: 32,
    address:
      "西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号",
  },
];
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
    // 根据文字长度 自动省略 ...
    ellipsis: true,
  },
  {
    title: "操作",
    key: "actions",
  },
];

function reset() {}
function query() {
  console.log('do filter:', filterData)
}
function addhandler() {}
function delHandler(record: Record<string, any>) {
  Modal.confirm({
    title: '确认',
    centered: true,
    closable: true,
    content: '确认删除该条信息？',
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      // todo 
      // do delete operation 
    },
    onCancel: () => {}
    
  })
}


let show1 = ref<boolean>(false)
let detailInfo = reactive({})
function showDetail(record: any) {
  show1.value = true
  detailInfo = record
}
function exportHandler() {}
</script>
<style scoped>
.table-container {
  width: 100%;
}
.search-bar {
  min-height: 64px;
  display: flex;
  flex-flow: column;
  background-color: #fafafa;
  margin-bottom: 4px;
  padding: 4px 10px;
}
.search-bar .search-item {
  width: 200px;
}
.operate {
  border: 1px solid #eee;
  background-color: #fafafa;
  margin-top: 14px;
  /* padding */
}
</style>
