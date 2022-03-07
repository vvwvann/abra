export default [
  {
    name: "UST",
    contractChain: "0x1",
    id: 26,
    contract: {
      name: "CauldronV2",
      address: "0x59e9082e068ddb27fc5ef1690f9a9f22b32e573f",
      abi: [
        {"inputs":[{"internalType":"contract IBentoBoxV1","name":"bentoBox_","type":"address"},{"internalType":"contract IERC20","name":"magicInternetMoney_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint128","name":"accruedAmount","type":"uint128"}],"name":"LogAccrue","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"share","type":"uint256"}],"name":"LogAddCollateral","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"part","type":"uint256"}],"name":"LogBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rate","type":"uint256"}],"name":"LogExchangeRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newFeeTo","type":"address"}],"name":"LogFeeTo","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"share","type":"uint256"}],"name":"LogRemoveCollateral","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"part","type":"uint256"}],"name":"LogRepay","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"feeTo","type":"address"},{"indexed":false,"internalType":"uint256","name":"feesEarnedFraction","type":"uint256"}],"name":"LogWithdrawFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"BORROW_OPENING_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"COLLATERIZATION_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LIQUIDATION_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"accrue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"accrueInfo","outputs":[{"internalType":"uint64","name":"lastAccrued","type":"uint64"},{"internalType":"uint128","name":"feesEarned","type":"uint128"},{"internalType":"uint64","name":"INTEREST_PER_SECOND","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"skim","type":"bool"},{"internalType":"uint256","name":"share","type":"uint256"}],"name":"addCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bentoBox","outputs":[{"internalType":"contract IBentoBoxV1","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"borrow","outputs":[{"internalType":"uint256","name":"part","type":"uint256"},{"internalType":"uint256","name":"share","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collateral","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8[]","name":"actions","type":"uint8[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes[]","name":"datas","type":"bytes[]"}],"name":"cook","outputs":[{"internalType":"uint256","name":"value1","type":"uint256"},{"internalType":"uint256","name":"value2","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"exchangeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"init","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"},{"internalType":"uint256[]","name":"maxBorrowParts","type":"uint256[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"contract ISwapper","name":"swapper","type":"address"}],"name":"liquidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"magicInternetMoney","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterContract","outputs":[{"internalType":"contract CauldronV2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracle","outputs":[{"internalType":"contract IOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracleData","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"reduceSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"share","type":"uint256"}],"name":"removeCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"skim","type":"bool"},{"internalType":"uint256","name":"part","type":"uint256"}],"name":"repay","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newFeeTo","type":"address"}],"name":"setFeeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalBorrow","outputs":[{"internalType":"uint128","name":"elastic","type":"uint128"},{"internalType":"uint128","name":"base","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalCollateralShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"},{"internalType":"bool","name":"direct","type":"bool"},{"internalType":"bool","name":"renounce","type":"bool"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateExchangeRate","outputs":[{"internalType":"bool","name":"updated","type":"bool"},{"internalType":"uint256","name":"rate","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userBorrowPart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userCollateralShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawFees","outputs":[],"stateMutability":"nonpayable","type":"function"}
      ]
    },
    token: {
      name: "UST",
      decimals: 18,
      address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
      abi: [
        {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_sender","type":"address"},{"indexed":true,"internalType":"bytes32","name":"_to","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"to","type":"bytes32"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}
      ]
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "_owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "_spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "_value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "_from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "_to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "_value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "claimOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "lastMint",
          outputs: [
            { internalType: "uint128", name: "time", type: "uint128" },
            { internalType: "uint128", name: "amount", type: "uint128" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "clone", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            {
              internalType: "contract IBentoBoxV1",
              name: "bentoBox",
              type: "address",
            },
          ],
          name: "mintToBentoBox",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "nonces",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pendingOwner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner_", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
            { internalType: "bool", name: "direct", type: "bool" },
            { internalType: "bool", name: "renounce", type: "bool" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    swapContractInfo: {
      address: "0x6b44d94ecdfaf0cb00def55212e226603bb68793",
      abi: [
        {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"MIM","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UST","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UST2POOL","outputs":[{"internalType":"contract CurvePool","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"degenBox","outputs":[{"internalType":"contract IBentoBoxV1","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"shareToMin","type":"uint256"},{"internalType":"uint256","name":"shareFrom","type":"uint256"}],"name":"swap","outputs":[{"internalType":"uint256","name":"extraShare","type":"uint256"},{"internalType":"uint256","name":"shareReturned","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}
      ]
    }
  },
  {
    name: "xSUSHI",
    contractChain: "0x1",
    id: 5,
    contract: {
      name: "CauldronMediumRiskV1",
      address: "0xbb02A884621FB8F5BFd263A67F58B65df5b090f3",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IBentoBoxV1",
              name: "bentoBox_",
              type: "address",
            },
            {
              internalType: "contract IERC20",
              name: "magicInternetMoney_",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint128",
              name: "accruedAmount",
              type: "uint128",
            },
          ],
          name: "LogAccrue",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "share",
              type: "uint256",
            },
          ],
          name: "LogAddCollateral",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "part",
              type: "uint256",
            },
          ],
          name: "LogBorrow",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "rate",
              type: "uint256",
            },
          ],
          name: "LogExchangeRate",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "newFeeTo",
              type: "address",
            },
          ],
          name: "LogFeeTo",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "share",
              type: "uint256",
            },
          ],
          name: "LogRemoveCollateral",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "part",
              type: "uint256",
            },
          ],
          name: "LogRepay",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "feeTo",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "feesEarnedFraction",
              type: "uint256",
            },
          ],
          name: "LogWithdrawFees",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "accrue",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "accrueInfo",
          outputs: [
            { internalType: "uint64", name: "lastAccrued", type: "uint64" },
            { internalType: "uint128", name: "feesEarned", type: "uint128" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "bool", name: "skim", type: "bool" },
            { internalType: "uint256", name: "share", type: "uint256" },
          ],
          name: "addCollateral",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "bentoBox",
          outputs: [
            { internalType: "contract IBentoBoxV1", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "borrow",
          outputs: [
            { internalType: "uint256", name: "part", type: "uint256" },
            { internalType: "uint256", name: "share", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "claimOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "collateral",
          outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint8[]", name: "actions", type: "uint8[]" },
            { internalType: "uint256[]", name: "values", type: "uint256[]" },
            { internalType: "bytes[]", name: "datas", type: "bytes[]" },
          ],
          name: "cook",
          outputs: [
            { internalType: "uint256", name: "value1", type: "uint256" },
            { internalType: "uint256", name: "value2", type: "uint256" },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "exchangeRate",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "feeTo",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
          name: "init",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address[]", name: "users", type: "address[]" },
            {
              internalType: "uint256[]",
              name: "maxBorrowParts",
              type: "uint256[]",
            },
            { internalType: "address", name: "to", type: "address" },
            {
              internalType: "contract ISwapper",
              name: "swapper",
              type: "address",
            },
          ],
          name: "liquidate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "magicInternetMoney",
          outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "masterContract",
          outputs: [
            {
              internalType: "contract CauldronMediumRiskV1",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "oracle",
          outputs: [
            { internalType: "contract IOracle", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "oracleData",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pendingOwner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "reduceSupply",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "share", type: "uint256" },
          ],
          name: "removeCollateral",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "bool", name: "skim", type: "bool" },
            { internalType: "uint256", name: "part", type: "uint256" },
          ],
          name: "repay",
          outputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newFeeTo", type: "address" },
          ],
          name: "setFeeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalBorrow",
          outputs: [
            { internalType: "uint128", name: "elastic", type: "uint128" },
            { internalType: "uint128", name: "base", type: "uint128" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalCollateralShare",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
            { internalType: "bool", name: "direct", type: "bool" },
            { internalType: "bool", name: "renounce", type: "bool" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "updateExchangeRate",
          outputs: [
            { internalType: "bool", name: "updated", type: "bool" },
            { internalType: "uint256", name: "rate", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "userBorrowPart",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "userCollateralShare",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "withdrawFees",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    token: {
      name: "xSUSHI",
      decimals: 18,
      address: "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272",
      oracleId: 2,
      oracleDatas: {
        multiply: "0x0000000000000000000000000000000000000000",
        divide: "0xe4e58df3956bc6423a62e87ddd99ca3120f1dd4b",
        decimals: 10,
      },
      abi: [
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_sushi",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "enter",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_share", type: "uint256" },
          ],
          name: "leave",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "sushi",
          outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "_owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "_spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "_value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "_from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "_to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "_value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "claimOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "lastMint",
          outputs: [
            { internalType: "uint128", name: "time", type: "uint128" },
            { internalType: "uint128", name: "amount", type: "uint128" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "clone", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            {
              internalType: "contract IBentoBoxV1",
              name: "bentoBox",
              type: "address",
            },
          ],
          name: "mintToBentoBox",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "nonces",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pendingOwner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner_", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
            { internalType: "bool", name: "direct", type: "bool" },
            { internalType: "bool", name: "renounce", type: "bool" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    stabilityFee: 12.5,
    interest: 1.5,
    ltv: 75,
    initialMax: 15,
    swapContractInfo: {
      address: "0xbF6F6654dB1c1742377ddF89cb42b3440B6E6699",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IBentoBoxV1",
              name: "bentoBox_",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "MIM",
          outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MIM3POOL",
          outputs: [
            { internalType: "contract CurvePool", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SUSHI",
          outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "TETHER",
          outputs: [
            { internalType: "contract TetherToken", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "bentoBox",
          outputs: [
            { internalType: "contract IBentoBoxV1", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "shareToMin", type: "uint256" },
            { internalType: "uint256", name: "shareFrom", type: "uint256" },
          ],
          name: "swap",
          outputs: [
            { internalType: "uint256", name: "extraShare", type: "uint256" },
            { internalType: "uint256", name: "shareReturned", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "xSushi",
          outputs: [
            { internalType: "contract SushiBar", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
  },
];
