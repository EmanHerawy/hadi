// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin-contracts/token/ERC20/ERC20.sol";
import "@openzeppelin-contracts/access/Ownable.sol";
import "@openzeppelin-contracts/token/ERC20/extensions/ERC20Capped.sol";

contract HalaScannerToken is ERC20, Ownable, ERC20Capped {
    constructor() ERC20("HalaScannerToken", "HST") ERC20Capped(1000000000 * 10 ** decimals()) Ownable(msg.sender) {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

   function _update(address from, address to, uint256 value) internal override (ERC20, ERC20Capped) {
        super._update(from, to, value);
   }
}
