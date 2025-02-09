# The Graph Project

## Overview

[The Graph](https://thegraph.com/) is a decentralized protocol for indexing and querying data from blockchains. It allows developers to build and publish open APIs, known as subgraphs, that can be queried using GraphQL. This project aims to leverage The Graph to provide efficient and scalable data access for our application.

## How We Use It

- THE_GRAPH_SUBGRAPH_ID=68g9WSC4QTUJmMpuSbgLNENrcYha4mPmXhWGCoupM7kB#Dss7poW5WwiQDMPmgFu31Nqn4tsmCaYQhmuXTXYghvwm
- we built a SubGraph Plugin for Eliza: https://github.com/EmanHerawy/hadi/tree/main/ts-agent/eliza/packages/plugin-subgraph

Hadi is a DeFi assistant for Muslims. Having accurate and on time data is crucial for any kind of financial decisions.

In our application, we utilize The Graph to:

- **Index Blockchain Data**: We create custom subgraphs to index relevant blockchain data.
- **Efficient Querying**: We use GraphQL to perform efficient queries on the indexed data, enabling fast data retrieval.
- **Real-Time Updates**: The Graph allows us to receive real-time updates on blockchain events, ensuring our application stays current.

## Who Built It

https://github.com/EmanHerawy

## Why We Chose It

We chose The Graph for several reasons:

- **Decentralization**: The Graph provides a decentralized way to access blockchain data, aligning with our values of transparency and security.
- **Scalability**: The ability to create custom subgraphs allows us to scale our data access as our application grows.
- **Community Support**: The Graph has a strong community and ecosystem, providing resources and support for developers.


### Developer Experience (DevEx) Feedback

While working with The Graph, we encountered several challenges and learning experiences:



- **CLI Experience**: The command-line interface (CLI) made the setup process straightforward and streamlined.

- **Publishing Challenges**: Deploying to **Arbitrum Sepolia** was particularly difficult due to the immaturity of the RPC and the faucet. After multiple attempts, we successfully published the subgraph.

- **Querying Issues**: Querying was not feasible as we encountered the error: `subgraph not found: no allocations`. Despite reaching out to the team for support, we have yet to receive a response.

- **Workaround**: Due to the lack of support and allocation issues, we had to pivot and use a **public subgraph** to test our plugin instead.



### Resources

- **Subgraph Link**: [Halal Scanner Subgraph](https://thegraph.com/studio/subgraph/halal-scanner/)
- **Subgraph Link**: [Halal Scanner Subgraph](https://thegraph.com/studio/subgraph/halal-scanner/)

## Future Enhancements

We plan to enhance our use of The Graph by:

- **Expanding Subgraphs**: Adding more subgraphs to index additional data sources relevant to our application.
- **Optimizing Queries**: Continuously optimizing our GraphQL queries for better performance and efficiency.
- **Integrating with Other Protocols**: Exploring integrations with other decentralized protocols to enrich our data offerings.
