const Kafka = require('node-rdkafka');

const consumer = new Kafka.KafkaConsumer({
  'metadata.broker.list': 'kafka:9092',
  'group.id': 'kafka',
});

consumer.connect();

consumer.on('ready', () => {
  consumer.subscribe(['test']);
  consumer.consume();
})

.on('data', (data) => {
  console.log(data.value.toString());
});
