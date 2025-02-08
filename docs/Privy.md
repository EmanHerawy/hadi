<img width="118" alt="image" src="https://github.com/user-attachments/assets/73cbcb82-eb79-4330-9519-0807b40c5830" />


# 🔑 Privy Integration in Hadi AI

## Overview
[Privy](https://privy.io/) simplifies **Web3 onboarding** with **embedded wallets & policy-based transaction controls**.

## 🚀 How Hadi AI Uses Privy
✅ **Provides seamless onboarding for Web3 & non-Web3 users.**  
✅ **Implements server wallets for AI-driven DeFi investments.**  
✅ **Uses Privy’s Policy Engine to enforce trading limits.**  

## 🛠️ Technical Implementation
1. **Generate Embedded Wallets for Users**:
    ```python
    user_wallet = privy.create_wallet(user_email="investor@example.com")
    ```

2. **Enforce AI-Driven Trade Limits**:
    ```python
    privy.set_policy(wallet=user_wallet, max_tx_per_day=3)
    ```

## 🔧 Setup Instructions
1. **Clone Repo & Install Dependencies**:
    ```bash
    git clone https://github.com/hadi-ai/hadi-privy.git
    cd hadi-privy
    pip install privy-sdk
    ```

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
