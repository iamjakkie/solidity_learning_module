// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Mappings1 {
    mapping(uint => string) public names;

    constructor() {
        names[1] = "Adam";
        names[2] = "Ben";
    }

}

contract Mappings2 {

    struct Book {
        string author;
        string title;
    }

    mapping(uint => Book) public books;

    constructor() {
        books[1] = Book("Leo Tolstoy", "War and Peace");
        books[2] = Book("F. Scott Fitzgerald", "The Great Gatsby");
    }
}

contract Mappings3 {
    mapping(uint => string) public myMapping;

    function get(uint _id) public view returns (string memory) {
        return myMapping[_id];
    }

    function set(uint _id, string memory _value) public {
        myMapping[_id] = _value;
    }

    function remove(uint _id) public {
        delete myMapping[_id];
    }
}