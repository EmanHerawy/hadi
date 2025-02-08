// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {HalaScannerToken} from "../src/HalaScannerToken.sol";

contract HalaScannerTokenScript is Script {
    HalaScannerToken public halaScannerToken;

    function setUp() public {}

    function run() public {
       uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        halaScannerToken = new HalaScannerToken();

        vm.stopBroadcast();
    }
}
