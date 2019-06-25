##### Testing out the install
- Create a topic with
`$ bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 2 --partitions 3 --topic <topicname>`
 - Push data onto it
 `$ bin/kafka-console-producer.sh --broker-list localhost:9092,localhost:9093,localhost:9094 --sync     --topic <topicname>`
 - Fetch data from it
 `$ bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic <topicname> --from-beginning`

# Program Setup

To start the application in development mode,
```
npm run dev
```

In production mode use,

```
npm start
```

