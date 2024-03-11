// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract ArtNft is ERC721URIStorage, AccessControl {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    bytes32 public constant TRANSFER_ROLE = keccak256("TRANSFER_ROLE");

    constructor() ERC721("Art NFT", "ART") {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(TRANSFER_ROLE, msg.sender);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override(AccessControl, ERC721) returns (bool) {
        return true;
    }

    function createToken(
        string memory tokenURI
    ) public onlyRole(TRANSFER_ROLE) returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        return newTokenId;
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override onlyRole(TRANSFER_ROLE) {
        safeTransferFrom(from, to, tokenId, "");
    }
}
