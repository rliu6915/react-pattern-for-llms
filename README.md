# react-pattern-for-llms

A simple Javascript implementation of the ReAct pattern for LLMs. The implementation is based on the article [here](https://til.simonwillison.net/llms/python-react-pattern). If you want more information, you can read the original paper talking about react (Reason + Act) pattern [here](https://react-lm.github.io). 

Medium article: [A simple Javascript implementation of the ReAct pattern for LLMs]()

## Features

- Backend: A express server that handles incoming post http request

I use nodejs as JS runtime environment and use express framework to implement web server. This is a toy project, we only use langchain for Azure Openai API connection. 

## Usage

### How to setup

1. Clone the repository

    ```bash
    git clone  
    cd react-pattern-for-llms
    ```

2. Install the dependency

    ```bash
    npm install
    ```

3. Run the node.js

    ```bash
    npm start
    ```

### How to setup LLM

I am in HK and use Azure to connect Openai API. You can create an .env file copied from .env.example and set up the environment variables.

### How to test the project

You can use postman to send a post request to the running server.