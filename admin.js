const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Connecting...");
  await admin.connect();
  console.log("Connected");

  console.log("Creating Topics...");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topics created");

  console.log("Disconnecting...");
  await admin.disconnect();
  console.log("Disconnected");
}

init();
