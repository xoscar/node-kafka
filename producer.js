const Kafka = require('node-rdkafka');

const producer = new Kafka.Producer({
  'metadata.broker.list': 'kafka:9092',
  dr_cb: true,
});

producer.connect();

producer.on('ready', () => {
  producer.produce('test', null, Buffer.from('Awesome message'), null, Date.now());
});
