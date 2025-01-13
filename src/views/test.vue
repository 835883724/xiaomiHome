<template>
  <div class="" style="height: 300px;color: #fff;background-color: blue;">
    <div class="mb30">测试大文件分片上传</div>
    <input type="file" @change="handleChange">
  </div>
</template>
<script setup >
const handleChange = e => {
  console.log(e.target.files[0])
  const resultChunk = fenpianHandle(e.target.files[0])
  console.log(resultChunk, 'resultChunk')
}
// 文件分片操作 每片1mb
const fenpianHandle = file => {
  const chunkList = []
  for (let i = 0; i < file.size; i += 1024 * 1024) {
    let chunk = file.slice(i, i + 1024 * 1024)
    chunkList.push(chunk)
  }
  return chunkList
}

// 示例代码

// 以下是一段使用 JavaScript 实现前端分片上传的示例代码：

// const chunkSize = 1024 * 1024; // 1MB
// const file = document.getElementById("file-input").files[0];

// const chunks = [];
// for (let i = 0; i < file.size; i += chunkSize) {
//   chunks.push(file.slice(i, i + chunkSize));
// }

// const upload = async (chunk) => {
//   const formData = new FormData();
//   formData.append("chunk", chunk);
//   formData.append("hash", md5(chunk)); // 使用 MD5 计算哈希值

//   const response = await fetch("/upload", {
//     method: "POST",
//     body: formData,
//   });

//   if (response.status === 200) {
//     // 分片上传成功
//   } else {
//     // 分片上传失败
//   }
// };

// // 并发控制
// const maxConcurrentUploads = 5;
// let activeUploads = 0;

// for (const chunk of chunks) {
//   if (activeUploads < maxConcurrentUploads) {
//     activeUploads++;
//     upload(chunk).then(() => { activeUploads--; });
//   }
// }
</script>

<style scoped>
</style>
