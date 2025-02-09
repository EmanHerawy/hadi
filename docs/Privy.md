<img width="118" alt="image" src="https://github.com/user-attachments/assets/73cbcb82-eb79-4330-9519-0807b40c5830" />


# 🔑 Privy Integration in Hadi AI

## Overview
[Privy](https://privy.io/) simplifies **Web3 onboarding** with **embedded wallets & policy-based transaction controls**.

## 🚀 How Hadi AI Uses Privy
✅ **Provides seamless onboarding for Web3 & non-Web3 users.**  
✅ **Implements server wallets for AI-driven DeFi investments.**  
✅ **Uses Privy’s Policy Engine to allowlist tokens.**  

## 🛠️ Technical Implementation

// TODO: add explanation of all available functions to call and how to call them policies

We created an eliza plugin-privy for creating server wallets with policies.

For this project we created a policy called Hadi with the ID: zh4ugr13u3maafdrmrvvrt40

Our Agent would create all server wallet with this policy as default. 

The following functions can be called:

- currently the only Policies that can be created through this plugin are allowlisting of token addresses


## Docs Feedback

- Example on the [Create Policy page](https://docs.privy.io/guide/server-wallets/policies/create#example) adn update policy has to many commas and is throwing an Invalid JSON error
- The issues were:
    Missing comma after "name": "Allowlist USDC"
    Extra comma after the conditions object
    Extra comma after the method_rules array
    Remember in JSON:
    You need commas between items in arrays and objects
    You should not have a comma after the last item in an array or object
- Example on the Update Policy page is throwing an error:
  - The changes:
    Removed the default_action field since it's not allowed in the PATCH request
    Only included the method_rules which is what we want to update
    Remember:
    default_action can only be set during policy creation (POST request)
    PATCH requests should only include the fields you want to update
- When I google for policy engine, the first result in the google search leads to a 404: https://docs.privy.io/guide/wallet-api/policies


1. **Generate Embedded Wallets for Users**:
    ```python
    user_wallet = privy.create_wallet(user_email="investor@example.com")
    ```

2. **Enforce AI-Driven Allowlist based on the agents research**:
    ```python
    privy.set_policy(wallet=user_wallet, max_tx_per_day=3)
    ```

## 🔧 Setup Instructions
1. **Clone Repo & Install Dependencies**:
    // TODO: which ENV variables to add
    // TODO: how to set up the plugin

2. **Run Server Wallets**:
    ```bash
    python wallet_manager.py
    ```

## 🔹 Benefits to Hadi AI
✔️ **User-Friendly Web3 Onboarding.**  
✔️ **Secure Server Wallets for Investment Execution.**  
✔️ **Policy-Based Trading for AI-Governed Strategies.**  

## 🔮 Future Enhancements
🚀 **Integrate Privy’s social logins for seamless DeFi execution.**  



