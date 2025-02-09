import { ActionExample } from "@elizaos/core";



// TODO: Important - Add more examples for this actions
export const getPolicyExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Is this token Halal?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "This is a list of all sharia compliant tokens.",
                action: "PRIVY_GET_POLICY",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you verify if this transaction follows Islamic finance principles?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Please check if the token is in the list of Sharia compliant tokens.",
                action: "PRIVY_GET_POLICY",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Which tokens are Halal?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Here are the tokens that are considered Halal.",
                action: "PRIVY_GET_POLICY",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you give me a list of tokens that are Sharia-compliant?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "The following tokens are Sharia-compliant.",
                action: "PRIVY_GET_POLICY",
            },
        }
    ]
];

export const createPolicyExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "We need to set up rules for Sharia-compliant trading.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll create a new policy with Islamic finance rules that block interest-based transactions and only allow verified Halal tokens.",
                action: "PRIVY_CREATE_POLICY",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Create a policy to ensure our DeFi protocol follows Islamic principles.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll set up a comprehensive policy that enforces Sharia compliance rules including avoiding Riba (interest) and Gharar (excessive uncertainty).",
                action: "PRIVY_CREATE_POLICY",
            },
        }
    ]
];
// TODO: Important - Add more examples for this actions
export const updatePolicyExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "We need to add a new Halal-certified token to our whitelist.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll update the Sharia compliance policy to include the new verified Halal token.",
                action: "PRIVY_UPDATE_POLICY",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Update our Islamic finance rules to include the latest Sharia board recommendations.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll modify the policy to incorporate the new Sharia compliance guidelines.",
                action: "PRIVY_UPDATE_POLICY",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "This token has lost its Halal certification. Please update the policy.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll update the policy to remove this token from the approved Halal tokens list.",
                action: "PRIVY_UPDATE_POLICY",
            },
        }
    ]
];
// TODO: Important - Add more examples for this actions
export const createWalletExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "I need to create a new wallet with authorization keys key1 and key2.",
            },
        },
        
        {
            user: "{{agent}}",
            content: {
                text: "I'll create a new wallet with the specified authorization keys.",
                action: "PRIVY_CREATE_WALLET",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Wallet created successfully! Wallet ID: <wallet_id>",
                content: {
                    wallet: {
                        id: "<wallet_id>",
                        address: "<wallet_address>",
                        chain_type: "ethereum",
                        policy_ids: ["Hadi"],
                    },
                },
            },
        },
    ],
];

export const getAllWalletsExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you show me all my wallets on Ethereum?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll fetch all your wallets on Ethereum.",
                action: "GET_ALL_WALLETS",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Successfully fetched wallets.",
                content: {
                    wallets: [
                        { id: "<wallet_id_1>", address: "<wallet_address_1>" },
                        { id: "<wallet_id_2>", address: "<wallet_address_2>" },
                    ],
                },
            },
        },
    ],
];


// TODO: Important - Add more examples for this actions
export const sendTransactionExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Please send 100000 wei to 0xE3070d3e4309afA3bC9a6b057685743CF42da77C.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll send the specified amount to the given address.",
                action: "PRIVY_SEND_TRANSACTION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Transaction sent successfully!",
                content: {
                    hash: "<transaction_hash>",
                    caip2: "eip155:1",
                },
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Please send 1.5 ETH to 0xE3070d3e4309afA3bC9a6b057685743CF42da77C.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll send 1.5 ETH to the specified address.",
                action: "PRIVY_SEND_TRANSACTION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Transaction failed due to policy restrictions.",
                content: {
                    reason: "This transaction violates the Sharia compliance policy.",
                },
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Please send 100 USDC to 0xE3070d3e4309afA3bC9a6b057685743CF42da77C.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll send 100 USDC to the specified address.",
                action: "PRIVY_SEND_TRANSACTION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Transaction rejected due to policy compliance.",
                content: {
                    reason: "USDC transactions are not allowed under current policy.",
                },
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Please send 50 USDT to 0xE3070d3e4309afA3bC9a6b057685743CF42da77C.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll send 50 USDT to the specified address.",
                action: "PRIVY_SEND_TRANSACTION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Transaction sent successfully!",
                content: {
                    hash: "<transaction_hash>",
                    caip2: "eip155:1",
                },
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Please send 0.5 ETH to 0xE3070d3e4309afA3bC9a6b057685743CF42da77C.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll send 0.5 ETH to the specified address.",
                action: "PRIVY_SEND_TRANSACTION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Transaction failed due to insufficient funds.",
                content: {
                    reason: "Your wallet balance is too low to complete this transaction.",
                },
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Please send 200 USDC to 0xE3070d3e4309afA3bC9a6b057685743CF42da77C.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll send 200 USDC to the specified address.",
                action: "PRIVY_SEND_TRANSACTION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Transaction rejected due to policy compliance.",
                content: {
                    reason: "This amount exceeds the allowed limit for USDC transactions.",
                },
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Please send 0.1 ETH to 0xE3070d3e4309afA3bC9a6b057685743CF42da77C.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll send 0.1 ETH to the specified address.",
                action: "PRIVY_SEND_TRANSACTION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Transaction sent successfully!",
                content: {
                    hash: "<transaction_hash>",
                    caip2: "eip155:1",
                },
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Please send 150 USDT to 0xE3070d3e4309afA3bC9a6b057685743CF42da77C.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll send 150 USDT to the specified address.",
                action: "PRIVY_SEND_TRANSACTION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Transaction failed due to policy restrictions.",
                content: {
                    reason: "USDT transactions are currently restricted.",
                },
            },
        },
    ],
];



export const signTransactionExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you sign a transaction to send 100000 wei to 0xE3070d3e4309afA3bC9a6b057685743CF42da77C?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll sign the transaction with the provided details.",
                action: "PRIVY_SIGN_TRANSACTION",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Transaction signed successfully!",
                content: {
                    signature: "<transaction_signature>",
                },
            },
        },
    ],
];