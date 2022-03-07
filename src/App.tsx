import { useState } from "react";
import "./App.css";

import { Contract, ethers, Wallet } from "ethers";
import poolsInfo from "./utils/contracts/pool";
import oracleContractsInfo from "./utils/contracts/oracle";
import masterContractInfo from "./utils/contracts/master";
import { Provider } from "@ethersproject/abstract-provider";
import { JsonRpcProvider } from "@ethersproject/providers";

const gasLimitConst = 1000;
const CHAIN_ID = 1;
const CHAIN_ID_STR = "0x1";

let signer: Wallet;
let WALLET: string;

interface Token {
  contract: any;
  name: string;
  address: string;
  decimals: number;
}

interface Pool {
  name: string;
  id: number;
  token: Token;
  swapContract: Contract;
  contractInstance: Contract;
  masterContractInstance: Contract;
  oracelContractInstance: Contract;
  pairTokenContract: Contract;
}

function createPools() {
  const chainMasterContract = masterContractInfo.find(
    (contract) => contract.contractChain === CHAIN_ID_STR
  );

  if (!chainMasterContract) {
    console.log("No master Contract");
    return false;
  }

  const masterContract = new ethers.Contract(
    chainMasterContract.address,
    JSON.stringify(chainMasterContract.abi),
    signer
  );

  const chainPools = poolsInfo.filter(
    (pool) => pool.contractChain === CHAIN_ID_STR
  );

  const oracleContract: any = oracleContractsInfo.find((item) => item.id === 3);

  const oracelContractInstance = new ethers.Contract(
    oracleContract.address,
    JSON.stringify(oracleContract.abi),
    signer
  );

  const pools = chainPools.map((pool) =>
    createPool(pool, masterContract, oracelContractInstance)
  );

  // console.log("STAND CREATED POOLS:", pools);

  return pools;
}

function createPool(pool, masterContract, oracelContractInstance): Pool {
  const poolContract = new ethers.Contract(
    pool.contract.address,
    JSON.stringify(pool.contract.abi),
    signer
  );

  const tokenContract = new ethers.Contract(
    pool.token.address,
    JSON.stringify(pool.token.abi),
    signer.provider
  );

  const swapContract = new ethers.Contract(
    pool.swapContractInfo.address,
    JSON.stringify(pool.swapContractInfo.abi),
    signer
  );

  const pairTokenContract = new ethers.Contract(
    pool.pairToken.address,
    JSON.stringify(pool.token.abi),
    signer
  );

  const res: Pool = {
    name: pool.name,
    id: pool.id,
    contractInstance: poolContract,
    masterContractInstance: masterContract,
    oracelContractInstance: oracelContractInstance,
    token: {
      contract: tokenContract,
      name: pool.token.name,
      address: pool.token.address,
      decimals: pool.token.decimals,
    },
    swapContract: swapContract,
    pairTokenContract,
  };

  console.log("id", res.id);

  return res;
}

async function cookMultiBorrow(
  { collateralAmount, amount, minExpected },
  pool: Pool,
  approvalEncode: string
) {
  const tokenAddr = pool.token.address;
  const swapperAddres = pool.swapContract.address;
  const userAddr = WALLET;
  const eventsArray = [];
  const valuesArray = [];
  const datasArray = [];

  console.log(approvalEncode);

  eventsArray.push(24);
  valuesArray.push(0);
  datasArray.push(approvalEncode);

  const updateEncode = getUpdateRateEncode();
  eventsArray.push(11);
  valuesArray.push(0);
  datasArray.push(updateEncode);
  //10
  const getCollateralEncode2 = ethers.utils.defaultAbiCoder.encode(
    ["int256", "address", "bool"],
    ["-0x02", userAddr, false]
  );
  // if (collateralAmount) {
  //20
  const getDepositEncode1 = ethers.utils.defaultAbiCoder.encode(
    ["address", "address", "int256", "int256"],
    [tokenAddr, userAddr, collateralAmount, "0"]
  );
  eventsArray.push(20);
  valuesArray.push(0);
  datasArray.push(getDepositEncode1);
  eventsArray.push(10);
  valuesArray.push(0);
  datasArray.push(getCollateralEncode2);
  // }
  //5
  const getBorrowSwapperEncode2 = ethers.utils.defaultAbiCoder.encode(
    ["int256", "address"],
    [amount, swapperAddres]
  );
  eventsArray.push(5);
  valuesArray.push(0);
  datasArray.push(getBorrowSwapperEncode2);

  console.log("arr", eventsArray);

  console.log("AAAA", userAddr, minExpected, pool.swapContract.address);

  const swapStaticTx = await pool.swapContract.populateTransaction.swap(
    userAddr,
    minExpected,
    0,
    {
      gasLimit: 1e7,
    }
  );
  const swapCallByte = swapStaticTx.data.substr(0, 138);
  // console.log("TX", swapCallByte);
  // const parsedAccount = WALLET.substr(2);
  // 3c1Cb7D4c0ce0dc72eDc7Ea06acC866e62a8f1d8
  // const swapCallByte = `0x9f1d0f59000000000000000000000000${parsedAccount}00000000000000000000000000000000000000000000000000000000000186a0`;
  //02710
  //186a0
  // console.log(callBytes);
  //30

  console.log("swapCallByte:", [swapperAddres, swapCallByte]);
  const getCallEncode2 = ethers.utils.defaultAbiCoder.encode(
    ["address", "bytes", "bool", "bool", "uint8"],
    [swapperAddres, swapCallByte, false, true, 2]
  );
  eventsArray.push(30);
  valuesArray.push(0);
  datasArray.push(getCallEncode2);
  eventsArray.push(10);
  valuesArray.push(0);
  datasArray.push(getCollateralEncode2);
  const cookData = {
    events: eventsArray,
    values: valuesArray,
    datas: datasArray,
  };
  console.log("cookData", cookData);

  try {
    const estimateGas = await pool.contractInstance.estimateGas.cook(
      cookData.events,
      cookData.values,
      cookData.datas,
      {
        value: 0,
      }
    );
    const gasLimit = gasLimitConst + +estimateGas.toString();
    console.log("gasLimit for cook:", gasLimit);
    // const result = await pool.contractInstance.cook(
    //   cookData.events,
    //   cookData.values,
    //   cookData.datas,
    //   {
    //     value: 0,
    //     gasLimit,
    //   }
    // );
    // console.log(result);
  } catch (e: any) {
    console.log("MULTI COOK ERR:", e.code);
    if (e.code === "UNPREDICTABLE_GAS_LIMIT") {
      const notification = {
        msg: "OMG OMG OMG",
      };
      // $store.commit("addNotification", notification);
    }
  }

  return cookData;
}

async function getApprovalEncode(pool: Pool) {
  const account = WALLET;
  console.log({ pool });
  const verifyingContract = "0xd96f48665a1410c0cd669a88898eca36b9fc2cce"; // await getVerifyingContract(pool);
  const masterContract = "0x476b1e35dde474cb9aa1f6b85c9cc589bfa85c1f"; // await getMasterContract(pool);
  const nonce = await getNonce(pool);
  const chainId = CHAIN_ID;
  const domain = {
    name: "BentoBox V1",
    chainId,
    verifyingContract,
  };
  // The named list of all type definitions
  const types = {
    SetMasterContractApproval: [
      { name: "warning", type: "string" },
      { name: "user", type: "address" },
      { name: "masterContract", type: "address" },
      { name: "approved", type: "bool" },
      { name: "nonce", type: "uint256" },
    ],
  };
  // The data to sign
  const value = {
    warning: "Give FULL access to funds in (and approved to) BentoBox?",
    user: account,
    masterContract,
    approved: true,
    nonce,
  };
  console.log(chainId);

  // return '0x000000000000000000000000f552f5223d3f7ceb580fa92fe0afc6ed8c09179b000000000000000000000000476b1e35dde474cb9aa1f6b85c9cc589bfa85c1f0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000001baba2607e1577b9b9f5d85bf3bc04a76dd88a3ae3eb06a44d0dfa54ba60485cfb1fcb9c50b9124fa74ef1cea00f8f941dd8e152a3426cdafa0d0fcde48de950cd'

  let signature;
  try {
    signature = await signer._signTypedData(domain, types, value);
  } catch (e: any) {
    console.log("SIG ERR:", e.code);
    if (e.code === -32603) {
      return "ledger";
      // $store.commit("setPopupState", {
      //   type: "device-error",
      //   isShow: true,
      // });
    }
    return false;
  }

  console.log({ signature });

  const parsedSignature = parseSignature(signature);

  return ethers.utils.defaultAbiCoder.encode(
    ["address", "address", "bool", "uint8", "bytes32", "bytes32"],
    [
      account,
      masterContract,
      true,
      parsedSignature.v,
      parsedSignature.r,
      parsedSignature.s,
    ]
  );
}

function parseSignature(signature) {
  const parsedSignature = signature.substring(2);

  var r = parsedSignature.substring(0, 64);
  var s = parsedSignature.substring(64, 128);
  var v = parsedSignature.substring(128, 130);

  return {
    r: "0x" + r,
    s: "0x" + s,
    v: parseInt(v, 16),
  };
}

function getUpdateRateEncode() {
  return ethers.utils.defaultAbiCoder.encode(
    ["bool", "uint256", "uint256"],
    [true, "0x00", "0x00"]
  );
}

async function getNonce(pool: Pool) {
  try {
    const nonces = await pool.masterContractInstance.nonces(WALLET);
    console.log("NONCE:", nonces.toString());
    return nonces.toString();
  } catch (e) {
    console.log("getNonce err:", e);
  }
}

let pools: any;

async function main() {
  const wallet = new ethers.Wallet(
    "5cf73c74a82ceaa60a91f4e854bbf0cabd814a6a9736f89709e54c40630f712b",
    new JsonRpcProvider(
      "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  );
  signer = wallet;
  WALLET = wallet.address;
  pools = createPools();
}

main();

// const  maxPairValue = function() {
//   var e, t;
//   return this.mainValue ? (e = this.mainValue / this.tokenToUsd,
//       t = e / 100 * (this.ltv - 1)) : (e = this.userTotalCollateral / this.tokenToUsd,
//       t = e / 100 * (this.ltv - 1) - this.userTotalBorrowed),
//       t;
// }

function multiplyMimExpected(pairValue) {
  const multiplier = 9;
  const percentValue = "90";

  for (
    var e = parseFloat(percentValue),
      t = e / 100,
      a = 0.995 * pairValue,
      i = 0,
      r = multiplier;
    r > 0;
    r--
  )
    (i += +a), (a *= t);

  return i;
}

function toFixed(e, t) {
  var a = new RegExp("^-?\\d+(?:.\\d{0," + (t || -1) + "})?");
  return e.toString().match(a)[0];
}

let oraclePrice: number;
let USTValue: any;

function App() {
  const [pairValue, setPairValue] = useState(0);
  const [mimAmount, setMimAmount] = useState(0);
  const [ustValue, setUstValue] = useState("");
  const [resData, setResData] = useState("");
  const [aprovalEncode, setAprovalEncode] = useState("");

  const calc = async (val: string) => {
    setResData("");
    setUstValue(val);
    console.log(val);

    const ltv = 90;

    const op = await pools[0].oracelContractInstance.peekSpot(0, {
      gasLimit: 3e5,
    });

    oraclePrice = +(op + "");

    oraclePrice = oraclePrice / 1e18;
    USTValue = +val;

    const pairValue = ((USTValue / oraclePrice / 100) * (ltv - 1) * ltv) / 90;
    console.log(pairValue);
    const mimAmount = multiplyMimExpected(pairValue);

    setPairValue(toFixed(pairValue, 18));
    setMimAmount(toFixed(mimAmount, 18));
  };

  const go = async () => {
    const pool: Pool = pools[0];

    const l = 0.99; // slipage = 1

    console.log(
      "oraclePrice:",
      oraclePrice,
      "p:",
      mimAmount,
      "l:",
      l,
      "slipage:",
      1
    );

    let minExpected: any = mimAmount * oraclePrice * l;
    console.log({ minExpected });

    minExpected = ethers.utils.parseUnits(toFixed(minExpected, 18), 18);

    console.log({ minExpected });

    minExpected = await pool.masterContractInstance.toShare(
      pool.token.address,
      minExpected,
      true
    );

    console.log({ minExpected });

    const payload: any = {
      collateralAmount: ethers.utils.parseUnits(toFixed(USTValue, 18), 18),
      amount: ethers.utils.parseUnits(toFixed(mimAmount, 18), 18),
      minExpected,
    };

    console.log(payload);

    const aprovalEncode = (await getApprovalEncode(pool)) as string;

    console.log({ aprovalEncode });

    const res = await cookMultiBorrow(payload, pool, aprovalEncode);
    setResData(res.datas.join("\n"));
  };

  const getSecret = async () => {
    const pool: Pool = pools[0];

    const aprovalEncode = await getApprovalEncode(pool);

    setAprovalEncode(aprovalEncode as string);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* {aprovalEncode.length > 0 ? (
          <p style={{ wordWrap: "break-word" }}>
            <b>Secret:</b> {aprovalEncode}
          </p>
        ) : (
          <button onClick={getSecret}>Benta Box signature</button>
        )} */}

        <h2>Example</h2>

        <input
          placeholder="Value"
          value={ustValue}
          onChange={(e) => calc(e.target.value)}
        ></input>
        <p>MIM: {pairValue}</p>
        <p>Expected MIM amount (6.13x): {mimAmount} </p>
        <button onClick={go}>NOTHING TO DO</button>
        <textarea
          style={{
            fontSize: "10pt",
            textAlign: "left",
            width: "95%",
            height: 400,
            marginTop: 40,
          }}
          defaultValue={resData}
        ></textarea>
      </header>
    </div>
  );
}

export default App;
