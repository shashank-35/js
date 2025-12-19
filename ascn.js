/*
let P1 = new Promise((resolve, reject) => {
    //
  //   resolve("all good....!");
  reject("Somthing went wrong..!");
});

P1.then((value) => {
  console.log("--value-->", value);
})
  .catch((error) => {
    console.log("--error-->", error);
  })
  .finally(() => {
    console.log("--finally-->");
  });


  fetch().then().catch().finally()

  */

function fetchData(params) {
  console.log("------>");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   console.log("------resolve----->");
        resolve("urvish");
    //   reject("something went wrong...!");
    }, 3000);
  });
}

async function worker(params) {
  try {
    let name = await fetchData();
    console.log("🚀 ~ worker ~ name:", name);
    console.log("-----result-----");
  } catch (error) {
    console.log("🚀 ~ worker ~ error:", error);
  } finally {
    console.log("--finally-->");
  }
}
worker();