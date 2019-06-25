
const kafka = require('kafka-node');
const bp = require('body-parser');
const config = require('./config');
const timeHelper = require('./timeHelper');
global.timeIni = timeHelper();
global.count = 1;

try {
  const Consumer = kafka.HighLevelConsumer;
  const client = new kafka.Client(config.kafka_server);
  let consumer = new Consumer(
    client,
    [{ topic: config.kafka_topic, partition: 0 }],
    {
      autoCommit: false,
      fetchMaxWaitMs: 1000,
      fetchMaxBytes: 1024 * 1024,
      encoding: 'utf8',
      fromOffset: 'latest',
      groupId: config.kafka_group_id
    }
  );
  consumer.on('message', async function(message) {
    console.log(`[${global.count}] INI[${global.timeIni}] - FIM[${timeHelper()}] | MSG[${message.value}]`);
    global.count++;
  })
  consumer.on('error', function(err) {
    console.log('error', err);
  });
}
catch(e) {
  console.log(e);
}
