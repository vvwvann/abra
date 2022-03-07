export default [
  {
    name: "YearnChainlinkOracleV2",
    id: 1,
    contractChain: "0x1",
    address: "0x6cc0cd7D25E291029B55C767B9A2D1d9A18Ae668",
    abi: [
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "get",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "multiply", type: "address" },
          { internalType: "address", name: "divide", type: "address" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
          { internalType: "address", name: "yearnVault", type: "address" },
        ],
        name: "getDataParameter",
        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peek",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peekSpot",
        outputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    name: "ChainlinkOracleV2",
    id: 2,
    contractChain: "0x1",
    address: "0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB",
    abi: [
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "get",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "multiply", type: "address" },
          { internalType: "address", name: "divide", type: "address" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
        ],
        name: "getDataParameter",
        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peek",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peekSpot",
        outputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    name: "ProxyOracle",
    id: 3,
    contractChain: "0x1",
    address: "0xC8DcC12f457eECB38D070815731c63639AE87aa3",
    abi: [{
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": true,
        "internalType": "contract IOracle",
        "name": "oldOracle",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "contract IOracle",
        "name": "newOracle",
        "type": "address"
      }],
      "name": "LogOracleImplementationChange",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }],
      "name": "OwnershipTransferred",
      "type": "event"
    }, {
      "inputs": [{
        "internalType": "contract IOracle",
        "name": "newOracle",
        "type": "address"
      }],
      "name": "changeOracleImplementation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [],
      "name": "claimOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }],
      "name": "get",
      "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }],
      "name": "name",
      "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "oracleImplementation",
      "outputs": [{
        "internalType": "contract IOracle",
        "name": "",
        "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "owner",
      "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }],
      "name": "peek",
      "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }],
      "name": "peekSpot",
      "outputs": [{
        "internalType": "uint256",
        "name": "rate",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "pendingOwner",
      "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }],
      "name": "symbol",
      "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }, {
        "internalType": "bool",
        "name": "direct",
        "type": "bool"
      }, {
        "internalType": "bool",
        "name": "renounce",
        "type": "bool"
      }],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }]
  },
];
