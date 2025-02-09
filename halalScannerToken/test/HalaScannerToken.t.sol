// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {HalaScannerToken} from "../src/HalaScannerToken.sol";

contract HalaScannerTokenTest is Test {
    HalaScannerToken public halaScannerToken;

    function setUp() public {
        halaScannerToken = new HalaScannerToken();
    }

    function test_Mint() public {
        halaScannerToken.mint(msg.sender, 10000);
        assertEq(halaScannerToken.balanceOf(msg.sender), 10000);
    }
}


