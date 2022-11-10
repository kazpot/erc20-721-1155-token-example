// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract AnimalQuest is ERC1155 {

    uint256 public constant DOG = 0;
    uint256 public constant CAT = 1;
    uint256 public constant BIRD = 2;
    uint256 public constant LION = 3;
    uint256 public constant ELEPHANT = 4;
    uint256 public constant HORSE = 5;

    constructor() ERC1155("https://animalquest.com/assets/{id}.json") {
        _mint(msg.sender, DOG, 10**18, "");
        _mint(msg.sender, CAT, 10**18, "");
        _mint(msg.sender, BIRD, 1000, "");
        _mint(msg.sender, LION, 1000, "");
        _mint(msg.sender, ELEPHANT, 1, "");
        _mint(msg.sender, HORSE, 1, "");
    }
}
